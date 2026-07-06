import {Page} from "playwright"
import { Logger } from "winston";

export class BasePage{
    constructor(protected page:Page){}

    async Click(locator:any){
        // logger.info(`Clicking: ${locator}`);
        await this.page.locator(locator).click();
    }
   
     async getText(locator:string){
        // logger.info(`Clicking: ${locator}`);
        return await this.page.locator(locator).textContent();
    }


     async type(locator:string,text:string){
        // logger.info(`Clicking: ${locator}`);
        await this.page.locator(locator).fill(text);
    }


     async open(url:string){
        // logger.info(`Clicking: ${locator}`);
        await this.page.goto(url);
    }
}