require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./router/router')
require('./db/connection')

const psServer = express()

psServer.use(cors())
psServer.use(express.json())
psServer.use(router)

const PORT = 3000 || process.env.PORT

psServer.listen(PORT,()=>{
    console.log(`POSify server started at PORT : ${PORT}`);
})

psServer.get('/',(req,res)=>{
    res.status(200).send('<h1>Server Running</h1>')
})