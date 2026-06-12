const puppeteer = require('puppeteer');
const path = require('path');
const FILE = 'file:///Users/suryarjunagopakumar/Documents/Cloudsufi/MillworkSuite/MillWorkSuite-UX/millworksuite_ux.html';
const OUT  = path.join(__dirname, 'screenshots');

async function capture(id, file, extra) {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto(FILE, { waitUntil: 'networkidle0' });
  await page.evaluate((id, extra) => {
    show(id);
    if (extra) extra();
  }, id, null);
  if (extra) await page.evaluate(extra);
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: `${OUT}/${file}` });
  console.log('Captured:', file);
  await browser.close();
}

(async () => {
  // Hub — full page
  await capture('hub', 'hub.png');

  // Hub — notifications panel open
  const b1 = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const p1 = await b1.newPage();
  await p1.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await p1.goto(FILE, { waitUntil: 'networkidle0' });
  await p1.evaluate(() => { show('hub'); toggleNotif(); });
  await new Promise(r => setTimeout(r, 400));
  await p1.screenshot({ path: `${OUT}/hub_notifications.png` });
  console.log('Captured: hub_notifications.png');
  await b1.close();

  // Hub — user chip dropdown open
  const b2 = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const p2 = await b2.newPage();
  await p2.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await p2.goto(FILE, { waitUntil: 'networkidle0' });
  await p2.evaluate(() => { show('hub'); toggleChipMenu(); });
  await new Promise(r => setTimeout(r, 400));
  await p2.screenshot({ path: `${OUT}/hub_user_dropdown.png` });
  console.log('Captured: hub_user_dropdown.png');
  await b2.close();

  // Workspace — full
  await capture('workspace', 'workspace.png');

  // Workspace — AI summary overlay open
  const b3 = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const p3 = await b3.newPage();
  await p3.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await p3.goto(FILE, { waitUntil: 'networkidle0' });
  await p3.evaluate(() => {
    show('workspace');
    const btn = document.querySelector('.ws-ai-btn');
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 500));
  await p3.screenshot({ path: `${OUT}/workspace_ai.png` });
  console.log('Captured: workspace_ai.png');
  await b3.close();

  console.log('All done.');
})();
