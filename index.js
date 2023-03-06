<<<<<<< HEAD
const express = require('express');
const members = require('./member');
const getUsers = require('./users');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('This is the home page');
});
app.get('/about', (req, res) => {
    res.json({
        status: 'success',
        message: 'response success',
        description: 'Exercise #04',
        date: `${new Date().toISOString()}`,
        data: members
    })
});
app.get('/users', async (req, res) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(await getUsers()));
  });
// app.get("/post/:id", (req, res) => {
//     let id = req.params.id;
//     res.json({
//         id,
//     });
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})
=======
const http = require ('http');
const members = require('./member');
const fs = require("fs");
const getUsers = require('./users');

const server = http.createServer( async (req, res)=> {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("This is the home page");
    }
    
    else if (req.url === '/about') {
        const date = new Date().toISOString();
        const data = {
            status: 'success',
            Message : 'response success',
            Description: 'Exercise #03',
            Date : date,
            Data : members
        };
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(data));
    }

    else if (req.url === '/users'){
        const user = await getUsers();
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(user));
    }

    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }
});

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
>>>>>>> fd6b395a78063f20e83873e78070901bad610213
