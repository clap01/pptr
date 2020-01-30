const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
//    slowMo:100
  });
  const page = await browser.newPage();
  await page.goto('https://kakaku.com/');
  await page.type('input[id=query]', "ニコン");
  await page.click('input[id=main_search_button]');

  //await page.screenshot({path: 'screenshot.png'});
  //await browser.close();
})();