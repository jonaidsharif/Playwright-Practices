const { test, expect } = require('@playwright/test');

test.describe("Smoke Tests", () => {

    test.beforeEach(async ({page}) =>{
    await page.goto("/");
    })

    test.afterEach(async ({page}) => {
        console.log("This is test finished")
    })

    test("Simple click Test", async ({ page, browserName }) => {
        await page.click("text=Add/Remove Elements");
        await page.click("text=Add Element");
    })

    test("Duplicate Test 1", async ({ page }) => {
        await page.click("text=Add/Remove Elements");
        await page.click("text=Add Element");
    })

    test("Duplicate Test 2", async ({ page }) => {
        await page.click("text=Add/Remove Elements");
        await page.click("text=Add Element");
    })
})