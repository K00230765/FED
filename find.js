const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = 'a641d8499eb59eec9dc64b903d8851fd';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('homepage', {weather: null, pressure: null, humidity: null, windSpeed: null, windDirection: null, windDirectionDegree:null,description: null, icon: null,map:null, error: null});
})

app.post('/', function (req, res) {
  let city  = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  

  request(url, function (err, response, body) {
    if(err){
      res.render('homepage', {weather: null, pressure: null, humidity: null, windSpeed: null, windDirection: null, windDirectionDegree:null,description: null,icon: null, map: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      console.log(weather);
      if(weather.main == undefined){
        res.render('homepage', { weather: null, pressure: null, humidity: null, windSpeed: null, windDirection: null, windDirectionDegree:null,description: null, icon: null,map:null,error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        let pressureText = `Atmospheric Pressure is ${weather.main.pressure}!`;
        let humidityText = `The humitidy is ${weather.main.humidity}!`;
        let windSpeedText = `${weather.wind.speed} is the current wind speed!`;
        let windDirectionText = `The wind direction is ${weather.wind.deg}!`;
        let windDirectionDeg = `${weather.wind.deg}`; 
        let weatherDesc = `A short description of the weather: ${weather.weather[0].description}!`;
        let weatherIcon = `${weather.weather[0].icon}!`;
        let worldMap = `$('#map').vectorMap({map: 'world_mill'})`;
        res.render('homepage', {weather: weatherText, error: null, pressure: pressureText, humidity: humidityText, windSpeed: windSpeedText,  windDirection: windDirectionText, windDirectionDegree: findWindDirection(windDirectionDeg), description: weatherDesc, icon: iconChoiceBackground(weatherIcon), map: worldMap,});
      }
    }
 })
    function iconChoiceBackground(weatherIcon){
        let iconBackground;
        console.log('hi');
        if (weatherIcon == '01d'){
            iconBackground = '/img/01d.png';
        }
        else if (weatherIcon == '01n'){
            iconBackground = '/img/01n.jpg';
        }
        else if (weatherIcon == '02d'){
            iconBackground = '/img/02d.jpg';
        }
        else if (weatherIcon == '02n'){
            iconBackground = '/img/02n.jpg';
        }
        else if (weatherIcon == '03d' || weatherIcon == '03n'){
            iconBackground = '/img/03d.jpg';
        }
        else if (weatherIcon == '04d' || weatherIcon == '04n'){
            iconBackground = '/img/04d.jpg';
        }
        else if (weatherIcon == '09d' || weatherIcon == '09n'){
            iconBackground = '/img/09d.jpg';
        }
        else if (weatherIcon == '10d'){
            iconBackground = '/img/10d.jpg';
        }
        else if (weatherIcon == '10n'){
            iconBackground = '/img/10n.jpg';
        }
        else if (weatherIcon == '11d' || weatherIcon == '11n'){
            iconBackground = '/img/11d.jpeg';
        }
        else if (weatherIcon == '13d' || weatherIcon == '13n'){
            iconBackground = '/img/13d.jpg';
        }
         else if (weatherIcon == '50d' || weatherIcon == '50n'){
            iconBackground = '/img/50.jpg';
        }
        return iconBackground;
    }
    
    function findWindDirection(degree){
        let direction;
        if(degree <= 348.75 || degree >= 11.25){
            direction = '/img/Arrow.svg';
        }
        else if(degree >= 33.75 && degree <= 56.25){
            direction = '/img/Arrow.svg';
        }
        else if(degree >= 56.25 && degree <= 78.75){
            direction = '/img/Arrow.svg';
        }
        else if(degree >= 78.75 && degree <= 101.25){
            direction = '/img/Arrow.svg';
        }
        else if(degree >= 101.25 && degree <= 123.75){
            direction = '/img/Arrow.svg';
        }
        else if(degree >= 123.75 && degree <= 146.25){
            direction = '/img/Arrow.svg';
        }
        else if(degree >= 146.25 && degree <= 168.75){
            direction = '/img/Arrow.svg';
        }
        else if(degree >= 168.75 && degree <= 191.25){
            direction = '/img/Arrow.svg';
        }
        else if(degree >= 191.25 && degree <= 213.75){
            direction = '/img/Arrow.svg';
        }
        else if(degree >= 213.75 && degree <= 236.75){
            direction = '/img/Arrow.svg';
        }
        else if(degree >= 236.75 && degree <= 258.75){
            direction = '/img/Arrow.svg';
        }
        else if(degree >= 258.75 && degree <= 281.25){
            direction = '/img/Arrow.svg';
        }
        else if(degree >= 281.25 && degree <= 303.75){
            direction = '/img/Arrow.svg';
        }
        else if(degree >= 303.75 && degree <= 326.75){
            direction = '/img/Arrow.svg';
        }
        else if(degree >= 326.25 && degree <= 348.75){
            direction = '/img/Arrow.svg';
        }
    }
})





app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})