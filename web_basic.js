"use strict";
//third modify
const webdriverio = require('webdriverio');
const options = { desiredCapabilities: { browserName: 'chorme' } };
const client = webdriverio.remote(options);

client
    .init()
    .url('https://www.google.ca/')
    //https://www.google.ca/
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#search_button_homepage')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
    })
   // .windowHandleMaximize(["current"])
    .end();
