const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()

"use strict";

Given('I go to Figure1 sign up page', function(callback) {
  this.browser
    .init()
    .url('https://app.figure1.com/account/register').then(function() {
        callback();
    })
})

When('I enter for username', function (callback) {
  this.browser
    .waitForVisible('.register-page__username-input', 2000)  
    .setValue('.register-page__username-input', Math.random().toString(36).substr(7))
    .then(function() {
        callback();
  })
    .catch(function(error){
        callback(error);
  })    
});

  
When('I enter for emailaddress', function (callback) {
  this.browser
    .waitForVisible('.register-page__email-input', 2000)  
    .setValue('.register-page__email-input',Math.random().toString(36).substr(7)+'@gmail.com')
    .then(function() {
        callback();
  })
    .catch(function(error){
        callback(error);
  })    
});

When('I enter for password', function (callback) {
  this.browser
    .waitForVisible('.register-page__password-input', 2000)  
    .setValue('.register-page__password-input','888888')
    .then(function() {
        callback();
  })
    .catch(function(error){
        callback(error);
  })    
});

When('I enter for repeatpassword', function (callback) {
  this.browser
    .waitForVisible('.register-page__confirm-password-input', 2000)  
    .setValue('.register-page__confirm-password-input','888888')
    .then(function() {
        callback();
  })
    .catch(function(error){
        callback(error);
  })    
});


When('I select a profession', function (callback) {
  this.browser
    .waitForVisible('.register-page__specialties-list', 2000)  
    .addValue('.register-page__specialties-list','Student')
    .then(function() {
        callback();
  })
    .catch(function(error){
        callback(error);
  })    
});
When('I select other speciality', function (callback) {
  this.browser
    .waitForVisible('.register-page__specialties-other-list', 2000)  
    .addValue('.register-page__specialties-other-list','Technologist Student')
    .then(function() {
        callback();
    })
    .catch(function(error){
        callback(error);
  })    
});

When('I agree to the termsofservice', function (callback) {
  this.browser
    .waitForVisible('.register-page__terms-checkbox', 2000)  
    .scroll('.register-page__terms-checkbox')
    .click('.register-page__terms-checkbox')
    .then(function() {
        callback();
  })
  .catch(function(error){
        callback(error);
  })    
});

When('I submit creataccount', function (callback) {
  this.browser
    .waitForVisible('.register-page__submit-button', 2000)  
    .click('.register-page__submit-button')
    .then(function() {
        callback();
  })
    .catch(function(error){
        callback(error);
  })    
});

Then('I should see home logo  after the successful registration', function(callback) {
  this.browser
    .waitForVisible('.header-home',60000)
    .isVisible('.header-home').then(function(result){
        result.should.be.true;
        callback();         
  })
  .catch(function(error){
        callback(error);
        
  })
})