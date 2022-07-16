let SpecReporter = require('jasmine-spec-reporter').SpecReporter

exports.config = {
  framework: 'jasmine2',
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: true,
  specs: ['login.spec.ts'],
  capabilities: {
    'browserName': 'chrome',
	  'chromeOptions': {
		  'args': ['show-fps-counter=true', '--window-size=1920x1280']
	  }
  },
  onPrepare() {
    require("ts-node").register({
        project: require("path").join(__dirname,'./../tsconfig.json')
    });
    jasmine.getEnv().addReporter(
        new SpecReporter({
          suite: {
            displayNumber: true     //display each suite number in hierarchial manner
          },
          spec: {
            displayStacktrace: 'none',
            displayPending: true,       //display each pending spec
            displayDuration: true       //display each spec duration
          },
          summary: {
            displaySuccessful: true,    //display summery of all successes after execution
            displayFailed: true,        //display summery of all failures after execution
            displayPending: true        //display summery of all pending specs after execution
          }
        })
      );
  
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: './../allure-results'
      }));
  
      jasmine.getEnv().beforeEach(function(done){
        browser.takeScreenshot().then(function (png) {
          allure.createAttachment('Screenshot', function () {
            return new Buffer(png, 'base64')
          }, 'image/png')();
          done();
        })
      });
  
      jasmine.getEnv().afterEach(function(done){
        browser.takeScreenshot().then(function (png) {
          allure.createAttachment('Screenshot', function () {
            return new Buffer(png, 'base64')
          }, 'image/png')();
          done();
        })
      });
  }
};