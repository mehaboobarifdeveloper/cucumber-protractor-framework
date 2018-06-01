var {Given, When, Then} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

Given('i go to url {string}', function (string) {
    browser.get(string);
    browser.wait(()=>{
        return element(by.id('username')).isPresent();
    }, 30000);
    return expect(element(by.id('username')).isPresent()).to.eventually.equal(true);
});

When('i enter username as {string}', function (string) {
    return element(by.id('username')).sendKeys(string);

});
When('i enter password as {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return element(by.id('password')).sendKeys(string);
});
When('i enter user description as {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return element(by.name('formly_1_input_username_0')).sendKeys(string);
});

Then('home page should be displayed', function () {
    // Write code here that turns the phrase above into concrete actions
    return;
});