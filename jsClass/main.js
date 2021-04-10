console.clear()
const express = require('express'),
    app = express(),
    port = 3060
const user = require('./public/src/router/users.js')
app.get('/', (req,res)=>{
    res.send('Welcome')
})
app.use(user)
app.listen(port,()=>{
    console.log('object');

})