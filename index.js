const express =require('express');
const bodyParser =require('body-parser');
const path=require('path');
const app=express();
const port=8080;
const urlencodedParser=express.urlencoded({extended:false});
app.use(express.static('./'));
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
});


app.post('/calculate',urlencodedParser,(req,res)=>{
    let result=0;
    const num1=req.body.num1;
    const num2=req.body.num2;
    const operator=req.body.operator;
    if(operator==='*'){
        result=num1*num2;
    }else if(operator==='/'){
        result=num1/num2;
    }else if(operator==='+'){
        result=num1+num2;
    }else if(operator==='-'){
        result=num1-num2;
    }
    res.send(`<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="style.css" rel="stylesheet">
            <title>SimpleCalculator</title>
        </head>
        <body>
            <h1> Simple Calculator</h1>
            <div class="yr">
            <fieldset>
            <h1>Answer</h1>
            <h2>${result}<h2>
            </fieldset>
            </div>
            </body>
            </html>`);
});
app.listen(port,()=>{
    console.log(`list on the port ${port}`)
});