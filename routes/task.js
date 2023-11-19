const express = require('express');
const router = express.Router();
const moment = require('moment');
const fs = require('fs');
const fileData = fs.readFileSync('./storage.txt','utf-8');
const data = fileData.length !== 0 ? JSON.parse(fileData) : [];
router.get('/',(req,res,next)=>{
    res.render('main.pug',{
        taskData:data
    });
});
router.post('/',(req,res,next)=>{
    const date = moment(req.body.date).format('Do MMMM,YYYY');
    const newTask = {id:data.length + 1,task:req.body.task,date:date,complete:false};
    data.push(newTask);
    fs.writeFileSync('./storage.txt',JSON.stringify(data));
    res.redirect('/');
});
module.exports = router