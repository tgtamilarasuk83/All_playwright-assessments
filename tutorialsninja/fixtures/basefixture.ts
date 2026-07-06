import { register } from './../Pages/RegisterPage';
import {Login} from '../Pages/Loginpage'
import {test as base , expect } from '@playwright/test'


interface Fixture {
    register: register
    Login : Login
}

export const test = base.extend<Fixture>({

    register: async({page},use)=>{
        await use(new register(page))
    },

    Login: async({page},use)=>{
       await  use( new Login(page))

    }


     

})

export { expect };