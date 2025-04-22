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

    async getUser(id) { //função p buscar usuarios
        try {
            const resultado = await mysql.execute(
                'SELECT idusuario FROM usuarios WHERE id = ?',
                [id]
            );
            return resultado;
        } catch (erro) {
            console.log("Erro ao buscar usuario", erro);
        }
    }

    async deleteUser(id) {
        try {
        const user = await this.getUser(id);
        if (user.length == 0) {
            console.log ('usuario não existe!');
            return;
        }
        const resultado = await mysql.execute(
            'DELETE FROM usuarios WHERE idusuarios = ?',
            [id]
        );
        return resultado;

        } catch (erro) {
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