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

const pokemonController = require("./controllers/pokemonController") //making fruitController equal to the functions that are in pokemonController.js

// before our routes, we can setup middleware --- adding parser so we can use POST
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use(express.static('./public'));

// app.get('/pokemon', (req, res) => { //getting url from client and sending back the pokemon array
// 	res.send(pokemon)
// 	console.log('hey this works')
// })

app.use("/pokemon", pokemonController);

app.listen(3000, () => {
  console.log('my server is listening for client requests on port 3000')
}); 
















