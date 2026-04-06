const puppeteer = require('puppeteer');

(async () => {
  console.log('Launching browser...');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage'
    ]
  });

  const page = await browser.newPage();

  await page.setViewport({ width: 1000, height: 800, deviceScaleFactor: 2 });

  console.log('Opening local server page...');

  await page.goto('http://localhost:8080/index.html', {
    waitUntil: 'networkidle2',
    timeout: 60000
  });

  // Wait for stats to load properly
  try {
    await page.waitForFunction(() => {
      const ids = ['stat-repos','stat-stars','streak-commits'];
      return ids.every(id => {
        const el = document.getElementById(id);
        return el && !el.classList.contains('loading');
      });
    }, { timeout: 20000 });

    console.log('Stats loaded successfully.');
  } catch (e) {
    console.log('Timeout waiting for stats, continuing...');
  }

  // Extra delay for animations
  await new Promise(r => setTimeout(r, 2000));

  await page.screenshot({
    path: 'profile-preview.png',
    fullPage: true
  });

  console.log('Screenshot saved.');

  await browser.close();
})();
