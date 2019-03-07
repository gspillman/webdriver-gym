const assert = require('chai').assert;

describe('Webdriver Gym initial smoke test', () => {
  before(() => {
    browser.url('');
    browser.pause(5000);
  });

  it('should be able to view the page', () => {
    console.log('If you can read this, WebdriverIO is running');
  });
});
