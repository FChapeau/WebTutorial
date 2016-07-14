/**
 * Created by francois.drouin on 2016-07-10.
 */
var express = require('express');
var app = express();
var fs = require("fs");
var models = require("./models");
var bodyparser = require('body-parser');

//Config
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);

//Use
app.use(require("./controllers"));
app.use(express.static('public'));
app.use(bodyparser.json());

app.get('/listUsers', function(req, res){
    /*fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });*/
    res.send("Hello World!");
});

models.sequelize.sync().then(function (){
    var server = app.listen(8081, function(){
        var host = server.address().address;
        var port = server.address.port;

        console.log("Example app listening at http://%s:%s", host, port)
    })

});