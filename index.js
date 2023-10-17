const express = require('express'); //Importando o express
const app = express();

const PORT = 3000;
const HOST = '0.0.0.0';

app.set('view engine','ejs');
app.use(express.static('public'));

//Rota pontando para pasta views.

app.get("/",(req,res) => {
    res.render("index");
});

app.get("/perguntar",(req,res) => {
    res.render("perguntar");
});

app.listen(3000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
});