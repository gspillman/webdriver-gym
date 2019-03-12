const assert = require('chai').assert;
const page = require('../guimap/default.page.objects');

describe('Webdriver Gym functional test suite', () => {
  before(() => {
    browser.url('');
    browser.pause(3000);
  });

  it.skip('should all a user to log into the page', () => {
    // Create a test that logs into the page using the correct user name and password.
    //  The user name and password is 'webdriver' and 'gym'
    browser.waitForVisible(page.userNameField);
    browser.setValue(page.userNameField, "webdriver");
  });

  it.skip('displays a login error message when an incorrect username or password is used to log in', () => {
    // Write at test that logs in using a bad user and password combination.
    // Verify a sensible error message appears when doing so.
  });

  it.skip('lets the user add an item to the to-do list widget', () => {
    // Write at test that adds an item to the To Do list widget.
    // Verify the list content is updated.
  });

  it.skip('allows the user to delete and item from the to do list widget given at least one item already exists', () => {
    // Write a test that removes and existing item from the To Do list widget.
    // Note that you should write this test so that it can be run independent of any existing test in the suite.
  });

  it.skip('can display a success message if the user submits text to the textarea widget', () => {
    // Write a test that submits some text content to the text area widget
  });

  it.skip('should display an error message if the user posts text to the text area widget that exceeds the 50 character limit', () => {
    // Create a test that exceeds the text area widget's character limit.
    // Verify it returns a relative error message.
  });

  it.skip('should display at least 1 image in the image slider', () => {
    // Make a test that verifies at least 1 image is rendered in the image carousel widget.
  });

  it.skip('allows the user to click on the left and right image slider action buttons', () => {
    // The carousel widget should have a left and right button control.
    // Make a test that verifies these buttons can be clicked on.
  });

  it.skip('contains a link in the link section that redirects the user to a different site', () => {
    // Make a test that clicks on one of the links in the link section that redirects the user to a different site.
    // Take care to make sure you verify the redirect occurs but doesn't abandon the test session there.
  });

  it.skip('contains a link in the link section that opens a new browser window when clicked', () => {
    // Similar to the previous test, write a test that clicks one of the links that opens a new browser window or tab.
    // Verify the new tab/window exists.
    // Make sure the test session doesn't get lost there.
  });

  it.skip('has a footer section that contains the current date', () => {
    // Write a test that verifies the footer contains text.
    // Verify some of that text displays the current date.
  });

  it.skip('contains a link within the footer the user can click on', () => {
    // Build a test that verifies you can click on the link within the footer.
  });
});
