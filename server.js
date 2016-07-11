/**
 * Created by francois.drouin on 2016-07-10.
 */
var express = require('express');
var app = express();
var fs = require("fs");

app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));

app.get('/listUsers', function(req, res){
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
});

app.get('/', function (req, res){
    res.render('index.html');
});

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address.port;

   console.log("Example app listening at http://%s:%s", host, port)
});