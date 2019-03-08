const assert = require('chai').assert;

describe('Webdriver Gym advanced test suite', () => {
  before(() => {
    browser.url('');
    browser.pause(5000);
  });

  it.skip('should change the images displayed in the image carousel when you click the left and right control buttons', () => {
    // Make a test that clicks the left and right control buttons
    // but verifies the content of the image carousel being displayed changed states when each button is clicked.
  });

  it.skip('should play some rad 80s music when the test suite finishes', () => {
    // There is a music file in the resources folder.
    // Use java script to play the music file back once the test suite is finished.
  });
});
