const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
require("dotenv").config();

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(morgan('tiny'))
app.disable('x-powered-by'); //less hackers know about our stack

const userRout = require('./router/user');
const TurfAdminRout = require('./router/turfAdmin')
app.use('/api',userRout)
app.use('/api/turfAdmin',TurfAdminRout)

const connect = require('./database/connect.js')

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("db connected")
    app.listen(process.env.PORT,()=>{
        console.log("listening")
    })
}).catch((err)=>{
    console.log(err)
})