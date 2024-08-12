
// server.js
const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

const options = {
  key: fs.readFileSync(path.join(__dirname, 'cert', 'server.key')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'server.crt')),
};

// Servir arquivos estáticos na pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota padrão para servir o index.html
app.get('/', (req, res) => {
    res.sendFile("index.html");
});

// Criar servidor HTTPS
https.createServer(options, app).listen(443, () => {
    console.log('Servidor HTTPS rodando na porta 443');
});






// const app = require('express')();
// const https = require('https');
// const fs = require('fs');

// const options = {
//   key: fs.readFileSync('/home/edson/Documentos/GitHub/POC-PWA/server.key'),
//   cert: fs.readFileSync('/home/edson/Documentos/GitHub/POC-PWA/server.crt'),
// }

// https.createServer(options, function (req, res) {
//   res.end("Seguro!");
// }).listen(443);
// Redirect from http port 80 to https
// const http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
//   res.end();
// }).listen(80);
