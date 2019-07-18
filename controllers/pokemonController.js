const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const router = express.Router();
//const Fruits = require('../models/fruit')


const app = express();
const pokemon = require('../models/pokemon')
router.use(bodyParser.urlencoded({extended: false}));
router.use(methodOverride('_method'));
//router.use(express.static('./public'));




router.get('/', (req, res) => { //getting url from client and sending back the pokemon array
	res.render("./index.ejs", {pokemon: pokemon})
})

// client sees a form to enter a new pokemon then a new image shows up
router.get('/new', (req, res) => {
	res.render('new.ejs')
});


// app.post just listens for post requests from the client
router.post('/', (req, res) => {
  // contents of the form
  console.log(req.body, "<--- content of the form, before if statement")
  if(req.body.name !== ""){
  } else {
    req.body.name = 'no name'
  }
  console.log(req.body, ' after if statement')
  pokemon.push(req.body);
  res.redirect('/')

});

//if client clicks on a pokemon link thay can see the name and image of the specific pokemon
router.get('/:id', (req, res) => {
  console.log(req.params, "<--req.params"); 
  // console.log('pokemon/:id')
  res.render("./edit.ejs", {
    pokemon: pokemon[req.params.id]
  });
});

//edit route
router.get('/:index/edit', (req, res) => {
	res.render('edit.ejs', {
		pokemon: pokemon[req.params.index], 
		index: req.params.index
	})
});

//adds the new edits to the list
router.put('/:index', (req, res) => {
  console.log(req.body, ' in put route')
  if(req.body.name !== ""){
  } else {
    req.body.name = "no name"
  }
  console.log(req.body, ' after if statement')
  pokemon[req.params.index] = req.body;
  res.redirect('/')
});


//deleting the pokemon
router.delete("/:index", (req, res) => {
	pokemon.splice(req.params.index, 1); //deleting the pokemon with splice from the array
	res.redirect("/"); //redirect to index route
});

module.exports = router