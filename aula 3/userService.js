const User = require("./user");
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { error } = require("console");
const mysql = require("./mysql");


class userService {

    async addUser(nome, email, senha, endereco, cpf, telefone) {
        try {

            const senhaCripto = await bcrypt.hash(senha, 10);

            const resultados = await mysql.execute(
                `insert into usuarios (nome,email,endereco,cpf,senha,telefone)
                 values ( ?, ?, ?, ?, ?, ?)`,
                 [nome,email,endereco,cpf,senhaCripto,telefone]

            );

            return resultados;


        } catch (erro) {
            console.log("Erro ao add id", erro);
            throw erro;
        }
    }

    getUsers() {
        try {
            return this.users;
        } catch (erro) {
            console.log("Erro ao buscar usuario", erro);
        }
    }

    deleteUser(id) {
        try {
            this.users = this.users.filter(user => user.id !== id);
            this.saveUsers();

        } catch {
            console.log('erro ao deletar usuario', erro);
        }
    }

    async updateUser(idusuarios, newData) {
        try {
            const senhaCripto = await bcrypt.hash(senha, 10);

            const resultadosu = await mysql.execute(
                `update usuarios
                 set nome = ?, email ?, endereco ?, cpf ?, senha = ?, telefone = ?
                 where idusuarios = ?;`,
                 [nome,email,endereco,cpf,senhaCripto,telefone,idusuarios]
            );

            return resultadosu;
        } catch (erro) {
            console.log("Erro ao atualizar usuário:", erro);
            throw erro;
        }
    }


}

module.exports = new userService