import { Locator, Page } from "@playwright/test"

export class Searchpage{

     readonly page : Page;
      readonly Searchbox : Locator;
       readonly searchicon : Locator;
        


          constructor(page: Page){
            this.page = page;
            this.Searchbox = page.locator("//input[@placeholder='Search']");
            this.searchicon =page.locator("//button[@class='btn btn-default btn-lg']")
           
          }

          async searching(value:any){
            await this.Searchbox.fill(value.value)
            await this.searchicon.click()    
                
          }







}