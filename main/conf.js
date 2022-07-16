exports.config = {
    framework: 'jasmine2',
    SELENIUM_PROMISE_MANAGER: true,
    specs: ['runner.js'],
    capabilities: {
      'browserName': 'chrome',
        'chromeOptions': {
          'args': ['show-fps-counter=true']
        }
    }
  };