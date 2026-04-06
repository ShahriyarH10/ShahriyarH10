const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('Launching browser...');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu'
    ]
  });

  const page = await browser.newPage();

  // Desktop viewport — wide enough to show full two-column layout
  await page.setViewport({ width: 1000, height: 800, deviceScaleFactor: 2 });

  const filePath = path.resolve(__dirname, 'github_profile_preview.html');
  console.log(`Loading: ${filePath}`);

  await page.goto(`file://${filePath}`, { waitUntil: 'networkidle2', timeout: 30000 });

  // Wait for Google Fonts and any animations to settle
  await new Promise(r => setTimeout(r, 3000));

  // Wait for GitHub API data to load (stat cards stop showing "—")
  try {
    await page.waitForFunction(
      () => {
        const el = document.getElementById('stat-repos');
        return el && !el.classList.contains('loading');
      },
      { timeout: 10000 }
    );
    console.log('GitHub stats loaded.');
  } catch (e) {
    console.log('GitHub stats timed out, screenshotting anyway.');
  }

  // Extra settle time for bar animations
  await new Promise(r => setTimeout(r, 1500));

  const outputPath = path.resolve(__dirname, 'profile-preview.png');

  await page.screenshot({
    path: outputPath,
    fullPage: true
  });

  console.log(`Screenshot saved to: ${outputPath}`);
  await browser.close();
})();
