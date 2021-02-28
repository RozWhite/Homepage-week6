let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//create a reference to the model
let Book=require('../models/book');

module.exports.displayBookList=(req, res, next) =>{
    Book.find((err, bookList) => {
      if(err){
          return console.error(err);
      }
      else
      {
  
          //console.log(ContactList);
          res.render('book/list',{title:'Business Contact Lists', BookList: bookList});
      }
      
    });
}

module.exports.displayAddPage=(req, res, next) =>{
    res.render('book/add',{title:'Add Contact'})
  
  }

module.exports.processAddPage= (req,res,next) =>{
    let newBook= Book({
      "name": req.body.name,
      "number": req.body.number,
      "email": req.body.email
      
    });
  
    Book.create(newBook, (err, Book)=>{
      if(err)
      {
        console.log(err);
        res.end(err);
      }
        
      else
      {
        //refresh the contact list
        res.redirect('/book-list');
      }
    });
  }

module.exports.displayEditPage= (req,res,next) =>{
    let id=req.params.id;
  
    Book.findById(id,(err, bookToEdit)=>{
      if(err)
      {
        console.log(err);
        res.end(err);
      }
        
      else
      {
        //Show the edit view
        res.render('book/edit', {title: 'Update Contact List', book:bookToEdit});
      }
    });
  }
module.exports.processEditPage= (req,res,next) =>{
    let id=req.params.id;
    let updatedBook=Book({
      "_id":id,
      "name": req.body.name,
      "number": req.body.number,
      "email": req.body.email
      
    });
    Book.updateOne({_id:id}, updatedBook, (err)=>{
      if(err)
      {
        console.log(err);
        res.end(err);
      }
        
      else
      {
        //refresh the contactlist
        res.redirect('/book-list');
      }
  
    });
  }

module.exports.performDelete= (req,res,next) =>{
    let id=req.params.id;
    Book.remove({ _id:id},(err)=>{
      if(err)
      {
        console.log(err);
        res.end(err);
      }
     
        else
      {
        res.redirect('/book-list');
      }
     });
    }