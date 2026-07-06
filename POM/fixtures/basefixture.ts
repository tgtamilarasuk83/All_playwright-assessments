import { test as base, expect } from '@playwright/test';
import { Login } from '../pages/loginpage';
import { DashboardPage } from '../pages/dashboard';

type Fixtures = {
    login: Login;
    DashboardPage: DashboardPage
};

export const test = base.extend<Fixtures>({


    login: async ({ page }, use) => {
        await use(new Login(page));
    },

    DashboardPage: async ({page}, use) => {
        await use(new DashboardPage(page));
    }


});

export { expect };