const puppeteer = require('puppeteer');
const keyword = "macbookair";
const url = "https://kakaku.com/";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  page.setViewport({width: 1200, height: 1200})
  await page.goto(url);
  await page.type('input[id=query]', keyword);
  await page.click('input[id=main_search_button]');
  await page.waitForSelector(".p-item_visual_entity")
  await page.click('.p-item_visual_entity');
  console.log('first click!')
  await page.waitForSelector(".storeName")
  await page.click('.storeName');
  console.log('second click!')
})();

//c-positioning_cell
  //メモ
  //await page.waitFor(1000);  
  //await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
  //await page.screenshot({path: 'screenshot.png'});
  //await browser.close();
  //slowMo:100