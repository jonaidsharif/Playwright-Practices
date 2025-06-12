// const { test, expect } = require('@playwright/test');

// test.describe("Smoke Tests", () => {
//     test("First Test", async ({ page }) => {
//         // Write testing code here
//         await page.goto("https://playwright.dev");
//         const title = page.locator('.navbar__inner .navbar__title');
//         await expect(title).toHaveText('Playwright');
//     });

//     test.only("Simple click test", async ({ page, browserName }) => {
//         await page.goto("/");
//         await page.click("text=Add/Remove Elements");
//         await page.click("text=Add Element");
//     });

//     test("Duplicate Test 1", async ({ page }) => {
//         await page.goto("/");
//         await page.click("text=Add/Remove Elements");
//         await page.click("text=Add Element");
//     });

//     test("Duplicate Test 2", async ({ page }) => {
//         await page.goto("/");
//         await page.click("text=Add/Remove Elements");
//         await page.click("text=Add Element");
//     });
// });




// const { test, expect } = require('@playwright/test');

// test.describe("Smoke Tests", () => {
//     test.only("Simple click Test", async ({ page, browserName }) => {
//         await page.goto("/checkboxes");
//         await page.pause();
//         // await page.click("text=Add/Remove Elements");
//         // await page.click("text=Add Element");
//     });

//     test("Duplicate Test 1", async ({ page }) => {
//         await page.goto("/");
//         await page.click("text=Add/Remove Elements");
//         await page.click("text=Add Element");
//     });

//     test("Duplicate Test 2", async ({ page }) => {
//         await page.goto("/");
//         await page.click("text=Add/Remove Elements");
//         await page.click("text=Add Element");
//     });
// });