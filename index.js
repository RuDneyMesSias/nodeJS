const express = require('express'); //Importando o express
const app = express();

const PORT = 3000;
const HOST = '0.0.0.0';

app.set('view engine','ejs');


//Rota pontando para pasta views.
app.get("/",(req, res) =>{
    res.render("principal/perfil");
});


app.listen(3000, function(erro){
    if(erro){
        console.log("Ocorreu um erro! ${port}");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
});