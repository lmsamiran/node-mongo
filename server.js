var express = require('express');
var fileUpload = require('express-fileupload');
var router = require('./app/router');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('front'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/',router);

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/front/index.html'); // load the single view file (angular will handle the page changes on the front-end)
})

app.listen(8088);
console.log('8088 is the port'+process.title);
