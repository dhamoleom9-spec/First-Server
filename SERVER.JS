const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send('this is an home page of server...')
})
app.get('/about', (req,res)=>{
    res.send('this is my first servet...😘😊')
})

app.listen(3000, ()=>{
    console.log('server running at porn number 3000');
    
})