import * as route from '@helpers/route.js';
import * as elements from '@helpers/elements.js';
import * as asserts from '@helpers/asserts.js';
import {ROUTES} from '@tests/consts/routes.js';
import * as auth from '@tests/data/login.data.js';
import * as login from '@pages/login.page.js';


describe('Login', () => {
    // Hooks
    beforeEach(() => {
        route.visit(ROUTES.login);
    });

    it('Ensure the error message is diplayed when user input invalid password', () => {
        elements.fillField(login.usernameField, auth.INVALID_LOGIN.username);
        elements.fillField(login.passwordField, auth.INVALID_LOGIN.password);
        elements.click(login.loginButton);
        asserts.shouldContainText(login.errorAlert);
    })
})