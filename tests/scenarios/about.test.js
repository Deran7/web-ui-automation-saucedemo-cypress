import * as route from '@helpers/route.js';
import * as elements from '@helpers/elements.js';
import * as asserts from '@helpers/asserts.js';
import {ROUTES} from '@tests/consts/routes.js';
import * as logindata from '@tests/data/login.data.js';
import * as login from '@pages/login.page.js';
import * as about from '@pages/about.page.js';


describe('About', () => {
    
    beforeEach(() => {
        route.visit(ROUTES.login);
    });
    
    it('As a user, I want to know about the saucedemo.com application', () => {
        // Login
        elements.fillField(login.usernameField, logindata.VALID_LOGIN.username);
        elements.fillField(login.passwordField, logindata.VALID_LOGIN.password);
        elements.click(login.loginButton);
        asserts.shouldContainText(login.title, "Products");

        // About
        elements.click(about.barButton)
        elements.click(about.aboutButton)
        
    });
})