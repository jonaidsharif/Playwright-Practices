// const { test, expect } = require('@playwright/test');

// test.describe("Smoke Tests", () => {
//     // First Test
//     test('First Test', async ({ page }) => {
//         await page.goto('https://playwright.dev');
//         await page.waitForLoadState('networkidle');
//         const title = page.locator('h1');
//         await expect(title).toContainText('Playwright');
//     });

//     // Simple Click Test (Skipped)
//     test.only('Simple Click Test', async ({ page, browserName }) => {
//         test.skip(browserName === 'firefox', 'working on the firefox fix');
//         await page.goto("https://the-internet.herokuapp.com/");
//         await page.click("text=Add/Remove Elements");
//         await page.click("text=Add Elements");
//     });

//     // Remove the Duplicate Test
//     test('Duplicate Test 1', async ({ page }) => {
//         await page.goto("https://the-internet.herokuapp.com/");
//         await page.click("text=Add/Remove Elements");
//         await page.click("text=Add Element");
//     });

//     // Remove the Duplicate Test
//     test('Duplicate Test 2', async ({ page }) => {
//         await page.goto("https://the-internet.herokuapp.com/");
//         await page.click("text=Add/Remove Elements");
//         await page.click("text=Add Element");
//     });
// })