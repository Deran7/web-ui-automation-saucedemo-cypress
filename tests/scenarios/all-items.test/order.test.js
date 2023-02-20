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
    
    it.only('As a user, I want to order an item in the form of a backpack "Sauce Labs Backpack"', () => {
        // Login
        elements.fillField(login.usernameField, logindata.VALID_LOGIN.username);
        elements.fillField(login.passwordField, logindata.VALID_LOGIN.password);
        elements.click(login.loginButton);
        asserts.shouldContainText(login.title, "Products");

        // Order Backpack
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

    it.only('As a user, I want to order an item in the form of a backpack "Sauce Labs Bolt T-Shirt"', () => {
        // Login
        elements.fillField(login.usernameField, logindata.VALID_LOGIN.username);
        elements.fillField(login.passwordField, logindata.VALID_LOGIN.password);
        elements.click(login.loginButton);
        asserts.shouldContainText(login.title, "Products");

        // Order T-Shirt Bold
        elements.click(order.bolttshirt);
        elements.click(order.addbolt);
        elements.click(order.cartButton);
        elements.click(order.checkoutButton);
        elements.fillField(order.firstnameField, orderdata.VALID_DATA_CHECKOUT.firstname);
        elements.fillField(order.lastnameField, orderdata.VALID_DATA_CHECKOUT.lastname);
        elements.fillField(order.postcodeField, orderdata.VALID_DATA_CHECKOUT.postcode);
        elements.click(order.continueButton);
        elements.click(order.finishButton);
        asserts.shouldContainText(order.thanksorder, "THANK YOU FOR YOUR ORDER");
    });

    it.only('As a user, I want to order an item in the form of a light "Sauce Labs Bike Light"', () => {
        // Login
        elements.fillField(login.usernameField, logindata.VALID_LOGIN.username);
        elements.fillField(login.passwordField, logindata.VALID_LOGIN.password);
        elements.click(login.loginButton);
        asserts.shouldContainText(login.title, "Products");

        // Order Bike Light
        elements.click(order.saucelabsbikelight);
        elements.click(order.addlight);
        elements.click(order.cartButton);
        elements.click(order.checkoutButton);
        elements.fillField(order.firstnameField, orderdata.VALID_DATA_CHECKOUT.firstname);
        elements.fillField(order.lastnameField, orderdata.VALID_DATA_CHECKOUT.lastname);
        elements.fillField(order.postcodeField, orderdata.VALID_DATA_CHECKOUT.postcode);
        elements.click(order.continueButton);
        elements.click(order.finishButton);
        asserts.shouldContainText(order.thanksorder, "THANK YOU FOR YOUR ORDER");
    });

    it.only('As a user, I want to order an item in the form of a jacket "Sauce Labs Fleece Jacket"', () => {
        // Login
        elements.fillField(login.usernameField, logindata.VALID_LOGIN.username);
        elements.fillField(login.passwordField, logindata.VALID_LOGIN.password);
        elements.click(login.loginButton);
        asserts.shouldContainText(login.title, "Products");

        // Order Fleece Jacket
        elements.click(order.jacket);
        elements.click(order.addjacket);
        elements.click(order.cartButton);
        elements.click(order.checkoutButton);
        elements.fillField(order.firstnameField, orderdata.VALID_DATA_CHECKOUT.firstname);
        elements.fillField(order.lastnameField, orderdata.VALID_DATA_CHECKOUT.lastname);
        elements.fillField(order.postcodeField, orderdata.VALID_DATA_CHECKOUT.postcode);
        elements.click(order.continueButton);
        elements.click(order.finishButton);
        asserts.shouldContainText(order.thanksorder, "THANK YOU FOR YOUR ORDER");
    });

    it.only('As a user, I want to order an item in the form of a Onesie "Sauce Labs Onesie"', () => {
        // Login
        elements.fillField(login.usernameField, logindata.VALID_LOGIN.username);
        elements.fillField(login.passwordField, logindata.VALID_LOGIN.password);
        elements.click(login.loginButton);
        asserts.shouldContainText(login.title, "Products");

        // Order Labs Onesie
        elements.click(order.onesie);
        elements.click(order.addonesie);
        elements.click(order.cartButton);
        elements.click(order.checkoutButton);
        elements.fillField(order.firstnameField, orderdata.VALID_DATA_CHECKOUT.firstname);
        elements.fillField(order.lastnameField, orderdata.VALID_DATA_CHECKOUT.lastname);
        elements.fillField(order.postcodeField, orderdata.VALID_DATA_CHECKOUT.postcode);
        elements.click(order.continueButton);
        elements.click(order.finishButton);
        asserts.shouldContainText(order.thanksorder, "THANK YOU FOR YOUR ORDER");
    });

    it.only('As a user, I want to order an item in the form of  T-shirt Test.allTheThings() T-Shirt (Red', () => {
        // Login
        elements.fillField(login.usernameField, logindata.VALID_LOGIN.username);
        elements.fillField(login.passwordField, logindata.VALID_LOGIN.password);
        elements.click(login.loginButton);
        asserts.shouldContainText(login.title, "Products");

        // Order T-shirt Test.allTheThings
        elements.click(order.tshirt);
        elements.click(order.addtshirt);
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
