import * as route from '@helpers/route.js';
import {ROUTES} from '@tests/consts/routes.js';
import * as elements from '@helpers/elements.js';
import * as asserts from '@helpers/asserts.js';
import * as logindata from '@tests/data/login.data.js';
import * as login from '@pages/login.page.js';
import * as verifyitems from '@pages/all-items.pages/verify-items.page.js';

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
        elements.click(verifyitems.navbarButton);
        elements.click(verifyitems.allitemsButton);
        elements.selectDropdown(verifyitems.sortButton, "Name (A to Z)");
        asserts.shouldContainText(verifyitems.title, "Products");
    });

    it('As a user, I want to verify the list of items in alphabetical order from "Z to A""', () => {
        // Login
        elements.fillField(login.usernameField, logindata.VALID_LOGIN.username);
        elements.fillField(login.passwordField, logindata.VALID_LOGIN.password);
        elements.click(login.loginButton);
        asserts.shouldContainText(login.title, "Products");

        // All Items
        elements.click(verifyitems.navbarButton);
        elements.click(verifyitems.allitemsButton);
        elements.selectDropdown(verifyitems.sortButton, "Name (Z to A)");
        asserts.shouldContainText(verifyitems.title, "Products");
    });

    it('As a user, I want to verify the list of items in price order from "low to high""', () => {
        // Login
        elements.fillField(login.usernameField, logindata.VALID_LOGIN.username);
        elements.fillField(login.passwordField, logindata.VALID_LOGIN.password);
        elements.click(login.loginButton);
        asserts.shouldContainText(login.title, "Products");

        // All Items
        elements.click(verifyitems.navbarButton);
        elements.click(verifyitems.allitemsButton);
        elements.selectDropdown(verifyitems.sortButton, "Price (low to high)");
        asserts.shouldContainText(verifyitems.title, "Products");
    });

    it('As a user, I want to verify the list of items in price order from "high to low""', () => {
        // Login
        elements.fillField(login.usernameField, logindata.VALID_LOGIN.username);
        elements.fillField(login.passwordField, logindata.VALID_LOGIN.password);
        elements.click(login.loginButton);
        asserts.shouldContainText(login.title, "Products");

        // All Items
        elements.click(verifyitems.navbarButton);
        elements.click(verifyitems.allitemsButton);
        elements.selectDropdown(verifyitems.sortButton, "Price (high to low)");
        asserts.shouldContainText(verifyitems.title, "Products");
    });
})

