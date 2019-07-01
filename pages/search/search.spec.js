var helper = require('../../helper');
SearchPage = require('./search.po.js');

describe('Search :', function() {

    var searchpage = new SearchPage;


    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        browser.get(browser.params.url);
        browser.manage().window().maximize();
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });

    // it('should search for shoes', function() {
    //     helper.waitUntilReady(searchpage.searchField);
    //     searchpage.searchField.sendKeys('shoes');
    //     searchpage.searchBtn.click();
    //     helper.waitUntilReady(searchpage.searchResults);
    //     var plp_Results = searchpage.searchResults.getText();
    //     expect(plp_Results).toBe('Printed Summer Dress');
    // });

    //The method below uses promises

    it('should search for shoes', function(done) {
        helper.waitUntilReady(searchpage.searchField)
            .then(function() {
                return searchpage.searchField.sendKeys('shoes');
            })
            .then(function() {
                return searchpage.searchBtn.click();
            })
            .then(function() {
                return helper.waitUntilReady(searchpage.searchResults);
            })
            .then(function() {
                var plp_Results = searchpage.searchResults.getText();
                return expect(plp_Results).toBe('Printed Summer Dress');
            })
            .then(done);
    });

});
