var express = require('express');
var router = express.Router();

var rand1 = Math.random() * 100;
var rand2 = Math.random() * 200;

var number1 = 0;
var number2 = 0;
var number3 = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
    number1 = Math.cosh(rand1);
    number2 = Math.cosh(rand2);
    number3 = Math.cosh(rand1);

    res.send(`The Random Number are ${rand1} and ${rand2} <br><br> cosh applied is ${rand1} is ${number1} <br><br> cosh applied is ${rand2} is ${number2} <br><br> cosh applied is ${rand1} is ${number3}`);
  
});

module.exports = router;