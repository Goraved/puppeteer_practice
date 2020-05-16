const assert = require('assert')
const puppeteer = require('puppeteer')
let browser
let page

before(async () => {
  browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox']  })
  page = await browser.newPage()
})

describe('Shop', () => {
  it('Order T-Shirt', async () => {
    await page.goto('http://automationpractice.com/index.php', { waitUntil: 'networkidle0' })
    await page.click('li:nth-child(3) > a[title="T-shirts"]');
    // Another page
    await page.waitForSelector('[itemprop="name"]', {visible: true});
    await page.hover('[itemprop="name"]');
    await page.click('[itemprop="name"]');
    await page.click('[title="Add to cart"]');
    await page.waitForSelector('[title="Proceed to checkout"]', {visible: true});
    await page.click('[title="Proceed to checkout"]');
    // Another page
    await page.waitForSelector('.cart_avail', {visible: true});
    await page.click('p > a.button.btn.btn-default.standard-checkout.button-medium');
    // Another page
    await page.waitForSelector("#email_create", {visible: true});
    await page.click("#email_create");
    await page.waitForSelector("#email_create", {visible: true});
    var rand = Math.random().toString(36).substring(7);
    await page.waitForSelector("#email_create", {visible: true});
    await page.type("#email_create", `goraved@${rand}.com`);
    await page.click("#SubmitCreate");
    // Another page
    await page.waitForSelector('[name="id_gender"]', {visible: true});
    await page.click('[name="id_gender"]');
    await page.click('[name="customer_firstname"]');
    await page.type('[name="customer_firstname"]', "Test");
    await page.type('[name="customer_lastname"]', "Goraved");
    await page.click('[name="passwd"]');
    await page.type('[name="passwd"]', "123asd");
    await page.select("#days", "1");
    await page.select("#months", "1");
    await page.select("#years", "2020");
    await page.click('[name="optin"]');
    await page.click("#newsletter");
    await page.click('[name="firstname"]');
    await page.click('[name="address1"]');
    await page.type('[name="address1"]', "street");
    await page.click("#city");
    await page.type("#city", "test");
    await page.select("#id_state", "1");
    await page.click("#postcode");
    await page.type("#postcode", "11111");
    await page.click("#other");
    await page.type("#other", "123");
    await page.click("#phone_mobile");
    await page.type("#phone_mobile", "123");
    await page.click("#alias");
    await page.click("#alias");
    await page.click("#alias");
    await page.click("#submitAccount");
    // Another page
    await page.waitForSelector('#center_column > form > p > button');
    await page.click('#center_column > form > p > button');
    // Another page
    await page.waitForSelector('[name="cgv"]');
    await page.click('[name="cgv"]');
    await page.click("#form > p > button");
    // Another page
    await page.waitForSelector('[title="Pay by bank wire"]');
    await page.click('[title="Pay by bank wire"]');
    // Another page
    await page.waitForSelector("#cart_navigation > button");
    await page.click("#cart_navigation > button");
    // Another page
    await page.waitForSelector('[title="View my customer account"]', {visible: true});
    await page.click('[title="View my customer account"]');
    // Another page
    await page.waitForSelector('[title="Orders"]');
    await page.click('[title="Orders"]');
    // Another page
    await page.waitForSelector('#order-list > tbody > tr', {visible: true});
    }).timeout(200000)

})

after(async () => {
  await browser.close()
})