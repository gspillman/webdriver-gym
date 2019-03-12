# Webdriver-Gym

## About:

This project is a simple web application front end built using Angular JS, intended to be used as a trainer for practicing building test automation using webdriverio. 

The intent is to provide a testing ground for front end automation (with the focus on a JavaScript-based solution) 
that can be used either to evaluate skills, increase experience or allow for experimentation without having to do 
so with an existing project that targets actual end users or clients. 

## Getting Started:

To build this project, you will need NodeJS version 8+

Download this project and run ```npm install``` to build the application and install project dependencies. 

Note that to run the test automation locally requires a local installation of Chrome Driver for webdriver. 

[This link](http://chromedriver.chromium.org/getting-started) should detail how to install and set up the latest version of Chrome Driver.

## Important Scripts in This Project

In the project directory, you can run:

#### ```npm start```

Runs the web app.  Note, you will need start the app before you can successfully run tests<br>
Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

#### ```npm test-functional```

This starts webdrivern executes tests against the application locally.  

You can pass arguments to the ```wdio``` binary through this scrip by concatinating them 
as follows:

```npm run test-functional -- --suite smoke``` to run all tests in the smoke test suite

or 

```npm run test-functional -- --spec test/specs/ui-smoke-test.spec.js``` to run a specific spec file

#### ```npm test-functional:clean```

This script deletes accumulated error start screen shots and local selenium logs from your working environment

## Project Structure

The portions of this project are structured as follows:

##### ```src```
This is the project root for the web app front end.  
Essentially, the directory contains the code the rest of this projects tests.

##### ```test```
This directory contains all project files related to testing the web application with webdriverio

##### ```config```
The wdio config file and any other associated files are stored here.  
The wdio config dictates how Webdriver will behave when testing 
including timeouts and browser types to test with.

##### ```guimaps```
The page object classes used for testing are stored here.

##### ```reports```
JUnit reports, screen shots and other such assets are stored here. 

##### ```specs```                                                                                                             
Functional tests are stored within class files located here. 

## Development Checklist

If you are looking for some direction on what to do with this project, there are are some 
implicit asks to be undertaken in order for the automation work for this app the be 'complete'.

Use the following checklist as a guide to the different tasks needed to 'build out' the 
automation solution for this project.  

Most questions of the 'How to do... X' with Webdriverio can be answered by following through 
the Webdriverio API documentation [here](https://webdriver.io/docs/api.html).

- [ ] Start the app locally and run the initial test script
- [ ] Enable the one completed test in the function test spec which is set to be skipped
- [ ] Build tests to fulfill the descriptors for all tests in the smoke test spec
- [ ] Enable and run all tests in the smoke spec - make sure they are passing
- [ ] Write tests to fulfill the descriptors provided stubs in the functional test spec
- [ ] Enable these tests, run then and make sure all tests are passing
- [ ] Configure a test suite for both the smoke test spec and the functional test spec
- [ ] Insure you can run each suite independently by passing a relative flag to the test-functional script
- [ ] Build tests to satisfy the advanced test spec and make sure they run/pass
- [ ] Configured another test suite to help run this spec - similar in manner to the previous specs
 - [ ] Modify the wdio config file so that after each test, upon failure only, a screen shot is taken 
      of the browser state at the point of failure
