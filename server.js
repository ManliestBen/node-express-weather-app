require('dotenv').config();

let request = require('request');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


let apiKey = process.env.APIKEY;




app.get('/', function (req, res) {
  res.render('index');
});

app.post('/', function (req, res) {
  let city = req.body.city;
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  request(apiUrl, function (err, response, body) {
      if(err){
        res.render('index', {weather: null, error: 'Please try again'});
      } else {
          let weather = JSON.parse(body);
          if (weather.main == undefined){
            res.render('index', {weather: null, error: 'Please try again'});
          } else {
              let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
              res.render('index', {weather: message, error: null});
          }
      }
  });
});

app.listen(3000, function () {
  console.log('Listening on port 3000')
});