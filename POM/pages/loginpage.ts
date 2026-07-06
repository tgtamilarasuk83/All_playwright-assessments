import { Page , Locator } from "@playwright/test";

export class Login{
    readonly page : Page;
    readonly username : Locator;
    readonly password : Locator;
    readonly loginbutton : Locator;
    readonly logintitle : Locator;
    readonly errormessage : Locator;



    constructor(page :Page){
       this.page = page;
        this.username = page.locator("//input[@placeholder='Username']");
         this.password = page.locator("//input[@placeholder='Password']");
          this.loginbutton = page.locator("//button[@type='submit']");
           this.logintitle = page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']");
            this.errormessage = page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']");
}

    async navigate(){
        await this.page.goto("process.env.dBASE_URL!"), { waitUntil: 'domcontentloaded' });
    }

    async getlogintitle(){
        return await this.logintitle.textContent();
     
    }

    async loginuser(username: string , password:string){
        await  this.username.fill(username)
        await  this.password.fill(password)
        await  this.loginbutton.click()
    }

    async getErrorMessage(){
        return await this.errormessage.textContent()
    }
}