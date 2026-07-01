const express = require("express")
const fs = require('fs');



const app = express()


app.get('/',(req,res)=>{
    res.end("Home Page")
})

app.get("/product",(req,res)=>{
    fs.readFile('./db.json',"utf-8",(err,data)=>{
        if(err)
        {
            console.log("File Not Fonpund")
        }
        else
        {
            
            const productData = JSON.parse(data)
            console.log(productData.Products)
            
            
        }
    })
})

app.listen(8585,()=>{
    console.log("Server is Running on Port 8585");

})