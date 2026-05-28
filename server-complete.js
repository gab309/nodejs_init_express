const express =require('express');

const app = express();

const PORT = 3000;

//Middelware de acesso
app.use(express.json());

//Middelware de log
function logger(req, res, next){
    console.log(req.method, req.url);
    next();

};

function verificarAcesso(req, res, next){
    const senha = req.query.body;
    if(senha=== "1234"){
        next(); //Permite o acesso à rota

    }
    else{
        res.statusCode (403).json({
            mensagem: "Acesso negado, senha incorreta."
        });
    };
};




//Array de produtos.
app.use(logger);
 let produtos = [
    {id:1, nome: "Notebook", preco :7000},
    {id:2, nome: "Mouse", preco :80},

 ];

 //Rota inicial da "/"
 app.get("/",(req,res) => {
    res.send("Servidor express funcionando!");
 });
//Rota para acessar os produtos.
  app.get("/produtos",(req,res) => {
    res.json({
         produtos: produtos

    });
 });

 //Buscar produto por id 
 app.get("/produtos/:id", (req,res) => {
    //A conts is irá armazenar o id informado nos query parametters da url da requisição como /produtos /1 (sendo o produto cujo id é 1).
    const id = req.params.id;
    //Assim que o produto for localizado, retprna mensagem e o produto
    res.json({
       mensagem: "produto encontrado",
       //Produtos = array de produtos 
       //[] = com os colchetes, passo passar a posição do produto dentro do  array.
       //Caso o id do produto seja 1, a posição dele no array é o (zero) .
       //Então precisamos passar como [id-1].
       produto: produtos[id-1]
    });
 });
 //Cadastro de novo produto 
 app.post ("/produtos",(req,res) => {
    const novoProduto = req.body;
    produtos.push(novoProduto);
    res.json({
    mensagem: "Produto cadastrado com sucesso",
    produto: novoProduto
    });
 });

 app.put("/produtos", (req,res) => {
    const dadosAtualizados = req.body;
    produtos = produtos.map(produto => {
        if(produto.id === dadosAtualizados.id){
            return{
                ...produto,
                preco: dadosAtualizados.preco 

            };
        }
        return produto;
    });
    res.json({
        produto:produtos
    });
 });

 app.delete("/produtos/:id",(req,res) => {
    const id = req.params.id;
    res.json({
mensagem: "Produto deletado com sucesso",
    });


 });











