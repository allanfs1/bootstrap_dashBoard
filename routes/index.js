var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  require("../db").findCuston(function(docs){
  res.render('index', { title: 'Express',model:docs });
  });
 
});



/* GET home page. */
router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Controle'});
});


/* POST user page. */
router.post('/new',function(req,res,next){
  var cm = req.body.cm;
  var bit = req.body.bit;
  var motor = req.body.motor;
  require("../db.js").saveCustomer(cm,bit,motor,function(){res.redirect("/"); })

});



module.exports = router;
