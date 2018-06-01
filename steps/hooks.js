//Set DefaultTimeout
//For this we require Before tag
 var Before = require('cucumber').Before;
 var setDefaultTimeout = require('cucumber').setDefaultTimeout;

 Before(function(){
    console.log("Hooks are called here.............");
    setDefaultTimeout(60000);
    return;
 });