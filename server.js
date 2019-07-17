const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


// require the express module from the node_modules folder
// node automatically will look in node_modules for us
const app = express();
// express() returns an object which has properties
// and methods of creating a server!!!!
// localhost:3000
// some data 
const pokemon = require('./models/pokemon') //defined the uppercase pokemon

// before our routes, we can setup middleware --- adding parser so we can use POST
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use(express.static('./public'));

// app.get('/pokemon', (req, res) => { //getting url from client and sending back the pokemon array
// 	res.send(pokemon)
// 	console.log('hey this works')
// })

app.get('/pokemon', (req, res) => { //getting url from client and sending back the pokemon array
	res.render("./index.ejs", {pokemon: pokemon})
})

// client sees a form to enter a new pokemon then a new image shows up
app.get('/pokemon/new', (req, res) => {
	res.render('new.ejs')
});


// app.post just listens for post requests from the client
app.post('/pokemon', (req, res) => {
  // contents of the form
  console.log(req.body, "<--- content of the form, before if statement")
  if(req.body.name !== ""){
    //req.body.name = true; // correct the data to look like what it
    // should in the model
  } else {
    req.body.name = 'noname'
  }
  console.log(req.body, ' after if statement')
  pokemon.push(req.body);
  res.redirect('/pokemon')

});

//if client clicks on a pokemon link thay can see the name and image of the specific pokemon
app.get('/pokemon/:id', (req, res) => {
  console.log(req.params, "<--req.params"); 
  console.log('pokemon/:id')
  res.render("./show.ejs", {
    pokemon: pokemon[req.params.id]
  });
})






app.listen(3000, () => {
  console.log('my server is listening for client requests on port 3000')
});