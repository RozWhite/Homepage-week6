let express = require('express');
let router = express.Router();
let indexController=require('../controllers/index');


/* Get Rozita home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
}); */
router.get('/', indexController.displayHomePage);

/* Get Rozita home page. 
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
}); */
router.get('/home', indexController.displayHomePage);

/* GET About Me . 
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me'});
  
});*/
router.get('/about', indexController.displayAboutPage);

/* GET Projects page .
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
}); */
router.get('/projects', indexController.displayProjectPage);

/* GET Services page . 
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});*/
router.get('/services', indexController.displayServicePage);

/* GET Contact Me . 
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me'});
});*/

router.get('/contact', indexController.displayContactPage);

/*Get Route for displaying the Login Page*/
router.get('/login',indexController.displayLoginPage);

/*Post Route for processing  Login Page*/
router.post('/login',indexController.processLoginPage);

/*Get Route for displaying the Register Page*/
router.get('/register',indexController.displayRegisterPage);

/*Post Route for processing  RegisterPage*/
router.post('/register',indexController.processRegisterPage);

/*Get to perform UserLogOut*/
router.get('/logout',indexController.performLogout);

module.exports = router;
