//Impportando o express da outra pasta para o arquivo server.js.
//Não esquecer de baixar o npm install express para usar o express no projeto.

const express = require("express");


//Criando a aplicação Express assim teremos acesso aos recursos do framework.

const app = express();
const port = 3000;

//Porta criada onde o servidor será executado.

app.use(express.json());

//Criando um endpoint
app.get("/", (req, res) =>{
    //Envia um resposta simples para o servidor.
res.send("Servidor Express funcionando!");
});

//Parâmetros de rota 
app.get("/produtos",(req, res) =>{
    res.json([
        {id:1, nome: "notebook", preco:7000},
        {id:2, nome: "Mouse", preco: 80}
    ]);
});
app.get("/produtos/:id",(req,res) =>{
 const id = req.params.id;
 //Resposta
 res.json({
    mensagem: "pruduto encontrado",
    id:id 
 });
});

 app.get("/usuarios",(req, res) =>{
    res.json([
        {id:1, nome: "Ana"},
        {id:2, nome:"Gabrielly"}
    ]);
 });
//Pots + rota do pruduto.
 app.post("/prudutos",(req, res) =>{
    const novoProduto = req.body;
    res.json({
        mensagem:"Pruduto cadastrado com sucesso",
        produto: novoProduto
    });
 });
 //Put + rota do pruduto.
 app.put("/produtos",(req, res) =>{
    const produtoAtualizado = req.body;
    res.json({
        mensagem: "Produto atualizado",
        dados: produtoAtualizado
    });
 });
  //Delete + rota do pruduto.
  app.delete("/produtos/:id",(req, res) =>{
    const id = req.params.id;
    res.json({
        mensagem: "Produto removido com sucesso",
        id: id
    });
});




app.listen(port,() =>{
  console.log(`Servidor rodando em http://localhost:${port}`);
});







