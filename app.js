const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send('<h1 style="font-size: 40px">Hello server</h1>')
})
app.listen(22,'б89.208.196.0',()=>{
    console.log('server start')
})
