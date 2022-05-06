//Initialising
const express = require('express')
const app = express()
const cors = require('cors')
const { default: mongoose } = require('mongoose')

//Middleware(a function) just manipulates the response and usually passes it to the next function
app.use(cors()) // use the cors middleware to overcome the cors security error
app.use(express.json()) // Pass anything that comes as body into JSON

mongoose.connect('mongodb://localhost:27017/mern-test-app')

app.get("/",(req,res) => res.send("Response from the GET request"));

// Now we can specify some routes
// Call it as a function
app.post('/api/register', (req,res) => {
    console.log(req.body)
    res.json({status : 'Ok'})
})

// Starting a server
app.listen(1337, () => {
    console.log('Server starting on 1337')
})