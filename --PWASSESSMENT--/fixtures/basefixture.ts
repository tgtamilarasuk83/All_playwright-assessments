import { productpage } from './../Pages/productpage';

import { register } from './../Pages/RegisterPage';
import {Login} from '../Pages/Loginpage'
import { Searchpage } from '../Pages/Searchpage';
import {test as base , expect } from '@playwright/test'



interface Fixture {
    register: register
    Login : Login
    Searchpagefix:Searchpage
    productpagefix:productpage
}

export const test = base.extend<Fixture>({

    register: async({page},use)=>{
        await use(new register(page))
    },

    Login: async({page},use)=>{
       await  use( new Login(page))

    },
    Searchpagefix: async({page},use)=>{
        await use (new Searchpage(page))
    },

    productpagefix:async({page},use)=>{
        await use (new productpage(page))
    }
    

})

export { expect };