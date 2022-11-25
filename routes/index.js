var express = require('express');
var router = express.Router();
const rifaRouter = require("./rifa")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json();
});

router.use("/rifa",rifaRouter)

module.exports = router;
