let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport=require('passport');

// connect to our Book Model
//let Book= require('../models/book');
let bookController=require('../controllers/book');

//helper function for quard purpose
function requireAuth(req, res, next)
{
    //check if the user logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();

}

// Get Route for the Book list Page --Read Operatin
router.get('/', bookController.displayBookList);
   
/*Get Route for displaying the Add Page  --Create Operatin*/
router.get('/add',requireAuth, bookController.displayAddPage);

/*Post Route for processing the Add Page  --Create Operatin*/
router.post('/add', requireAuth,bookController.processAddPage);
  
/*Get Route for displaying the Edit Page  --Update Operatin*/
router.get('/edit/:id', bookController.displayEditPage);

/*Post Route for processing  the Edit Page  --Update  Operatin*/
router.post('/edit/:id', bookController.processEditPage);



/*Get to perform Deletion --DELETE Operatin*/
router.get('/delete/:id', bookController.performDelete);



module.exports = router;