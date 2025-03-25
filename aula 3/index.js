
const express = require ('express');
const userService = require ('./userService');


const app = express (); // nome qualquer para express
app.use (express.json()); //habilitar json no express

//rota parar criar users 

app.post ("/users", (req,res) => {
    const {nome,email} = req.body;
    if (!nome || !email) {
        return res.status(400).json ({error:"nome e email são obrigatórios!"})
    }

    const user = userService.adduser(nome, email);

    res.status (200).json({user});

})

//rota para listar todos os usuarios 

app.get ("/users", (req,res)=> {
    res.json (userService.getusers());
});

const port = 3000;
app.listen (port,(res, req)=> {
    console.log ("servidor rodando na porta:", port);
})
const express = require ('express');
const userservice = require ('./userService');


const app = express (); // nome qualquer para express
app.use (express.json); //habilitar json no express

//rota parar criar users 

app.post ("/users", (req,res) => {
    const {nome,email} = req.body;
    if (!nome || !email) {
        return res.status(400).json ({error:"nome e email são obrigatórios!"})
    }

    const user = await   userservise.adduser (nome, email);

    res.status (200).json({user});

})

//rota para listar todos os usuarios 

app.get ("/users", (req,res)=> {
    res.json (userservice.getusers ());
});

const port = 3000;
app.listen (port,()=> {
    console.log ("servidor rodando na porta:", port);

}) 