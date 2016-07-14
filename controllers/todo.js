/**
 * Created by chapeau on 7/10/16.
 */
var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var Models = require('../models');

router.use(bodyparser.json());

router.route("/todo")
    .get(function(req, res){
        var tasks = [];
        Models.Tasks.findAll().then(function(payload){
            res.json(payload);
        });
    })
    .post(function(req, res){
        var tocreate = req.body;
        console.log(tocreate);
         Models.Tasks.create(tocreate).then(function(payload){
             console.log("Success");
         });
        res.send("Stuff");
    });

module.exports = router;