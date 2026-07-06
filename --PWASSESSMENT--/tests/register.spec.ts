
import Registerdata from '../resources/Registerdata.json'
import { test ,expect} from "../fixtures/basefixture"

const Valid = Registerdata.valid[0];
test.describe("Register user @smoke", ()=>{

    test("valid register " , async({register})=>{
       await register.loadpage();
       await register.registerUser(Valid)
       await register.acceptandsubmit();
       await expect(register.Sucess).toHaveText("Your Account Has Been Created!");

    })

})
