# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\register.spec.ts >> Register user >> valid register 
- Location: tests\register.spec.ts:10:9

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://tutorialsninja.com/demo/", waiting until "load"

```

# Test source

```ts
  1  | 
  2  | import{Page,Locator} from '@playwright/test';
  3  | 
  4  | export class register{
  5  |  readonly page: Page;
  6  |     readonly Myaccount : Locator;
  7  |       readonly  Register : Locator;
  8  |         readonly Firstname : Locator;
  9  |           readonly lastname  : Locator;
  10 |             readonly email  : Locator;
  11 |               readonly  telephone  : Locator;
  12 |                 readonly password : Locator;
  13 |                    readonly  confrimpass: Locator;
  14 |                      readonly  PVpolicy: Locator;
  15 |                        readonly Continue : Locator;
  16 | 
  17 |         constructor(page:Page){
  18 |             this.page =page;
  19 |             this.Myaccount = page.locator("//span[normalize-space()='My Account']");
  20 |             this.Register = page.locator("//a[normalize-space()='Register']");
  21 |             this.Firstname = page.locator("//input[@id='input-firstname']");
  22 |             this.lastname = page.locator("//input[@id='input-lastname']");
  23 |             this.email = page.locator("//input[@id='input-email']");
  24 |             this.telephone = page.locator("#input-telephone");
  25 |             this.password = page.locator("//input[@id='input-password']");
  26 |             this.confrimpass = page.locator("//input[@id='input-confirm']");
  27 |             this.PVpolicy = page.locator("//input[@name='agree']");
  28 |             this.Continue = page.locator("//input[@value='Continue']");
  29 |         }
  30 | 
  31 |         async loadpage(){
> 32 |             await this.page.goto(process.env.dBASE_URL!);
     |                             ^ Error: page.goto: Test ended.
  33 |         }
  34 | 
  35 | 
  36 |         async registerUser(user:any){
  37 |             await this.Myaccount.click()
  38 |             await this.Register.click()
  39 |             await this.Firstname.fill(user.firstname)
  40 |             await this.lastname.fill(user.lastname)
  41 |             await this.email.fill(user.email)
  42 |             await this.password.fill(user.password)
  43 |             await this.confrimpass.fill(user.confirmPassword)
  44 |             await this.telephone.fill(user.telephone)
  45 |         }
  46 | 
  47 |         async acceptandsubmit(){
  48 |             await  this.PVpolicy.check()
  49 |             await this.Continue.click()
  50 | 
  51 |         }
  52 | 
  53 | 
  54 | }
```