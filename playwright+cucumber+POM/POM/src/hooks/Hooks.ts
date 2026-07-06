import { Before,After,BeforeAll,AfterAll } from "@cucumber/cucumber";
import {chromium} from "playwright"
import { CustomWorld } from "../World/CustomWorld";

import { Logger } from "playwright";




let browser:any;

BeforeAll(async()=>{
    //logger.info("Launching browser");
    browser=await chromium.launch({headless:false});
});

Before(async function (this:CustomWorld,scenario){
    // logger.info('Starting scenario: ${scenario.pickle.name}');

    this.browser = browser;
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    // this.loginPage = new LoginPage(this.page);

})

After(async function(this:CustomWorld,scenario) {

    if(scenario.result?.status == "FAILED"){
        const path = `reports/screenshots/${Date.now()}.png`;
        await this.page.screenshot({path});
        // logger.error(`Scenario FAILED:${scenario.pickle.name}`);
        // logger.error(`Screenshot saved:${path}`);
    }
    else{
        // logger.info(`Scenario PASSED:${scenario.pickle.name}`);
    }

    await this.page.close();
    await this.context.close();

})

AfterAll(async()=>{

    // logger.info("Closing browser")
    await browser.close();

})