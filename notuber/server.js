var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/rides', function(request, response) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");

    var ids = ["5cdf411856e9c200042989d7", "5cf583aafbbfe80004456918", "5cf583aafbbfe80004456919", "5cf583aafbbfe8000445691a", "5cf583aafbbfe8000445691b", "5cf583abfbbfe8000445691c", "5cf583acfbbfe8000445691d"];
    var username = request.body.username;
    var lat = request.body.lat;
    var lng = request.body.lng;
    if (username != undefined && lat != undefined && lng != undefined && validator.isFloat(lat) && validator.isFloat(lng)) {
        lat = parseFloat(lat);
        lng = parseFloat(lng);
        if (lat >= -90 && lat <= 90 && lng >= -180 && lng <=180) {
            if (ids.indexOf(username) != -1) {
                client.query(error, result) => {
                    if (!error) {
                        response.send(result.rows);
                    }
                }
            }
            else {
                response.send('Error in data');
            }
        }
    }
})