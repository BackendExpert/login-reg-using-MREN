const express = require("express")
const mongoos = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
// get usermodel
const UserModel = require("./Models/UserModel")


const app = express()
app.use(express.json())
app.use(cors)
app.use(cookieParser)

//make connection between database
mongoos.connect('mongodb://127.0.0.1:27017/employee')


//register
app.post('/register', (req, res) => {
    const {name, email, passord} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        UserModel.create({name, email, password: hash})
        .then(user => res.json({status: "OK"}))
        .catch(err => res.json(err))
    }).catch(err => res.json(err))
})


// run the app
app.listen(3001, () => {
    console.log("Server is Running...!")
})