const express = require("express")
const mongoose = require('mongoose')

const app = express()

const PORT = process.env.PORT || 8081
//Database configutation's
const DATABASE_PORT = 27017
const DATABASE_HOST= 'localhost'
const DATABASE_URL = `mongodb://${DATABASE_HOST}:${DATABASE_PORT}`

const connectDatabase =async ()=>{
    mongoose.connect(DATABASE_URL)
}
connectDatabase()

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
