const express= require('express');
const authorsRouter = express.Router();

function router(nav){
  var authors = [
    { 
      name:'Yuval Noah Harari',
      place:'Kiryat Ata, Israel',
      dob:'24 February 1976',
      img:'yuval.jpg'
    },
    { 
      name:'Robin Sharma',
      place:'Port Hawkesbury, Canada',
      dob:'16 June 1964',
      img:'robin.jpg'
    },
    { 
      name:'Mark Manson',
      place:'Texas, United States',
      dob:'9 March 1984',
      img:'mark.jpg'
    },
    { 
      name:'Paulo Coelho',
      place:'Rio de Janeiro, Brazil',
      dob:'24 August 1947',
      img:'paulo.jpg'
    },
    
  ];
  
  authorsRouter.get('/',function(req,res){
    res.render('authors',
    {
      nav,
      title:'Authors',
      authors
    });
  });
  
  authorsRouter.get('/:id',function(req,res){
    const id=req.params.id;
    res.render('author',
    {
      nav,
      title:'Author',
      author:authors[id]
    });
  });
  
  return authorsRouter;
}

module.exports = router;