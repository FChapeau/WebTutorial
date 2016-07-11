/**
 * Created by chapeau on 7/10/16.
 */
var express = require('express')
    , router = express.Router();

/*
router.route("/todo")
.get(function(req, res){
    console.log("Test");
});
*/

router.get("/todo", function(req, res){
   console.log("Test");
});

module.exports = router;