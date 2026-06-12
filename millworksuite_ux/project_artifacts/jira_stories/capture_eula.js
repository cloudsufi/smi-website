const puppeteer = require('puppeteer');
const path = require('path');

const FILE = 'file:///Users/suryarjunagopakumar/Documents/Cloudsufi/MillworkSuite/MillWorkSuite-UX/millworksuite_ux.html';
const OUT  = path.join(__dirname, 'screenshots');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });

  // EULA — initial state (locked, scroll hint visible, checkbox disabled)
  const p1 = await browser.newPage();
  await p1.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await p1.goto(FILE, { waitUntil: 'networkidle0' });
  await p1.evaluate(() => { show('login'); showEula(); });
  await new Promise(r => setTimeout(r, 500));
  await p1.screenshot({ path: `${OUT}/eula_locked.png` });
  console.log('Captured: eula_locked.png');
  await p1.close();

  // EULA — scrolled to bottom (checkbox unlocked, accept enabled)
  const p2 = await browser.newPage();
  await p2.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await p2.goto(FILE, { waitUntil: 'networkidle0' });
  await p2.evaluate(() => {
    show('login'); showEula();
    // Scroll eula body to bottom
    const body = document.getElementById('eulaBody');
    body.scrollTop = body.scrollHeight;
    body.dispatchEvent(new Event('scroll'));
  });
  await new Promise(r => setTimeout(r, 500));
  await p2.screenshot({ path: `${OUT}/eula_unlocked.png` });
  console.log('Captured: eula_unlocked.png');
  await p2.close();

  // EULA — checkbox checked, ready to accept
  const p3 = await browser.newPage();
  await p3.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await p3.goto(FILE, { waitUntil: 'networkidle0' });
  await p3.evaluate(() => {
    show('login'); showEula();
    const body = document.getElementById('eulaBody');
    body.scrollTop = body.scrollHeight;
    body.dispatchEvent(new Event('scroll'));
    const agree = document.getElementById('eulaAgree');
    agree.checked = true;
    agree.dispatchEvent(new Event('change'));
  });
  await new Promise(r => setTimeout(r, 500));
  await p3.screenshot({ path: `${OUT}/eula_accepted.png` });
  console.log('Captured: eula_accepted.png');
  await p3.close();

  // Decline confirm dialog
  const p4 = await browser.newPage();
  await p4.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await p4.goto(FILE, { waitUntil: 'networkidle0' });
  await p4.evaluate(() => {
    show('login'); showEula();
    showConfirm(
      'Decline agreement?',
      'You cannot access MillworkSuite without accepting the EULA. You will be signed out.',
      'danger',
      eulaDecline
    );
  });
  await new Promise(r => setTimeout(r, 500));
  await p4.screenshot({ path: `${OUT}/eula_decline_confirm.png` });
  console.log('Captured: eula_decline_confirm.png');
  await p4.close();

  await browser.close();
  console.log('Done.');
})();
