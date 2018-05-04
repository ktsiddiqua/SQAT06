
const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()
"use strict";

const webdriverio = require('webdriverio');
const options = { desiredCapabilities: { browserName: 'chorme' } };
const browser = webdriverio.remote(options);

Given('I go to duck duck go', function(callback) {
  browser 
    .init()
    .url('https://duckduckgo.com/').then(function() {
      callback();
    })   
})

When('I search for WebdriverIO', function(callback) {
  browser 
    .setValue('#search_form_input_homepage','WebdriverIO')
    .catch(function(error){
      callback(error);
    })
    .waitForVisible('.badge-link__close', 5000)
    .click('.badge-link__close')
    .click('#search_button_homepage').then(function(){
      callback();
    })
    .catch(function(error){
      callback(error);
    })    
})
  
Then('I should see the search results', function(callback) {
  browser
    // .isVisible("").then(function(actualRes){
    //   actualRes.should.be.true;
    //   callback()
    // })
    .getTitle().then(function(result){
        result.should.equal("WebdriverIO at DuckDuckGo");
        callback();
  })
    .catch(function(error){
    callback(error);
  })
})
//Then("The title of the page should be WebdriverIO at DuckduckGo"