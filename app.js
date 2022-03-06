const express = require("express")

const app = express()


app.get('/',function(req,res){
    res.sendFile('index.html', { root: __dirname });
});

app.get("/:jornal&:dej1&:dej2&:dej3&:dej4", function(req,res){
    res.send(req.params)
})

app.listen(8080, function(){
    console.log("Server has started")
})