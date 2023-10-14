const express = require('express'); //Importando o express
const app = express();

const PORT = 3000;
const HOST = '0.0.0.0';

app.set('view engine','ejs');

//Rota pontando para pasta views.

app.get("/:nome/:lang",(req,res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;


    var produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "Coca-cola", preco: 5},
        {nome: "leite", preco: 3.14},
        {nome: "Carne", preco: 15},
        {nome: "REdBull", preco: 10},
        {nome: "NEscal", preco: 6.50}
    ]


    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Guia do programador",
        inscritos: 5400,
        msg: exibirMsg,
        produtos: produtos
    });
});

app.listen(3000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
});