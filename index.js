require('dotenv').config();

let request = require('request');

let apiKey = process.env.APIKEY;
let city = 'austin';
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;



request(apiUrl, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      console.log('body:', body);
    }
  });