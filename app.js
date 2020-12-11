const express= require('express');
const app= express();
const port= process.env.PORT || 5000;

const nav = [
  { link:'/books',name:'Books'},
  { link:'/authors',name:'Authors'},
  { link:'/addbook',name:'Add Book'},
  { link:'/addauthor',name:'Add Author'},
  { link:'/login',name:'Login'},
  { link:'/signup',name:'Sign Up'}
];

const booksRouter= require('./src/routes/bookRoutes')(nav);
const authorsRouter= require('./src/routes/authorRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/books',booksRouter);
app.use('/authors',authorsRouter);


app.get('/',function(req,res){
  res.render('index',
  {
    nav,
    title:'Library'
  });
});

app.get('/login',function(req,res){
  res.render('login',
  {
    nav,
    title:'Login'
  });
});

app.get('/signup',function(req,res){
  res.render('signup',
  {
    nav,
    title:'Sign Up'
  });
});

app.get('/addbook',function(req,res){
  res.render('addbook',
  {
    nav,
    title:'Add Book'
  });
});

app.get('/addauthor',function(req,res){
  res.render('addauthor',
  {
    nav,
    title:'Add Author'
  });
});
app.listen(port,()=>{console.log("Running at port "+port);});
