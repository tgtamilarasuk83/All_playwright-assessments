
import{Page,Locator} from '@playwright/test';

export class register{
 readonly page: Page;
    readonly Myaccount : Locator;
      readonly  Register : Locator;
        readonly Firstname : Locator;
          readonly lastname  : Locator;
            readonly email  : Locator;
              readonly  telephone  : Locator;
                readonly password : Locator;
                   readonly  confrimpass: Locator;
                     readonly  PVpolicy: Locator;
                       readonly Continue : Locator;

        constructor(page:Page){
            this.page =page;
            this.Myaccount = page.locator("//span[normalize-space()='My Account']");
            this.Register = page.locator("//a[normalize-space()='Register']");
            this.Firstname = page.locator("//input[@id='input-firstname']");
            this.lastname = page.locator("//input[@id='input-lastname']");
            this.email = page.locator("//input[@id='input-email']");
            this.telephone = page.locator("#input-telephone");
            this.password = page.locator("//input[@id='input-password']");
            this.confrimpass = page.locator("//input[@id='input-confirm']");
            this.PVpolicy = page.locator("//input[@name='agree']");
            this.Continue = page.locator("//input[@value='Continue']");
        }

        async loadpage(){
            console.log("dBASE_URL =", process.env.dBASE_URL);
            await this.page.goto(process.env.dBASE_URL!);
        }


        async registerUser(user:any){
            await this.Myaccount.click()
            await this.Register.click()
            await this.Firstname.fill(user.firstname)
            await this.lastname.fill(user.lastname)
            await this.email.fill(user.email)
            await this.password.fill(user.password)
            await this.confrimpass.fill(user.confirmPassword)
            await this.telephone.fill(user.telephone)
        }

        async acceptandsubmit(){
            await  this.PVpolicy.check()
            await this.Continue.click()

        }


}