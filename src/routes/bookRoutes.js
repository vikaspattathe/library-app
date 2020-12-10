const express= require('express');
const booksRouter = express.Router();

function router(nav){
  var books = [
    {title:'Sapiens : A Brief History of Humankind',
    author:'Yuval Noah Harari',
    genre:'Non-Fiction',
    img:'sapiens.jpg'
    },
    {title:'The Monk Who Sold His Ferrari',
    author:'Robin Sharma',
    genre:'Fiction',
    img:'monk.jpg'
    },
    {title:'The Subtle Art of Not Giving a F*ck',
    author:'Mark Manson',
    genre:'Self-help',
    img:'subtle.jpg'
    },
    {title:'The Alchemist',
    author:'Paulo Coelho',
    genre:'Adventure fiction',
    img:'alchemist.png'
    }
  ];
  
  booksRouter.get('/',function(req,res){
    res.render('books',
    {
      nav,
      title:'Books',
      books
    });
  });
  
  booksRouter.get('/:id',function(req,res){
    const id=req.params.id;
    res.render('book',
    {
      nav,
      title:'Book',
      book:books[id]
    });
  });
  
  return booksRouter;
}

module.exports = router;