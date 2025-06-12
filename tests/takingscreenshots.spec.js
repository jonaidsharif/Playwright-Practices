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
//         await page.screenshot({path: "screenshot.png", fullPage: true});
//         await page.click("text=Add Element");
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
//     test.only("simple click test", async ({ page, browserName }) => {
//         await page.goto("https://the-internet.herokuapp.com");
//         const locator1 = page.locator("text=Add/Remove Elements");
//         await locator1.click();
//         await page.click("text=Add Element");
//         await page.screenshot({ path: "screenshot2.png" });
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
//     test.only("simple click test", async ({ page, browserName }) => {
//         await page.goto("https://the-internet.herokuapp.com");
//         await page.click("text=Add/Remove Elements");
//         await page.click("text=Add Element");
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



// const { test, expect } = require('@playwright/test');

// test.describe("Smoke Tests", () => {
//     test("First Test", async ({ page }) => {
//         // Write testing code here
//         await page.goto("https://playwright.dev");
//         const title = page.locator('.navbar__inner .navbar__title');
//         await expect(title).toHaveText('Playwright');
//     });

//     test.only("Simple click test", async ({ page, browserName }) => {
//         await page.goto("https://the-internet.herokuapp.com");
//         await page.click("text=Add/Remove Elements");
//         await page.click("text=Add Element");
//     });

//     test("Duplicate Test 1", async ({ page }) => {
//         await page.goto("https://the-internet.herokuapp.com");
//         await page.click("text=Add/Remove Elements");
//         await page.click("text=Add Element");
//     });

//     test("Duplicate Test 2", async ({ page }) => {
//         await page.goto("https://the-internet.herokuapp.com");
//         await page.click("text=Add/Remove Elements");
//         await page.click("text=Add Element");
//     });
// });