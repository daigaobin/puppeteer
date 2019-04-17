

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('http://xxx.com')
    await page.setViewport({width: 1920, height: 1080 })
    var loginButton = await page.$$('.nav > li')
    await loginButton[1].click()
    
    // var loginPhoneOrEmail = await page.$('[placeholder=请输入账号]')
    // await loginPhoneOrEmail.click()
    await page.type('[placeholder=请输入账号]', 'xxx', { delay: 20 })

    // var password = await page.$('[placeholder=请输入密码]')
    // await password.click()
    await page.type('[placeholder=请输入密码]', 'xxx', { delay: 20 })

    var authLogin = await page.$('.ivu-modal-footer .ivu-btn')
    await authLogin.click()
    await page.waitFor(1000)
    await page.screenshot({
      path: 'jianshu.png',
      type: 'png',
      fullPage: true,
    });
    await browser.close();
})();

