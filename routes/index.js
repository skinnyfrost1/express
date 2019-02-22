var express = require('express');
var router = express.Router();
var name;
var today;

/* GET home page. */
router.get('/', function(req, res, next) {
  if (name == null)
    res.render('index', { title: 'Tic Tac Toe' });
  else
    res.render('index2', { title: 'Tic Tac Toe', date: today, player: name});
});

router.post('/', function(req, res, next) {
  name= req.body.player
  today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  today = mm + '/' + dd + '/' + yyyy;
  res.redirect('/ttt');
});


router.get('/play', function(req, res, next) {
  res.render('ttt', { title: 'Tic Tac Toe', player: name});
});





// router.post('/play/submit', function(req, res, next){
//   var player= req.params.player;
//   res.redirect('/ttt');
//   }



module.exports = router;
