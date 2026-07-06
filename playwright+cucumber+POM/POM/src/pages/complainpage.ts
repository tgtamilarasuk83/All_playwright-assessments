import { Locator, Page } from "@playwright/test";


export class Complaint  {
    readonly complaintLink: Locator;
       readonly name: Locator;
           readonly email: Locator;
              readonly description: Locator;

    constructor(page: Page) {
        
        this.complaintLink = page.locator("//a[normalize-space()='Complain']");
        this.name = page.locator("#name");
        this.email = page.locator("#email");
        this.description = page.locator("#description");
    }
}