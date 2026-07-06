import { test, expect } from '../fixtures/basefixture';
import logindata from '../resources/logindata.json';

// type LoginData = {
//     validuser: { username: string; password: string };
//     invaliduser: { username: string; password: string };
// };

interface  logindata{

    
    validuser: {  
                 username: string;
                 password:string;
                }
       invaliduser: {  
                 username: string;
                 password:string;
                }
}


test.describe("Login_test", () => {



    const details = logindata as logindata


    test.beforeEach(async ({ login }) => {
        await login.navigate();
    });




    test("Valid Login", async ({ login }) => {
        await login.loginuser(details.validuser.username,details.validuser.password);
       
        await expect(await login.getlogintitle()).toBe("Dashboard");
        await expect(await login.logintitle).toBeVisible();
        
        
    });


    test("invalidLogin",async({login})=>{
         await login.loginuser(details.invaliduser.username,details.validuser.password);
         await expect(await login.getErrorMessage()).toBe("Invalid credentials");

    })

});