exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./pages/*/*.spec.js'],

    params: {
        url: 'http://automationpractice.com/'
    },

    suites: {
        cart: 'pages/cart/**/*.spec.js',
        login: 'pages/login/**/*.spec.js',
        search: 'pages/search/**/*.spec.js'
    },

    onPrepare: function() {
        browser.ignoreSychronization = false;
    },

    // browserName: 'chrome',
    // directConnect: 'true'

    // multiCapabilities: [
    //     {
    //         'browserName' : 'chrome'
    //     },
    //     {
    //         'browserName' : 'firefox'
    //     },
    //
    // ]
};