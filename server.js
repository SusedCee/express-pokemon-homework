const express = require('express');
// const bodyParser = require("body-parser")


// require the express module from the node_modules folder
// node automatically will look in node_modules for us
const app = express();
// express() returns an object which has properties
// and methods of creating a server!!!!
// localhost:3000
// some data 
const pokemon = require('./models/pokemon') //defined the uppercase pokemon

// app.get('/pokemon', (req, res) => { //getting url from client and sending back the pokemon array
// 	res.send(pokemon)
// 	console.log('hey this works')
// })

app.get('/pokemon', (req, res) => { //getting url from client and sending back the pokemon array
	res.render("./index.ejs", {pokemon: pokemon})
})


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