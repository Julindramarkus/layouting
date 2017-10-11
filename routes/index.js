var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Test' });
});

router.get('/first', function(req, res, next){
  res.render('login', {title: 'First'});
});

router.post('/first', function(req, res, next){
  res.redirect('/login', {title: 'First'});
});

router.get('/second', function(req, res, next){
  res.render('regulation', {title: 'Second'});
});

router.post('/second', function(req, res, next){
  res.redirect('/regulation', {title: 'Second'});
});

router.get('/third', function(req, res, next){
  res.render('help', {title: 'Third'});
});

router.post('/third', function(req, res, next){
  res.render('help', {title: 'Third'});
});

router.get('/fourth', function(req, res, next){
  res.render('about', {title: 'Third'});
});

router.post('/fourth', function(req, res, next){
  res.render('about', {title: 'Third'});
});

router.get('/fifth', function(req, res, next){
  res.render('peta', {title: 'Third'});
});

router.post('/fifth', function(req, res, next){
  res.render('peta', {title: 'Third'});
});
module.exports = router;
