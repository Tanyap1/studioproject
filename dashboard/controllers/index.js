var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dashboard' });
});


/* GET home page. */
router.get('/about', (req, res)=>{
  //load the about.hbs
  res.render('about', { title: 'About' });
});

/* GET contact page. */
router.get('/contact', (req, res)=>{
  //load the contact.hbs
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
