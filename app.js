var express = require('express');
var app = express();

app.use(express.static(__dirname));

var server = app.listen(8080, function () {
    console.log('Server started.');
});
