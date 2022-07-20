import * as dotenv from 'dotenv';
import { Before, BeforeAll, AfterAll, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, firefox, webkit } from 'playwright';

dotenv.config();

setDefaultTimeout(60000);

BeforeAll(async function () {
  switch (process.env.BROWSER) {
    case 'chrome':
      global.browser = await chromium.launch();
      break;
    case 'firefox':
      global.browser = await firefox.launch();
      break;
    case 'webkit':
      global.browser = await webkit.launch();
      break;
    default:
      global.browser = await chromium.launch();
      break;
  }
});

// close the browser
AfterAll(async function () {
  await global.browser.close();
});

// Create a new browser context and page per scenario
Before(async function () {
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

// Cleanup after each scenario
After(async function () {
  await global.page.close();
  await global.context.close();
});
