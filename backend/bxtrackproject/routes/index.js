var express = require('express');
var router = express.Router();

const BookController = require('../controllers/BookController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//POST Routes
router.route('/createBook').post(
  BookController.createbook
  
)

module.exports = router;
