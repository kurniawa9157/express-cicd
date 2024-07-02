const express = require('express');

const app = express();
const port = 3005;

app.get('/',(req,res)=>{
    res.send('hello index')
})

app.get('/wawan',(req,res)=>{
    res.send('Hello wawan xx')
})

app.listen(port, ()=>{
    console.log('app running on port '+port)
})

module.exports = app;