const {test, expect} = require('@playwright/test')

test("Browser Context test", async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://kayak.com");
    console.log(await page.title())
    await expect(page).toHaveTitle("Search Flights, Hotels & Rental Cars | KAYAK");
    // const frame = page.frame("[title='Sign in with Google Dialogue']");
    // await frame.click("#close");
    await page.locator(".sign-in-nav-link").click();
    await page.locator(".continueWithEmail").click();
    // await page.locator(".email-input").click();
    await page.locator(".email-input").type("automationtester2.1.2@gmail.com");
    await page.locator("//div[contains(text(), 'Continue')]").click();
    await expect(page.locator(".passwordInput")).toBeVisible();
    await page.locator(".passwordInput").type("Testautomation123");
    await page.locator("//button[@type='submit']//div[@class='Iqt3-button-content'][normalize-space()='Sign in']").click();

});

test("Page playwright test", async ({page})=>{
    await page.goto("http://google.com");
    // get title
    console.log(await page.title())
    await expect(page).toHaveTitle("Google");

});

test("verify login failure promt text", async({page})=>{

    const userName = page.locator("#username");
    const password = page.locator("#password");
    const signInButton = page.locator("#signInBtn");
    const errorMessage = page.locator("[style*='block']")
    const cardTitles = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // await userName.type("abcd");
    // await password.type("abdadd");
    // await signInButton.click();
    // console.log(await errorMessage.textContent());
    // await expect(errorMessage).toHaveText("Incorrect username/password.");
    // await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await password.fill("learning");
    await signInButton.click();
    // await page.waitForTimeout(3000);
    console.log(await cardTitles.first().textContent());

});

test.only("login and get product titles", async({page})=>{
    const userEmail = page.locator("#userEmail");
    const password = page.locator("#userPassword");
    const loginInButton = page.locator("#login");
    const cardTitles = page.locator(".card-body b")

    await page.goto("https://rahulshettyacademy.com/client");
    await userEmail.type("ahmad.sulehari@gmail.com");
    await password.type("Af#k4x!!myzGka&K");
    await loginInButton.click();
    // might be a little flaky
    // await page.waitForLoadState("networkidle"); 
    await cardTitles.last().waitFor();
    console.log(await cardTitles.allTextContents());

});