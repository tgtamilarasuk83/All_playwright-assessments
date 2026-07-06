import { Login } from './../pages/loginpage';
import { readLoginData } from "../utils/csvreader"
import { LoginUser } from  "../utils/csvreader"
import { test, expect } from '../fixtures/basefixture';
    
// const users: LoginUser[] = readLoginData();
const users = readLoginData();

const validUser = users.find(user => user.type == "valid");
const invaliduser = users.find(user => user.type == "invalid");

test.describe("CSV LOGIN", () => {

    test.beforeEach(async ({ login }) => {
        await login.navigate();
    });

    test("valid user", async ({ login }) => {

        if (!validUser) {
            throw new Error("Valid user is undefined");
        }
        await login.loginuser( validUser.username,validUser.password);
        expect(await login.getlogintitle()).toBe("Dashboard");
    });
    test("invalid login", async ({ login }) => {

        if (!invaliduser) {
            throw new Error("Invalid user is undefined ");
        }
        await login.loginuser( invaliduser.username,invaliduser.password);
        expect(await login.getErrorMessage()).toBe("Invalid credentials");
    });

});