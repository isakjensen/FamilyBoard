const express = require('express');
const request = require('request');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3000;

const icons = {
    '01': { icon: 'fa-sun', color: 'text-yellow-400' },
    '02': { icon: 'fa-clouds-sun', color: 'text-yellow-200' },
    '03': { icon: 'fa-cloud', color: 'text-blue-400' },
    '04': { icon: 'fa-clouds', color: 'text-blue-200' },
    '09': { icon: 'fa-cloud-showers', color: 'text-gray-400' },
    '10': { icon: 'fa-cloud-drizzle', color: 'text-gray-400' },
    '11': { icon: 'fa-thunderstorm', color: 'text-yellow-600' },
    '13': { icon: 'fa-cloud-snow', color: 'text-white' },
    '50': { icon: 'fa-fog', color: 'text-gray-400' },
}

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "familyboard"
});

app.get('/api/GetWeather/', async function (req, res) {
    res.header('Content-Type', 'application/json');
    
    await request('http://api.openweathermap.org/data/2.5/weather?id=2693678&appid=5a23f0f30500b37f2e2c876ce3f774f8', { json: true }, (err, result, body) => {
        if (err) {
            return console.log(err);
        }

        let d, hours, minutes;

        d = new Date(result.body.sys.sunset * 1000);
        hours = d.getHours();
        minutes = d.getMinutes();

        let obj = {
            deg: result.body.main.temp - 273.15,
            desc: result.body.weather[0].description,
            view: result.body.visibility / 1000,
            wind: result.body.wind.speed,
            sunset: AddZero(hours) + ':' + AddZero(minutes),
            icon: icons[result.body.weather[0].icon.substring(0, 2)].icon,
            iconColor: icons[result.body.weather[0].icon.substring(0, 2)].color,
        };

        res.send(JSON.stringify(obj, null, 4));
    });
});

app.get('/api/GetNotifications/', async function (req, res) {
    res.header("Content-Type", 'application/json');

    con.query(`SELECT * FROM notifications ORDER BY date LIMIT 5`, function (err, result) {
        res.send(JSON.stringify(result, null, 4));
    });
});

function AddZero(x) {
    if(x < 10) {
        return '0' + x;
    } else {
        return x;
    }
}

app.listen(port);

console.log('API started, connected to port '+ port + '.');