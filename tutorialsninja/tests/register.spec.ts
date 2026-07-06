import { register } from './../Pages/RegisterPage';
import Registerdata from '../resources/Registerdata.json'
import { test ,expect} from "../fixtures/basefixture"

 const Valid = Registerdata.valid[0];
 const InValid = Registerdata.invalid[0];

test.describe("Register user", ()=>{

    test("valid register " , async({register})=>{
       await register.loadpage();
       await register.registerUser(Valid)
       await register.acceptandsubmit();

    })

     test("invalid register " , async({register})=>{
        await register.loadpage();
        await register.registerUser(InValid)
        await register.acceptandsubmit();

    })


})
