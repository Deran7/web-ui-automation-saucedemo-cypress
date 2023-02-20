import * as route from '@helpers/route.js';
import * as elements from '@helpers/elements.js';
import * as asserts from '@helpers/asserts.js';
import {ROUTES} from '@tests/consts/routes.js';
import * as logindata from '@tests/data/login.data.js';
import * as login from '@pages/login.page.js';


describe('Login Positive Case', () => {
    
    beforeEach(() => {
        route.visit(ROUTES.login);
    });
    
    it('Should succes login with username data valid "standard_user"', () => {
        elements.fillField(login.usernameField, logindata.VALID_LOGIN.username);
        elements.fillField(login.passwordField, logindata.VALID_LOGIN.password);
        elements.click(login.loginButton);
        asserts.shouldContainText(login.title, "Products");
    });
})

describe('Login Negative Case', () => {
    
    beforeEach(() => {
        route.visit(ROUTES.login);
    });

    it('Failed login with username and password not registered', () => {
        elements.fillField(login.usernameField, logindata.INVALID_LOGIN_WITH_USERNAME_AND_PASSWORD_NOT_REGISTED.username);
        elements.fillField(login.passwordField, logindata.INVALID_LOGIN_WITH_USERNAME_AND_PASSWORD_NOT_REGISTED.password);
        elements.click(login.loginButton);
        asserts.shouldContainText(login.errorAlert, "Epic sadface: Username and password do not match any user in this service");
    });
})