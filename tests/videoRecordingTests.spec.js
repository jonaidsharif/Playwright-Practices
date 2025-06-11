const { test, expect } = require('@playwright/test');

// First Test
test('First Test', async ({ page }) => {
    await page.goto('https://playwright.dev');

    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');

    // Locate the element using a more robust selector
    const title = page.locator('h1'); // Updated selector based on inspection

    // Assert that the text of the element contains 'Playwright'
    await expect(title).toContainText('Playwright');
});

// Simple Click Test (Skipped)
test('Simple Click Test', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'working on the firefox fix');
    await page.goto("https://the-internet.herokuapp.com/");
    await page.click("text=Add/Remove Elements");
    await page.click("text=Add Element");
});

// Remove the Duplicate Test
test('Duplicate Test 1', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.click("text=Add/Remove Elements");
    await page.click("text=Add Element");
});

// Remove the Duplicate Test
test('Duplicate Test 1', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.click("text=Add/Remove Elements");
    await page.click("text=Add Element");
});