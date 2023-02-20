import * as route from '@helpers/route.js';
import {ROUTES} from '@tests/consts/routes.js';
import * as elements from '@helpers/elements.js';
import * as asserts from '@helpers/asserts.js';
import * as logindata from '@tests/data/login.data.js';
import * as login from '@pages/login.page.js';
import * as order from '@pages/all-items.pages/order.page.js';
import * as orderdata from '@data/order.data.js';


describe('Verify the list of items Positive Case', () => {
    
    beforeEach(() => {
        route.visit(ROUTES.login);
    });
    
    it('As a user, I want to verify the list of items in alphabetical order from "A to Z""', () => {
        // Login
        elements.fillField(login.usernameField, logindata.VALID_LOGIN.username);
        elements.fillField(login.passwordField, logindata.VALID_LOGIN.password);
        elements.click(login.loginButton);
        asserts.shouldContainText(login.title, "Products");

        // All Items
        elements.click(order.saucelabsbackpack);
        elements.click(order.addsaucelab);
        elements.click(order.cartButton);
        elements.click(order.checkoutButton);
        elements.fillField(order.firstnameField, orderdata.VALID_DATA_CHECKOUT.firstname);
        elements.fillField(order.lastnameField, orderdata.VALID_DATA_CHECKOUT.lastname);
        elements.fillField(order.postcodeField, orderdata.VALID_DATA_CHECKOUT.postcode);
        elements.click(order.continueButton);
        elements.click(order.finishButton);
        asserts.shouldContainText(order.thanksorder, "THANK YOU FOR YOUR ORDER");
    });
})
