const assert = require('chai').assert;
const page = require('../guimap/default.page.objects.js');

let contentHolder;

describe('Webdriver Gym initial smoke test', () => {
  before(() => {
    browser.url('');
    browser.pause(3000);
  });

  it('should be able to view the page', () => {
    // Make a test that verifies you can view the app at the default test URL.
    contentHolder = browser.getText(page.pageHeader);
    assert(
      contentHolder.includes("Welcome to"),
      'The page header should contain the text, "Welcome to"'
      );
    assert(
      browser.isVisible(page.mainContainer),
      'The main content container should be visible'
    );
  });

  it.skip('has a masthead image near the top of the page', () => {
    // Write a test that verifies the masthead image is rendered on the test page.
  });

  it.skip('does not have a 500 error present on the page', () => {
    // Build a test that scans the page once rendered and verifies no 500 error is contained therein.
  });

  it.skip('displays a to do app widget', () => {
    // Write at test to verify the To Do list widget is visible on the page.
  });

  it.skip('has a user login form', () => {
    // Write at test to verify the login form is visible on the page.
  });

  it.skip('displays a text area form', () => {
    // Write at test to verify the text area widget is visible on the page.
  });

  it.skip('contains an image carousel', () => {
    // Write at test to verify the image carousel widget is visible on the page.
  });

  it.skip('hosts a collection of links', () => {
    // Write at test to verify the links section is visible on the page.
  });

  it.skip('contains a footer with some text', () => {
    // Write at test to verify the site footer is visible on the page.
  });
});
