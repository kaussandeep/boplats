'use strict';

const EC = protractor.ExpectedConditions;
const SingleObjectPage = require('../page/single-object-page.js');

describe('This is first test', () => {

    it('Open the test page', async() => {
      const page = new SingleObjectPage();
      
      await page.get('https://nya.boplats.se/');
      $('#login').click();
      browser.wait(EC.visibilityOf($('#login-frame', 5000, 'failed')));
      console.log('done');
      $('. input').$('#username').sendKeys("abc");
      var uname = $('[name="login_button"]');
      //expect(uname.getText()).toBe('Log in');
      //element.sendKeys("abcdef");
     //browser.wait(EC.visibilityOf($('#username', 5, 'failed')));
     //$('#username').focus();
     

      browser.sleep(6000);
      //await browser.wait(EC.visibilityOf($('#pagehead')), 5000, 'failed');
       //await browser.wait(EC.elementToBeClickable($('')));
     
      
    });

});