const express = require('express'); //Importando o express
const app = express();
const bodyParser =require("body-parser"); //Traduzir dados do formulário para JavaScript

const PORT = 3000;
const HOST = '0.0.0.0';

// Estou dizendo para o Express usar o EJS como View engine
app.set('view engine','ejs');
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rota pontando para pasta views.

app.get("/",(req,res) => {
    res.render("index");
});

app.get("/perguntar",(req,res)=> {
    res.render("perguntar");
});

app.post("/salvarpergunta",(req,res)=> {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulário recebido! titulo " + titulo + " " + " descricao " + descricao);
});

app.listen(3000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
});