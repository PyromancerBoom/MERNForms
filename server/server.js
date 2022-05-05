
//Initialising
const express = require('express')
const app = express()

/*
app.get('/', function(req, res){
    res.render('index.ejs');
});
*/

// Now we can specify some routes
// Call it as a function

app.get('/', (req,res) => {
    res.send('Hello World')
})

// Starting a server
app.listen(1337, () => {
    console.log('Server starting on 1337')
})