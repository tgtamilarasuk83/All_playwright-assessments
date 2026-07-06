
import { test ,expect} from "../fixtures/basefixture"
import { csvfilereader } from "../utils/csvreader";

interface LoginData {
    type: string;
    email: string;
    password: string;
}

const Logindatas = csvfilereader();
const valid = Logindatas.find(user => user.type ==="valid")
const invalid = Logindatas.find(user =>user.type ==="invalid")


test.describe("Login ninja ", async()=>{


     test.beforeEach(async({register})=>{
           await register.loadpage();
        })

    test("valid login", async({register,Login})=>{
            await Login.gotologin();
            
            if (!valid) {
                     throw new Error("Valid user not found in CSV");
                         }
            
            await Login.Loging(valid);
             

    })


})