import { expect ,test} from "@playwright/test";

test("playwright Firefox tests", async({page})=>{

    await page.goto("https://www.bing.com/")

    console.log(await page.title())
    console.log(await page.url())
    await expect( await page.title()).toBe("Search - Microsoft Bing")

    console.log(await page.locator("//span[@id='languageSwitcherTitle']").textContent())
    console.log(await page.locator("//h1[@title='Trending Now on Bing']//*[name()='svg']").getAttribute('id'))
    await page.locator("//textarea[@id='sb_form_q']").fill("Helloworld")
    // await page.locator("//textarea[@id='sb_form_q']").press('Enter')
    await page.keyboard.press('Enter');
    const title = await page.locator('//*[@id="wpt_title_label"]/h2').textContent()
    console.log(title)
    expect(title).toBe("Hello, world")

   


})