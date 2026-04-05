<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Shahriyar Hasan – GitHub Profile</title>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Syne:wght@400;700;800&display=swap" rel="stylesheet"/>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #020810; min-height: 100vh; display: flex; justify-content: center; padding: 2rem 1rem; }
    .wrap { font-family: 'Syne', sans-serif; max-width: 860px; width: 100%; }
    .badge-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 1rem; }
    .badge { display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; border-radius: 20px; font-family: 'Fira Code', monospace; font-size: 12px; font-weight: 500; border: 1.5px solid; text-decoration: none; }
    .badge.linkedin { background: #0a1628; color: #4da3ff; border-color: #1a3a6e; }
    .badge.twitter  { background: #0a1a2e; color: #4dc4ff; border-color: #1a3a5e; }
    .badge.telegram { background: #0a1e28; color: #4de0f5; border-color: #1a3e50; }
    .header-section { border: 1.5px solid #2a3a5e; border-radius: 16px; padding: 2rem 2rem 1.5rem; background: linear-gradient(135deg, #060c1a 0%, #0d1630 60%, #070e22 100%); margin-bottom: 1.5rem; position: relative; overflow: hidden; }
    .header-section::before { content: ''; position: absolute; top: -60px; right: -60px; width: 220px; height: 220px; border-radius: 50%; background: radial-gradient(circle, rgba(55,138,221,0.15) 0%, transparent 70%); pointer-events: none; }
    .greeting { font-family: 'Fira Code', monospace; font-size: 11px; color: #378add; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 10px; }
    .name { font-size: 38px; font-weight: 800; color: #e8f0ff; line-height: 1.1; margin-bottom: 8px; }
    .name span { color: #378add; }
    .tagline { font-family: 'Fira Code', monospace; font-size: 13px; color: #7a9fcf; margin-bottom: 18px; }
    .stat-pills { display: flex; gap: 12px; flex-wrap: wrap; }
    .stat-pill { background: rgba(55,138,221,0.1); border: 1px solid rgba(55,138,221,0.25); border-radius: 8px; padding: 8px 14px; font-size: 12px; color: #a0c0e8; font-family: 'Fira Code', monospace; }
    .stat-pill strong { color: #6bb8ff; font-size: 18px; display: block; }
    .section-title { font-size: 11px; letter-spacing: 4px; text-transform: uppercase; color: #378add; font-family: 'Fira Code', monospace; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid #1a2a4a; }
    .skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 10px; }
    .skill-chip { background: #0a1628; border: 1px solid #1a2a4a; border-radius: 10px; padding: 10px 8px; text-align: center; transition: border-color 0.2s; cursor: default; }
    .skill-chip:hover { border-color: #378add; }
    .skill-chip .icon { font-size: 22px; margin-bottom: 4px; }
    .skill-chip .lbl { font-size: 11px; color: #7a9fcf; font-family: 'Fira Code', monospace; }
    .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; }
    .card { background: #060c1a; border: 1.5px solid #1a2a4a; border-radius: 14px; padding: 1.25rem; }
    .thm-badge { display: inline-flex; align-items: center; gap: 8px; background: #0a1e14; border: 1px solid #1a3a2a; border-radius: 10px; padding: 10px 14px; margin-top: 14px; }
    .thm-dot { width: 10px; height: 10px; border-radius: 50%; background: #1d9e75; flex-shrink: 0; }
    .thm-text { font-family: 'Fira Code', monospace; font-size: 12px; color: #5dcaa5; }
    .info-row { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 8px; }
    .info-dot { width: 6px; height: 6px; border-radius: 50%; background: #378add; margin-top: 6px; flex-shrink: 0; }
    .info-text { font-size: 13px; color: #8a9fc0; font-family: 'Fira Code', monospace; line-height: 1.5; }
    .stat-card { background: #060c1a; border: 1.5px solid #1a2a4a; border-radius: 12px; padding: 1rem; text-align: center; }
    .stat-card .num { font-size: 28px; font-weight: 800; color: #6bb8ff; font-family: 'Fira Code', monospace; transition: all 0.4s ease; }
    .stat-card .num.loading { color: #1a2a4a; animation: pulse 1.2s infinite; }
    .stat-card .lbl { font-size: 11px; color: #5a7a9e; text-transform: uppercase; letter-spacing: 2px; margin-top: 4px; }
    .activity-bar { background: #060c1a; border: 1.5px solid #1a2a4a; border-radius: 14px; padding: 1.25rem; margin-bottom: 1.5rem; }
    .bar-row { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
    .bar-label { font-family: 'Fira Code', monospace; font-size: 12px; color: #7a9fcf; width: 90px; text-align: right; flex-shrink: 0; }
    .bar-track { flex: 1; background: #0a1628; border-radius: 4px; height: 8px; overflow: hidden; }
    .bar-fill { height: 100%; border-radius: 4px; width: 0%; transition: width 1s ease; }
    .bar-pct { font-family: 'Fira Code', monospace; font-size: 11px; color: #5a7a9e; width: 36px; text-align: right; }
    .footer { text-align: center; font-family: 'Fira Code', monospace; font-size: 11px; color: #3a5a7e; padding-top: 1rem; border-top: 1px solid #1a2a4a; letter-spacing: 2px; }
    .live-dot { display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #1d9e75; margin-right: 6px; animation: blink 1.5s infinite; }
    .live-label { font-family: 'Fira Code', monospace; font-size: 10px; color: #5dcaa5; letter-spacing: 2px; display: flex; align-items: center; margin-bottom: 14px; }
    .last-updated { font-family: 'Fira Code', monospace; font-size: 10px; color: #3a5a7e; margin-top: 10px; }
    .streak-card { background: #060c1a; border: 1.5px solid #1a2a4a; border-radius: 14px; padding: 1.25rem; margin-bottom: 1.5rem; }
    .streak-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
    .streak-item { text-align: center; padding: 12px 8px; background: #0a1628; border-radius: 10px; border: 1px solid #1a2a4a; }
    .streak-item .s-num { font-size: 24px; font-weight: 800; color: #6bb8ff; font-family: 'Fira Code', monospace; }
    .streak-item .s-num.loading { color: #1a2a4a; animation: pulse 1.2s infinite; }
    .streak-item .s-lbl { font-size: 10px; color: #5a7a9e; text-transform: uppercase; letter-spacing: 1.5px; margin-top: 4px; }
    .recent-repos { background: #060c1a; border: 1.5px solid #1a2a4a; border-radius: 14px; padding: 1.25rem; margin-bottom: 1.5rem; }
    .repo-item { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #0d1a2e; }
    .repo-item:last-child { border-bottom: none; padding-bottom: 0; }
    .repo-name { font-family: 'Fira Code', monospace; font-size: 12px; color: #6bb8ff; text-decoration: none; }
    .repo-name:hover { color: #a0d0ff; }
    .repo-meta { display: flex; gap: 12px; align-items: center; flex-shrink: 0; }
    .repo-lang { font-family: 'Fira Code', monospace; font-size: 11px; color: #5a7a9e; }
    .repo-stars { font-family: 'Fira Code', monospace; font-size: 11px; color: #7a6030; }
    .repo-skeleton { background: #0a1628; border-radius: 4px; height: 12px; animation: pulse 1.2s infinite; }
    @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
    @media (max-width: 560px) { .two-col { grid-template-columns: 1fr; } .name { font-size: 28px; } .streak-grid { grid-template-columns: 1fr 1fr; } }
  </style>
</head>
<body>
<div class="wrap">

  <div class="badge-row">
    <a href="https://www.linkedin.com/in/md-shahriyar-hasan/" target="_blank" class="badge linkedin">⬡ LinkedIn</a>
    <a href="https://x.com/Shahriyar_H10" target="_blank" class="badge twitter">⬡ Twitter / X</a>
    <a href="https://t.me/Shahriyar_H10" target="_blank" class="badge telegram">⬡ Telegram</a>
  </div>

  <!-- HEADER -->
  <div class="header-section">
    <div class="greeting">// welcome to my profile</div>
    <div class="name">Shahriyar <span>Hasan</span></div>
    <div class="tagline">full-stack developer &amp; cybersecurity enthusiast</div>
    <div class="stat-pills">
      <div class="stat-pill"><strong id="pill-repos">...</strong>public repos</div>
      <div class="stat-pill"><strong>2021</strong>active since</div>
      <div class="stat-pill"><strong id="pill-updated">...</strong>last push</div>
      <div class="stat-pill"><strong id="pill-following">...</strong>following</div>
    </div>
  </div>

  <!-- ABOUT + LIVE STATS -->
  <div class="two-col">
    <div class="card">
      <div class="section-title">// about</div>
      <div class="info-row"><div class="info-dot"></div><div class="info-text">building useful tools &amp; open-source projects</div></div>
      <div class="info-row"><div class="info-dot"></div><div class="info-text">learning new tech &amp; sharing with the community</div></div>
      <div class="info-row"><div class="info-dot"></div><div class="info-text">open to collaborations &amp; connections</div></div>
      <div class="info-row"><div class="info-dot"></div><div class="info-text">cybersecurity practice via TryHackMe</div></div>
      <div class="thm-badge">
        <div class="thm-dot"></div>
        <div class="thm-text">TryHackMe · ShahriyarH10</div>
      </div>
    </div>
    <div class="card">
      <div class="live-label"><span class="live-dot"></span>live github stats</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        <div class="stat-card"><div class="num loading" id="stat-repos">—</div><div class="lbl">Repos</div></div>
        <div class="stat-card"><div class="num loading" id="stat-followers">—</div><div class="lbl">Followers</div></div>
        <div class="stat-card"><div class="num loading" id="stat-following">—</div><div class="lbl">Following</div></div>
        <div class="stat-card"><div class="num loading" id="stat-stars">—</div><div class="lbl">Total Stars</div></div>
      </div>
      <div class="last-updated" id="last-updated">// fetching data...</div>
    </div>
  </div>

  <!-- CONTRIBUTION ACTIVITY (from public events) -->
  <div class="streak-card">
    <div class="section-title">// recent contribution activity (last 90 events)</div>
    <div class="streak-grid">
      <div class="streak-item"><div class="s-num loading" id="streak-commits">—</div><div class="s-lbl">Commits pushed</div></div>
      <div class="streak-item"><div class="s-num loading" id="streak-prs">—</div><div class="s-lbl">Pull requests</div></div>
      <div class="streak-item"><div class="s-num loading" id="streak-issues">—</div><div class="s-lbl">Issues opened</div></div>
    </div>
  </div>

  <!-- RECENTLY UPDATED REPOS -->
  <div class="recent-repos">
    <div class="section-title">// recently pushed repos</div>
    <div id="repos-list">
      <div class="repo-item"><div class="repo-skeleton" style="width:40%"></div><div class="repo-skeleton" style="width:20%"></div></div>
      <div class="repo-item"><div class="repo-skeleton" style="width:35%"></div><div class="repo-skeleton" style="width:20%"></div></div>
      <div class="repo-item"><div class="repo-skeleton" style="width:50%"></div><div class="repo-skeleton" style="width:20%"></div></div>
      <div class="repo-item"><div class="repo-skeleton" style="width:30%"></div><div class="repo-skeleton" style="width:20%"></div></div>
      <div class="repo-item"><div class="repo-skeleton" style="width:45%"></div><div class="repo-skeleton" style="width:20%"></div></div>
    </div>
  </div>

  <!-- TECH STACK -->
  <div class="card" style="margin-bottom:1.5rem">
    <div class="section-title">// tech stack</div>
    <div class="skills-grid">
      <div class="skill-chip"><div class="icon">🔵</div><div class="lbl">C / C++</div></div>
      <div class="skill-chip"><div class="icon">🟨</div><div class="lbl">JavaScript</div></div>
      <div class="skill-chip"><div class="icon">⚛️</div><div class="lbl">React</div></div>
      <div class="skill-chip"><div class="icon">🟢</div><div class="lbl">Node.js</div></div>
      <div class="skill-chip"><div class="icon">🍃</div><div class="lbl">MongoDB</div></div>
      <div class="skill-chip"><div class="icon">🎨</div><div class="lbl">Tailwind</div></div>
      <div class="skill-chip"><div class="icon">☕</div><div class="lbl">Java</div></div>
      <div class="skill-chip"><div class="icon">💜</div><div class="lbl">C#</div></div>
      <div class="skill-chip"><div class="icon">🐚</div><div class="lbl">Bash</div></div>
      <div class="skill-chip"><div class="icon">🐧</div><div class="lbl">Linux</div></div>
      <div class="skill-chip"><div class="icon">🖌️</div><div class="lbl">Figma</div></div>
      <div class="skill-chip"><div class="icon">🎯</div><div class="lbl">Canva</div></div>
    </div>
  </div>

  <!-- TOP LANGUAGES (live from repos) -->
  <div class="activity-bar">
    <div class="section-title">// top languages (calculated from your repos)</div>
    <div id="lang-bars">
      <div class="bar-row">
        <div class="bar-label">loading</div>
        <div class="bar-track"><div class="bar-fill" style="background:#1a2a4a;width:60%;transition:none"></div></div>
        <div class="bar-pct">—</div>
      </div>
    </div>
  </div>

  <div class="footer">// let's build something awesome together · github.com/ShahriyarH10</div>

</div>

<script>
  const USERNAME = 'ShahriyarH10';
  const API = 'https://api.github.com';

  const LANG_COLORS = {
    JavaScript:  'linear-gradient(90deg,#185fa5,#378add)',
    TypeScript:  'linear-gradient(90deg,#185fa5,#4dc4ff)',
    'C++':       'linear-gradient(90deg,#533ab7,#7f77dd)',
    C:           'linear-gradient(90deg,#4a3aa0,#7f77dd)',
    HTML:        'linear-gradient(90deg,#a32d2d,#e24b4a)',
    CSS:         'linear-gradient(90deg,#0c447c,#378add)',
    Python:      'linear-gradient(90deg,#0f6e56,#1d9e75)',
    Java:        'linear-gradient(90deg,#854f0b,#ef9f27)',
    'C#':        'linear-gradient(90deg,#3c3489,#afa9ec)',
    Bash:        'linear-gradient(90deg,#3b6d11,#639922)',
    Shell:       'linear-gradient(90deg,#3b6d11,#639922)',
    PHP:         'linear-gradient(90deg,#533ab7,#afa9ec)',
    Ruby:        'linear-gradient(90deg,#a32d2d,#f09595)',
    Go:          'linear-gradient(90deg,#185fa5,#85b7eb)',
    Rust:        'linear-gradient(90deg,#854f0b,#fac775)',
    Default:     'linear-gradient(90deg,#185fa5,#378add)'
  };

  function timeAgo(dateStr) {
    const diff = Date.now() - new Date(dateStr);
    const days = Math.floor(diff / 86400000);
    if (days === 0) return 'today';
    if (days === 1) return '1d ago';
    if (days < 30) return days + 'd ago';
    const months = Math.floor(days / 30);
    if (months < 12) return months + 'mo ago';
    return Math.floor(months / 12) + 'yr ago';
  }

  function setNum(id, val) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = val;
    el.classList.remove('loading');
  }

  async function fetchUser() {
    const r = await fetch(`${API}/users/${USERNAME}`);
    if (!r.ok) throw new Error('rate limited');
    const d = await r.json();
    setNum('stat-repos', d.public_repos);
    setNum('stat-followers', d.followers);
    setNum('stat-following', d.following);
    document.getElementById('pill-repos').textContent = d.public_repos;
    document.getElementById('pill-following').textContent = d.following;
    const now = new Date();
    document.getElementById('last-updated').textContent =
      '// synced at ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  async function fetchRepos() {
    const r = await fetch(`${API}/users/${USERNAME}/repos?per_page=100&sort=pushed`);
    if (!r.ok) throw new Error('repos fetch failed');
    const repos = await r.json();
    if (!Array.isArray(repos)) return;

    let totalStars = 0;
    const langCount = {};
    repos.forEach(repo => {
      totalStars += (repo.stargazers_count || 0);
      if (repo.language) langCount[repo.language] = (langCount[repo.language] || 0) + 1;
    });

    setNum('stat-stars', totalStars);

    if (repos[0] && repos[0].pushed_at) {
      document.getElementById('pill-updated').textContent = timeAgo(repos[0].pushed_at);
    }

    const top5 = repos.slice(0, 5);
    document.getElementById('repos-list').innerHTML = top5.map(repo => `
      <div class="repo-item">
        <a class="repo-name" href="${repo.html_url}" target="_blank">${repo.name}</a>
        <div class="repo-meta">
          ${repo.language ? `<span class="repo-lang">${repo.language}</span>` : ''}
          <span class="repo-stars">★ ${repo.stargazers_count}</span>
          <span class="repo-lang">${timeAgo(repo.pushed_at)}</span>
        </div>
      </div>
    `).join('');

    const sorted = Object.entries(langCount).sort((a, b) => b[1] - a[1]).slice(0, 6);
    const total = sorted.reduce((s, [, v]) => s + v, 0);

    document.getElementById('lang-bars').innerHTML = sorted.map(([lang, count]) => {
      const pct = Math.round((count / total) * 100);
      const color = LANG_COLORS[lang] || LANG_COLORS.Default;
      const safeId = 'bar-' + lang.replace(/[^a-zA-Z0-9]/g, '');
      return `
        <div class="bar-row">
          <div class="bar-label">${lang}</div>
          <div class="bar-track"><div class="bar-fill" id="${safeId}" style="background:${color};width:0%"></div></div>
          <div class="bar-pct">${pct}%</div>
        </div>`;
    }).join('');

    setTimeout(() => {
      sorted.forEach(([lang, count]) => {
        const pct = Math.round((count / total) * 100);
        const el = document.getElementById('bar-' + lang.replace(/[^a-zA-Z0-9]/g, ''));
        if (el) el.style.width = pct + '%';
      });
    }, 120);
  }

  async function fetchEvents() {
    const r = await fetch(`${API}/users/${USERNAME}/events/public?per_page=100`);
    if (!r.ok) throw new Error('events fetch failed');
    const events = await r.json();
    if (!Array.isArray(events)) return;

    let commits = 0, prs = 0, issues = 0;
    events.forEach(e => {
      if (e.type === 'PushEvent') commits += (e.payload.commits || []).length;
      if (e.type === 'PullRequestEvent') prs++;
      if (e.type === 'IssuesEvent') issues++;
    });

    setNum('streak-commits', commits);
    setNum('streak-prs', prs);
    setNum('streak-issues', issues);
  }

  async function init() {
    try { await fetchUser(); } catch (e) {
      document.getElementById('last-updated').textContent = '// api rate limited — try again later';
    }
    try { await fetchRepos(); } catch (e) {
      document.getElementById('repos-list').innerHTML =
        '<div style="font-family:\'Fira Code\',monospace;font-size:12px;color:#3a5a7e;padding:8px 0">// could not load repos</div>';
    }
    try { await fetchEvents(); } catch (e) {
      ['streak-commits','streak-prs','streak-issues'].forEach(id => setNum(id, 'n/a'));
    }
  }

  init();
</script>
</body>
</html>
