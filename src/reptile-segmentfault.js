const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://segmentfault.com/channel/frontend')

    var SfFeArticleList = await page.evaluate(() => {
        var list = [...document.querySelectorAll('.news__list .news__item-title a')]
        return list.map(el => {
            return { href: el.href.trim(), title: el.innerText }
        })
    })

    await page.screenshot({ path: './sf.png', type: 'png' });
    await browser.close();
})();


