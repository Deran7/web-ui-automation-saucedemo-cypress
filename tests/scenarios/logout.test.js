import * as route from '@helpers/route.js';
import * as elements from '@helpers/elements.js';
import {ROUTES} from '@tests/consts/routes.js';
import * as logout from '@pages/logout.page.js';

describe('Logout', () => {
    
    before(() => {
        route.visit(ROUTES.logout);
    });
    
    it('Should success logout with valid data', () => {
        elements.click(logout.logoutButton);
    })
})