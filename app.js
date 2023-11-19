const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mainRouter = require('./routes/task');
app.set('view enginer','pug');
app.use(bodyParser.urlencoded({extended:false}));
app.use((req,res,next)=>{
    console.log('This runs for all middleware');
    next();
});
app.use(mainRouter);
app.listen(8080);