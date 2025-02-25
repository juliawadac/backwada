const User = require("./user");
const path = require('path');
const fs = require('fs');


class userService {
    constructor() {
        this.filepath = path.join(__dirname, 'user.json');
        this.users = this.loadusers(); // array para armazenar user 
        this.nextid = this.getnextid(); // contador para gerar id
    }

    loadusers() {
        try {
            if (fs.existsSync(this.filepath)) { // verifica se o arquivo existe
                const data = fs.readFileSync(this.filepath); // le o arquivo
                return JSON.parse(data); //transforma json em objeto - array
            }
        } catch (erro) {
            console.log('erro ao carregar arquivo', erro);
        }
        return []; //retorna um array vazio     
    }


    //definir o proximo id a ser utilizado

    getnextid() {
        try {
            if (this.users.length === 0) return 1;
            return Math.max(...this.users.map(user => user.id)) + 1;
        }
        catch (erro) {
            console.log('erro ao buscar proximo id', erro);
        }
    }

    saveusers() {
        try {
            fs.writeFileSync(this.filepath, JSON.stringify(this.users));
        } catch (erro) {
            console.log('erro ao salvar arquivo', erro);
        }
    }


    adduser(nome, email) {
        try {
            const user = new User(this.nextid++, nome, email);
            this.users.push(user);
            this.saveusers();
            return user;
        } catch (erro) {
            console.log("erro adicionar usuario", erro);
        }
    }

    getusers() {
        try {
            return this.users
        } catch (erro) {
            console.log("erro ao buscar usuarios", erro);
        }
    }
}
module.exports = new userService;
