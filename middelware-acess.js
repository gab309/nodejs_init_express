//Middelware de acesso
//Ele será utilizado para autenticar

 const express = require ('express');

    const app = express();

    const PORT = 3000;

    app.use(express.json());

//Criação do middelware de verificação de acesso.
    function verificarAcesso(req, res, next){
        const autorizado = false; //Simula~ção de acesso
           // true: acesso liberado 
           // false: acesso negado
           if(autorizado){
            next(); //Permite o acesso à rot
    }
    else{
        //Se não estiver autorizado, o acesso estará negado.
        res.status(403).json({mensagem: "Acesso negado"

        });
    }
    }

    //Incluindo o middelware para  a  requisição do tipo GET, para a rota "/admin".

    app.get("/admin", verificarAcesso, (req, res) => {
     res.json({
        mensagem:"Área administração acessada!"
     })
    });

    app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);

    });
    



    
