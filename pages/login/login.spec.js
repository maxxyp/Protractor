var helper = require('../../helper');
// var faker = require('faker');
var CommonElements = require('../common/common.po.js');
var LoginPage = require('./login.po.js');

describe('e2e test - Ecommerce', function() {

    var loginpage = new LoginPage();
    var commonpage = new CommonElements();

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get(browser.params.url);
    });

    afterEach(function () {
        browser.manage().deleteAllCookies();

    });

    it('should check Homepage title', function() {
        // expect(browser.getTitle()).toEqual('My Store')
        expect(browser.getTitle()).toEqual(loginpage.pagetitle);

    });

    it('should signin with error', function() {
        commonpage.goToSignIn();
        helper.waitUntilReady(loginpage.email);
        loginpage.email.sendKeys("maxxy@gmail.com");
        helper.waitUntilReady(loginpage.passw);
        loginpage.passw.sendKeys("Today01");
        helper.waitElementToBeClickable(loginpage.signbtn);
        loginpage.signbtn.click();
        helper.waitUntilReady(loginpage.errorMessage);
        var LoginErrorMessage = loginpage.errorMessage.getText();
        expect(LoginErrorMessage).toBe('There is 1 error');

    });

    it('should signin successfully', function() {
        commonpage.goToSignIn();
        helper.waitUntilReady(loginpage.email);
        loginpage.email.sendKeys("davin.riches@gmail.com");
        helper.waitUntilReady(loginpage.passw);
        loginpage.passw.sendKeys("Today01");
        helper.waitElementToBeClickable(loginpage.signbtn);
        loginpage.signbtn.click();
        helper.waitUntilReady(loginpage.signout);
        loginpage.signout.click();
    });

    it('should Register a new user', function() {
        commonpage.goToSignIn();
        loginpage.doRegister();
    });

});