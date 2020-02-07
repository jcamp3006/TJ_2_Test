var express = require('express');
var app = express();
const path = require('path');
var PORT = 8080;                     // 8080 must be the port to deploy on openshift



// app.use(express.static(path.join(__dirname, '/public')));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
  res.send("Hello World!");
});



app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT + ' !' );
});