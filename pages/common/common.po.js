var helper = require('../../helper');

var CommonElements = function() {

    this.signInButton = element(By.linkText('Sign in'));

    this.goToSignIn = function () {
        helper.waitElementToBeClickable(this.signInButton)
        this.signInButton.click()

    }

}

module.exports = CommonElements;
