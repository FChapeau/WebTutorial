/**
 * Created by chapeau on 7/10/16.
 */
var express = require('express')
    , router = express.Router();

router.use('/todo', require("./todoController"));

module.exports = router;