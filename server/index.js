const express = require("express")
const mongoos = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")

const app = express()
app.use(express.json())
app.use(cors)
app.use(cookieParser)

// run the app
app.listen(3001, () => {
    console.log("Server is Running...!")
})