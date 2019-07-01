var faker = require('faker');
var helper = require('../../helper');

var LoginPage = function() {

    var randomFirstName = faker.name.firstName();
    var randomlastName = faker.name.lastName();
    var randomEmail = faker.internet.email();
    var password = faker.internet.password();

    this.pagetitle = 'My Store';
    this.email = element(By.name('email'));
    this.passw = element(By.name('passwd'));
    this.signbtn = element(By.id('SubmitLogin'));
    this.signout = element(By.css('.logout'));
    this.errorMessage = element(By.css("#center_column > div.alert.alert-danger > p"));

    // var signInButton = element(By.linkText('Sign in'));
    this.createEmail = element(By.id('email_create'));
    this.submitCreateBtn = element(By.css('#SubmitCreate > span'));
    this.gender = element(By.css('#id_gender1'));
    this.firstName = element(By.id('customer_firstname'));
    this.lastName = element(By.id('customer_lastname'));
    this.dob = element(By.id('dob'));
    this.emailAddress = element(By.name('email_address'));
    this.companyName = element(By.name('company'));

    this.doRegister = function () {
        helper.waitUntilReady(this.createEmail);
        this.createEmail.sendKeys(randomEmail);
        this.submitCreateBtn.click();
        helper.waitUntilReady(this.gender);
        this.gender.click();
        this.firstName.sendKeys(randomFirstName);
        this.lastName.sendKeys(randomlastName);
        // dob.sendKeys("12/12/1990");
        // emailAddress.sendKeys("david@gmail.com");
        // companyName.sendKeys("MAK Ltd");

    }

}

module.exports = LoginPage;
