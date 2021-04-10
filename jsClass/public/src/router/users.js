const express = require('express'),
    router = express.Router()
router.get('/user',(req,res)=>{
    res.send('Content')
})

router.get('/create',(req,res)=>{
    res.send('Content')
})

router.get('/update',(req,res)=>{
    res.send('Content')
})

router.get('/delete',(req,res)=>{
    res.send('Content')
})


module.exports=router