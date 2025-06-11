// Remember in his structure your saw that "only"


// const {test, expect} = require('@playwright/test');

// test('First Test', async ({ page }) => {
//     // Write testing code here
//     await page.goto('https://playwright.dev');

//     const title = page.locator('.navbar_inner.navbar_title');
//     await expect(title).toHaveText('Playwright');
// });


// test('Simple Click Test', async ({ page }) => {
//     await page.goto("https://the-internet.herokuapp.com/");
//     await page.click("text = Add/Remove Elements");
//     await page.click("text = Add Element");
// });

// test.only('Duplicate Test', async ({ page }) => {
//     await page.goto("https://the-internet.herokuapp.com/");
//     await page.click("text = Add/Remove Elements");
//     await page.click("text = Add Element");
// });



// Remember in his structure your saw that "skip"


// const {test, expect} = require('@playwright/test');

// // First Test
// test('First Test', async ({ page }) => {
//     await page.goto('https://playwright.dev');

//     // Wait for the page to load completely
//     await page.waitForLoadState('networkidle');

//     // Locate the element using a more robust selector
//     const title = page.locator('h1'); // Updated selector based on inspection

//     // Assert that the text of the element contains 'Playwright'
//     await expect(title).toContainText('Playwright');
//     // const title = page.locator('.navbar_inner.navbar_title');
//     // await expect(title).toHaveText('Playwright');
// });


// test.skip('Simple Click Test', async ({ page }) => {
//     await page.goto("https://the-internet.herokuapp.com/");
//     await page.click("text = Add/Remove Elements");
//     await page.click("text = Add Element");
// });

// test('Duplicate Test', async ({ page }) => {
//     await page.goto("https://the-internet.herokuapp.com/");
//     await page.click("text = Add/Remove Elements");
//     await page.click("text = Add Element");
// });
