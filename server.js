require('dotenv').config();

let request = require('request');
const express = require('express');
const app = express();


let apiKey = process.env.APIKEY;
let city = 'austin';
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;



request(apiUrl, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);    
    }
    }
);

app.get('/', function (req, res) {
  res.send('Express server is running!')
});

app.listen(3000, function () {
  console.log('Listening on port 3000')
});