const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end('Welcome to Our Website');
    }
    else if(req.url === '/about') {
        res.end('Welcom To About Page');
    }
    else {
        res.end(`
        <h1>Opps!</h1>
        <p>Something went wrong</>
        <a href='/'>Go Back Home</a>`);
    }

})

server.listen(5000);