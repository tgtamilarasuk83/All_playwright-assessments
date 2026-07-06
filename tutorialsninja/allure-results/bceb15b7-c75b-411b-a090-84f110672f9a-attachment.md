# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\register.spec.ts >> Register user >> valid register 
- Location: tests\register.spec.ts:10:9

# Error details

```
Error: locator.fill: value: expected string, got undefined
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
  32 |             await this.page.goto(process.env.dBASE_URL!);
  33 |         }
  34 | 
  35 |         async registerUser(user:any){
> 36 |             await this.Firstname.fill(user.firstname)
     |                                  ^ Error: locator.fill: value: expected string, got undefined
  37 |             await this.lastname.fill(user.lastname)
  38 |             await this.email.fill(user.email)
  39 |             await this.password.fill(user.password)
  40 |             await this.confrimpass.fill(user.confrimpass)
  41 |             await this.telephone.fill(user.telephone)
  42 |         }
  43 | 
  44 |         async acceptandsubmit(){
  45 |             await  this.PVpolicy.check()
  46 |             await this.Continue.click()
  47 | 
  48 |         }
  49 | 
  50 | 
  51 | }
```