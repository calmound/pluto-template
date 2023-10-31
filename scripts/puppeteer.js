const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

(async () => {
  // 启动浏览器
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://rancher.inspir.work/login', { waitUntil: 'load' });
  await page.waitForTimeout(1000);
  // 登录操作
  const userInputElement = await page.waitForSelector('input[name=username]');

  const passwordInputElement = await page.waitForSelector(
    'input[name=password]',
  );
  await userInputElement.type(process.env.RANCHER_NAME);
  await passwordInputElement.type(process.env.RANCHER_PASSWORD);

  const logBtn = await page.$('.btn.bg-primary');
  await logBtn.click();

  //   // 等待登录完成并跳转到目标页面
  await page.waitForNavigation();

  await page.goto(process.env.TARGET_URL, { waitUntil: 'load' });
  await page.waitForTimeout(3000);

  //   // 从.env文件中读取项目文案
  const projectText = process.env.PROJECT;
  if (!projectText) {
    console.error('项目文案未在.env文件中定义');
    await browser.close();
    return;
  }

  // 在输入框中输入项目文案
  const searchInput = await page.$('.search-box');

  await searchInput.type(projectText);

  //   // 等待10秒
  await page.waitForTimeout(1000);

  //   // 点击按钮
  await page.click('.main-row > td > .btn.btn-sm.role-multi-action.actions');

  //   // 等待1秒
  await page.waitForTimeout(1000);

  //   // 点击文本为"Execute Shell"的按钮或链接
  const [button] = await page.$x("//span[contains(text(), 'Execute Shell')]");
  if (button) {
    await button.click();
  } else {
    console.error("未找到文本为'Execute Shell'的按钮");
  }
  await page.waitForTimeout(1000);

  await page.click('.xterm-cursor-layer');
  await page.waitForTimeout(1000);

  await page.keyboard.type('cd zfwj_fe_1_1/zfwj_fe');
  await page.keyboard.press('Enter');

  await page.keyboard.type('git pull origin master');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);

  await page.keyboard.type(process.env.GIT_NAME);
  await page.keyboard.press('Enter');

  await page.waitForTimeout(500);

  await page.keyboard.type(process.env.PASSWORD);
  await page.keyboard.press('Enter');

  // await page.keyboard.press("cd /zfwj_fe");
  // await page.waitForTimeout(1000);

  //   await page.keyboard.type("cd dist");
  //   keyword.type("git pull origin master");
  //   await page.keyboard.press("Enter");

  //   text.type = text.type("cd dist");
  //   await page.keyboard.press("Enter");

  //   // 可以在这里继续添加其他操作，或者关闭浏览器
  //   // await browser.close();
})();
