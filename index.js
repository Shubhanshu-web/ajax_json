var express = require('express');
var router = express.Router();
var userModel = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/userform', function(req,res){
  userModel.create({
    name: req.body.name,
    username: req.body.username,
  }).then(function(createdUser){
    res.send(createdUser);
  })
});

router.get('/username/:usernamedets', function(req,res){
  userModel.findOne({username: req.params.usernamedets})
    .then(function(foundUser){
      res.json(foundUser);
    })
});

module.exports = router;
