import { expect } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';

Given('user is in login page', async () => {
  await page.goto('https://www.saucedemo.com/');
});

When('user enters valid credentials', async () => {
  await page.locator('#user-name').fill(process.env.STANDARD);
  await page.locator('#password').fill(process.env.PASSWORD);
  await page.locator('#login-button').click();
});

Then('user should be able to see homepage', async () => {
  const locator = page.locator('#shopping_cart_container');
  await expect(locator).toBeVisible();
  // await expect(locator).toHaveScreenshot();
});
