var express = require('express');
var router = express.Router();
var name;
var today;
var winner;
var grid=[' ',' ',' ',' ',' ',' ',' ',' ',' '];

/* GET home page. */
router.get('/', function(req, res, next) {
  if (name == null){
    grid=[' ',' ',' ',' ',' ',' ',' ',' ',' '];
    winner=' ';

    res.render('index', { title: 'Tic Tac Toe'});

  }
  else
    res.render('index2', { title: 'Tic Tac Toe', date: today, player: name});
  // res.render('index2', { title: 'Tic Tac Toe', jfile:jf,
    //   a0:grid[0],a1:grid[1],a2:grid[2],
    //   a3:grid[3],a4:grid[4],a5:grid[5],
    //   a6:grid[6],a7:grid[7],a8:grid[8]});
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
  today = yyyy + '-' + dd + '-' + mm;

  res.redirect('/ttt');
});




router.get('/play', function(req, res, next) {
  res.render('index2', { title: 'Tic Tac Toe', player: name});
});





// router.post('/play/submit', function(req, res, next){
//   var player= req.params.player;
//   res.redirect('/ttt');
//   }



module.exports = router;
