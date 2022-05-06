//Initialising
const express = require('express')
const app = express()
const cors = require('cors')
const { mongoose } = require('mongoose')
const User = require('./models/user.model')

//Middleware(a function) just manipulates the response and usually passes it to the next function
app.use(cors()) // use the cors middleware to overcome the cors security error
app.use(express.json()) // Pass anything that comes as body into JSON

mongoose.connect('mongodb://localhost:27017/mern-test-app')

app.get("/", (req, res) => res.send("Response from the GET request"));

// Now we can specify some routes
// Call it as a function
app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
            await User.create({
            name: req.body.name,
            emal: req.body.email,
            password: req.body.password,
        })
        res.json({ status: 'Ok' })
    } catch (err) {
        console.log(err)
        res.json({ status: 'error', error: "Duplicate email" })
    }
})

// Login route
app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    })

    if (user) {
        return res.json({ status: 'ok', user: true })
    } else {
        return res.json({ status: 'error', user: false })
    }
})

// Starting a server
app.listen(1337, () => {
    console.log('Server starting on 1337')
})