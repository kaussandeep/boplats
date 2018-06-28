'use strict';

const EC = protractor.ExpectedConditions;
const SingleObjectPage = require('../page/single-object-page.js');

describe('This is first test', () => {

    it('Open the test page', async() => {
      const page = new SingleObjectPage();
      
      await page.get('https://nya.boplats.se/');
      await browser.wait(EC.visibilityOf($('#pagehead')), 5000, 'failed');
       
     
      
    });

});