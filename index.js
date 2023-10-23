const express = require('express'); //Importando o express
const app = express();
const bodyParser =require("body-parser"); //Traduzir dados do formulário para JavaScript
const connection = require("./database/database");

//Database
connection
    .authenticate()
        .then(() => {
            console.log("conexão feita com o banco de dados!")
        })
        .catch((msgErro) => {
            console.log(msgErro);
        })

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