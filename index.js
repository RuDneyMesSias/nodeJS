const express = require('express'); //Importando o express
const app = express();

const PORT = 3000;
const HOST = '0.0.0.0';

//Rotas

app.get('/',(req, res) =>{
    res.send('HEllo WOrd THIAGUINHO gay!!!!');
});

app.listen(3000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
});