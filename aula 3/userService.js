const user = require ("./user");
const path = require ('path');
const fs = require ('fs');

class userservice {
    constructor () {
        this.filepath = path.join(_dirname, 'user.json');
        this.users = []; // array para armazenar user 
        this.nextid = 1; // contador para gerar id
    }

    loadusers () {
        try{
        if (fs.existsSync (this.filepath)) { // verifica se o arquivo existe
            const data =fs.readFileSync (this.filepath); // le o arquivo
            return json.parse (data); //transforma json em objeto - array
        }
    }catch (erro){
        console.log ('erro ao carregar arquivo', erro);
    }
        return []; //retorna um array vazio     
    }


    //definir o proximo id a ser utilizado

    getnextid (){
        try {
            if (this.users.length===0) return 1;
        return Math.max (...this.users.map(user => user.id))+1;
        }
        catch (erro) {
            console.log ('erro ao buscar proximo id', erro);
        }
    }

    adduser (nome,email) {
        const user = new user (this.nextid++, nome, email);
        this.users.push(user);
        return user;
    }

    getusers(){
        return this.users
    }
}

module.exports = new userservice;
