import * as dotenv from 'dotenv';
import { Before, BeforeAll, AfterAll, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';

dotenv.config();

setDefaultTimeout(60000);

BeforeAll(async function () {
  global.browser = await chromium.launch({
    headless: true,
  });
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
