const express = require('express');
const mysql = require('mysql2');
const connect = require('./conexao.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/usuario/Cadastro', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery("insert into usuario (email, senha) values('" + req.body.email + "','" + req.body.senha + "')", res);
})

app.get('/usuario/Listar', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from usuario', res);
})

app.get('/usuario/Login', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery("select * from usuario where email='" + req.params.email + "' and senha=" + req.params.senha, res);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))