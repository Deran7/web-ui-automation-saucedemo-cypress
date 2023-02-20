import * as route from '@helpers/route.js';
import {ROUTES} from '@tests/consts/routes.js';
import * as elements from '@helpers/elements.js';
import * as asserts from '@helpers/asserts.js';
import * as logindata from '@tests/data/login.data.js';
import * as login from '@pages/login.page.js';
import * as resetapp from '@pages/resetapp.page.js';


describe('Reset App', () => {
    
    beforeEach(() => {
        route.visit(ROUTES.login);
    });
    
    it.only('Failed to reset the application because the product in the shopping cart is still saved and not deleted.', () => {
        // Login
        elements.fillField(login.usernameField, logindata.VALID_LOGIN.username);
        elements.fillField(login.passwordField, logindata.VALID_LOGIN.password);
        elements.click(login.loginButton);
        asserts.shouldContainText(login.title, "Products");

        // Order Backpack
        elements.click(resetapp.backpackcartButton);
        elements.click(resetapp.cart);
        elements.click(resetapp.nbarButton);
        elements.click(resetapp.resetappButton);
    });
})