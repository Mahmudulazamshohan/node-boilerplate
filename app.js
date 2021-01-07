const express = require("express")
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8081
const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const User  =  mongoose.model('user',userSchema)
app.get('/',(req,res)=>{
    User.find({})
    .then((data)=>{
        res.json(data)
    }).catch(err=>{
        res.sendStatus(504)
    })
    
})
app.get('/create',(req,res)=>{
    User.create({
        name:"TestJet "+Math.floor(Math.random() * 1000),
        email:"testjet"+Math.floor(Math.random() * 1000)+"@gmail.com",
        password:"123456"
    }).then((data)=>{
        res.json(data)
    }).catch(err=>{
        res.sendStatus(504)
    })
})
app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`)
})
