const user = require ("./user");


class userservice {
    constructor () {
        this.users = []; // array para armazenar user 
        this.nextid = 1; // contador para gerar id
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