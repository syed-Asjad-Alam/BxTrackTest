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

//Get Routes
router.route('/getBook/:id').get(
  BookController.getbook
)

router.route('/getAllBooks').get(
  BookController.getallbooks
)

//Update Routes
router.route('/updateBook/:id').put(
  BookController.updatebook
)

//Delete Routes
router.route('/deleteBook/:id').delete(
  BookController.deletebook
)

module.exports = router;
