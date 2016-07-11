/**
 * Created by chapeau on 7/10/16.
 */
var express = require('express');
var router = express.Router();

router.route("/todo")
.get(function(req, res){
    res.send("Todo!");
});

module.exports = router;