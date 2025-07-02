// const { test, expect } = require('@playwright/test');

// test.describe("Examples", () => {
//     test("Testing Assertions", async ({ page }) => {

//         await page.goto('https://demoqa.com/text-box');
//         await page.locator('#userName').type("Test Username");
//         await page.locator('#userEmail').type("test@email.com");
//         await page.locator('[placeholder="Current Address"]').type("Current Address Test");
//         await page.locator('#permanentAddress').type('test');
//         await page.locator('button:has-text("Submit")').click();

//         await page.pause();
//         const name = page.locator('#name');
//         const email = page.locator('#email');
//         const currentAddress = page.locator('#currentAddress');
//         const permanentAddress = page.locator('#permanentAddress');

//         await expect(name).toBeVisible();
//         await expect(name).toHaveText('Name:Test Username') 
//         await expect(email).toBeVisible();
//         await expect(email).toHaveText('Email:test@email.com')
//         await expect(currentAddress).toBeVisible();
//         await expect(currentAddress).toHaveText('Current Address :Current Address Test')
//         await expect(permanentAddress).toBeVisible();
//         await expect(permanentAddress).toHaveText('Permanent Address :test')
//     });
// });


test.describe("Examples", () => {
    test("Testing Assertions", async ({ page }) => {
        await page.goto('https://demoqa.com/text-box');
        await expect(page).toHaveTitle("ToolsQA");
        await expect(page).toHaveURL("https://demoqa.com/text-box");
    });
});