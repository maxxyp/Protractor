var helper = require('../../helper');
var CartPage = require('./cart.po.js');


describe('Cart page :', function() {

    var cartpage = new CartPage();

    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        browser.get(browser.params.url);
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });

    it('should navigate to the cart and verify that it is empty', function() {
        cartpage.cartIcon.click();
        expect(cartpage.shopping_empty_cart.getText()).toBe(cartpage.emptyCartNotificationText);
    });

});
