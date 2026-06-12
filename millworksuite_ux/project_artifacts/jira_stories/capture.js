const puppeteer = require('puppeteer');
const path = require('path');

const FILE = 'file:///Users/suryarjunagopakumar/Documents/Cloudsufi/MillworkSuite/MillWorkSuite-UX/millworksuite_ux.html';
const OUT  = path.join(__dirname, 'screenshots');

const screens = [
  { id: 'landing',   file: 'landing.png'   },
  { id: 'login',     file: 'login.png'     },
  { id: 'dashboard', file: 'dashboard_list.png' },
];

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });

  for (const s of screens) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
    await page.goto(FILE, { waitUntil: 'networkidle0' });
    await page.evaluate(id => {
      if (typeof show === 'function') show(id);
    }, s.id);
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: `${OUT}/${s.file}`, fullPage: false });
    console.log('Captured:', s.file);
    await page.close();
  }

  // Dashboard — grid view
  const pg = await browser.newPage();
  await pg.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await pg.goto(FILE, { waitUntil: 'networkidle0' });
  await pg.evaluate(() => {
    show('dashboard');
    // switch to grid
    document.querySelector('.dash-view-toggle button[data-view="grid"]').click();
  });
  await new Promise(r => setTimeout(r, 400));
  await pg.screenshot({ path: `${OUT}/dashboard_grid.png`, fullPage: false });
  console.log('Captured: dashboard_grid.png');
  await pg.close();

  // Dashboard — board view
  const pb = await browser.newPage();
  await pb.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await pb.goto(FILE, { waitUntil: 'networkidle0' });
  await pb.evaluate(() => {
    show('dashboard');
    document.querySelector('.dash-view-toggle button[data-view="board"]').click();
  });
  await new Promise(r => setTimeout(r, 400));
  await pb.screenshot({ path: `${OUT}/dashboard_board.png`, fullPage: false });
  console.log('Captured: dashboard_board.png');
  await pb.close();

  await browser.close();
  console.log('All done.');
})();
