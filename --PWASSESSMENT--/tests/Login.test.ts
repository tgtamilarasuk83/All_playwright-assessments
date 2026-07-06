
import { test ,expect} from "../fixtures/basefixture"
import { csvfilereader } from "../utils/csvreader";



const Logindatas = csvfilereader();
const valid = Logindatas.find(user => user.type ==="valid")
const invalid = Logindatas.find(user =>user.type ==="invalid")


test.describe("Login ninja  @smoke ", async()=>{


     test.beforeEach(async({register})=>{
           await register.loadpage();
        })

    test("valid login", async({register,Login})=>{
            await Login.gotologin();
            
            if (!valid) {
                     throw new Error("Valid user not found in CSV");
                         }
            
            await Login.Loging(valid);
            await expect(await Login.Myaccountassert).toBeVisible()
             

    })

      test("invalid login", async({register,Login})=>{
            await Login.gotologin();
            
            if (!invalid) {
                     throw new Error("Valid user not found in CSV data ");
                         }
            
            await Login.Loging(invalid);
            await expect(await Login.loginunsucess).toBeVisible()

    })


})