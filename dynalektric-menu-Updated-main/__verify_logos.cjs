const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1000 });
  await page.goto('http://localhost:8877/about.html', { waitUntil: 'networkidle0', timeout: 30000 });
  await page.waitForSelector('.about-partners-grid', { timeout: 15000 });
  await page.evaluate(() => {
    document.querySelector('.about-partners-grid').closest('.reveal').classList.add('is-visible', 'in-view');
  });
  await new Promise((r) => setTimeout(r, 500));

  const prideSlot = await page.$('#about-supported-pride-group');
  await prideSlot.screenshot({ path: 'C:/Users/SRIBAL~1/AppData/Local/Temp/claude/c--Users-SriBalaji-Pictures-dynalektric-menu-Updated-main-V2/b60fb0fd-89ce-4f71-987d-eec0c48ffc77/scratchpad/pride-slot-only.png' });

  const royalSlot = await page.$('#about-supported-royal-group');
  await royalSlot.screenshot({ path: 'C:/Users/SRIBAL~1/AppData/Local/Temp/claude/c--Users-SriBalaji-Pictures-dynalektric-menu-Updated-main-V2/b60fb0fd-89ce-4f71-987d-eec0c48ffc77/scratchpad/royal-slot-only.png' });

  await browser.close();
})();
