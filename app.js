const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send('<h1 style="font-size: 40px">Hello server</h1>')
})
app.listen(3000,()=>{
    console.log('server start')
})
