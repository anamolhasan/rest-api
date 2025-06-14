const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routers/users.route");


const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/users', usersRouter)
// users 
// app.get('/users', (req, res) => {
//     res.status(200).json({users})
// })

// Home '/'
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html')
})

// route not fount 
app.use((req, res, next)=>{
    res.status(404).json({message:'route not fount'})
})

// server error
app.use((err, req, res, next)=>{
    res.status(404).json({message:'something broke'})
})


module.exports = app