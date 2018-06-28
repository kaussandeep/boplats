'use strict';
const EC = protractor.ExpectedConditions;
const timeout = 10000;

class SingleObjectPage{
async get(URL){
    browser.waitForAngularEnabled(false);
await browser.get(URL, timeout);
//await browser.wait(EC.visibilityOf( .userbox'), 10000, 'page did not open');

}
}
module.exports = SingleObjectPage;
