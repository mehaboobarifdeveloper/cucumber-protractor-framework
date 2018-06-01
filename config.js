exports.config = {
    //connection to browser how?
    directConnect: true,
    //framework
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //specs
    specs: ['./feature/**/*.feature'],
    cucumberOpts: {
        require: [
          './steps/**/*.steps.js',
          './steps/hooks.js'
        ],
        // Tell CucumberJS to save the JSON report
        format: 'json:.tmp/results.json',
        strict: true        
      },
      plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options:{
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true 
        }
    }]      
}