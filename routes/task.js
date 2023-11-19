const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const fileData = fs.readFileSync('./storage.txt','utf-8');
const data = JSON.parse(fileData);
router.get('/',(req,res,next)=>{
    res.render('main.pug',{
        taskData:data
    });
});
router.post('/',(req,res,next)=>{
    const newTask = {id:data.length + 1,task:req.body.task,complete:false};
    data.push(newTask);
    fs.writeFileSync('./storage.txt',JSON.stringify(data));
    res.redirect('/');
});
module.exports = router