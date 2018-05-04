
const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()
"use strict";

const webdriverio = require('webdriverio');
const options = { desiredCapabilities: { browserName: 'chorme' } };
const browser = webdriverio.remote(options);

//<span class="ddgsi badge-link__close js-badge-link-dismiss">×</span>
//<div class="badge-link__wrap js-badge-main-msg"><div class="badge-link__thumb"><img class="badge-link__thumb__img" src="assets/onboarding/robot-icon-frameless.svg"></div><p class="badge-link__title js-badge-link__title">Your data shouldn’t be for sale.<br>At DuckDuckGo, we agree.</p><ol class="badge-link__bullets"><li class="badge-link__bullet"><span class="badge-link__bullet-num">1</span>Block advertising trackers.</li><li class="badge-link__bullet"><span class="badge-link__bullet-num">2</span>Keep your search history private.</li><li class="badge-link__bullet"><span class="badge-link__bullet-num">3</span>Take control of your personal data.</li></ol><div class="badge-link__btn-group"><span class="badge-link__btn btn btn--primary js-badge-link-button">Add DuckDuckGo to Chrome</span></div><span class="ddgsi badge-link__close js-badge-link-dismiss">×</span></div>
//next
//<span class="ddgsi badge-link__close js-badge-link-close">×</span>
//<span class="ddgsi badge-link__close js-badge-link-close">×</span>


Given('I go to duck duck go', function(callback) {
  browser 
    .init()
    .url('https://duckduckgo.com/').then(function() {
      callback();
    })   
})

When('I search for WebdriverIO', function(callback) {
  browser 
   .deleteCookie() 
   .setValue('#search_form_input_homepage','WebdriverIO')
    .catch(function(error){
      callback(error);
    })
    // badge-link__wrap .badge-link__btn-group
    //js-badge-link-dismiss//badge-link__close
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