import { Locator, Page } from "@playwright/test"

export class Login{

    readonly page : Page
     readonly myaccouny : Locator
     readonly login  : Locator
      readonly Email : Locator
       readonly  password : Locator
        readonly loginbtn : Locator
        readonly Myaccountassert : Locator

        constructor(page : Page){
            this.page =page;       
            this.myaccouny = page.locator("//span[normalize-space()='My Account']")
            this.login  = page.locator("//ul[@class='dropdown-menu dropdown-menu-right']//a[normalize-space()='Login']");
            this.Email  = page.locator("//input[@id='input-email']")
            this.password  = page.locator("//input[@id='input-password']")
            this,this.loginbtn = page.locator("//input[@value='Login']")
            this.Myaccountassert = page.locator("//h2[normalize-space()='My Account']")
        }

        async gotologin(){
           await  this.myaccouny.click()
           await  this.login.click()
        }

        async  Loging( user:any){
            await this.Email.fill(user.email)
            await this.password.fill(user.password)
            await this.loginbtn.click()
        }
}