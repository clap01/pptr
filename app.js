const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
//    slowMo:100
  });
  const page = await browser.newPage();
  page.setViewport({width: 1200, height: 1200})
  await page.goto('https://kakaku.com/');
  await page.type('input[id=query]', "PS2" );
  await page.click('input[id=main_search_button]');
//  await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
  await page.waitForSelector(".p-item_visual_entity")
  await page.waitFor(1000)  
  await page.click('.p-item_visual_entity');
  console.log('hey1')
  
  await page.waitForSelector(".storeName")
  await page.waitFor(1000)  
  await page.click('.storeName');
  console.log('hey2')


  //await page.screenshot({path: 'screenshot.png'});
  //await browser.close();
})();

//c-positioning_cell