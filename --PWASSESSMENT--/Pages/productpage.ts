import { Locator, Page ,expect} from "@playwright/test"

export class productpage{
    readonly page :Page
     readonly productList: Locator;
          readonly productassert: Locator;

          constructor(page:Page){
            this.page = page;
            this.productList=page.locator('//*[@id="content"]/div[3]//h4/a')
            this.productassert= page.locator('//*[@id="content"]/div/div[2]/h1')
          }

          async productvalidate(){
             const Noofproduct =  await this.productList.count()
             const listproduct = await  this.productList.allTextContents();
             console.log(listproduct)
             console.log(Noofproduct) 
              expect(listproduct).toContain("MacBook");
  
          }

}