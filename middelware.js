//Importando a biblioteca do express
const express = require ('express');
//Criando aplicaçaõ do express
const app = express();
//Definição da porta para o servidor
const PORT = 3000;

//Middelware ativo do express para aplicação interprete recebidas em JSON
app.use(express.json());

//Criando a(para a nossa aplicação ), uma requisição do tipoGET, com a rota "/produtos"e programando para que, a resposta dessa requisição, seja :res.json...
app.get("/produtos", (req, res) => {
    res.json({
        mensagem: "middelware utilizando"
    });
});+

//Middelware logger.
//Ele interpretar a requisição e resposta, depois realizar a ação.
function logger (req , res, next){
    //Req.method: método da requisição (GET, POST, etc.)
    //Req.url: URL da requisição(Rota da requisição.).
    console.log(req.method, req.url);
    next();

}
//Aplicando o middelware "logger" em todas as rotas da aplicação.

app.use(logger);
//Porta definida para o servidor'
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});
















