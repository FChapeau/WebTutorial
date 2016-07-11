/**
 * Created by chapeau on 7/10/16.
 */
var express = require('express');
var router = express.Router();

router.use(require("./todo"));

router.get('/', function(req, res){
    res.render('index.html')
})

module.exports = router;