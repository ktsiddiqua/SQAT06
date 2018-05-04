"use strict";

const webdriverio = require('webdriverio');
const options = { desiredCapabilities: { browserName: 'chorme' } };
const client = webdriverio.remote(options);

client
    .init()
    .url('https://app.figure1.com/account/register')
    .waitForVisible('.register-page__username-input')
    .setValue('.register-page__username-input', Math.random().toString(36).substr(7))
    .catch(function(err){
        console.log(err)
    })
    .setValue('.register-page__email-input', Math.random().toString(36).substr(7)+'@gmail.com')
    .catch(function(err){
        console.log(err)
    })
    .setValue('.register-page__password-input', 'kazitamanna')
    .catch(function(err){
        console.log(err)
    })
    .setValue('.register-page__confirm-password-input', 'kazitamanna')
    .catch(function(err){
        console.log(err)
    }).addValue('.register-page__specialties-list','Student')
    .addValue('.register-page__specialties-other-list','Technologist Student')
    .catch(function(err){
        console.log(err)
    })
    .scroll('.register-page__terms-checkbox')
    .click('.register-page__terms-checkbox')
    .catch(function(err){
        console.log(err)
    })
    .click('.register-page__submit-button')     
    .catch(function(err){
        console.log(err)
    })
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
    })
    .catch(function(err){
        console.log(err)
    })
   
