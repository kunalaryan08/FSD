const http = require('http');
const PORT = 5000;
const server = http.createServer((req, res)=>{

    if(req.url == "/msg" && req.method == "GET"){
        res.end(JSON.stringify)
    }


    
    if(req.url == "/msg" && req.method == "GET"){
        res.setHeader('Content-Type', 'text/html');
        res.write("<h2>Welcome to Abes Engineering College</h2>");
    }

    if(req.url == "/" && req.method == "GET"){
        res.setHeader('Content-type', 'text/html');
        res.end("<h1 style=color:cyan>Welcome to Abes Engineering College</h2>");
    }

    // console.log(Object,keys(req));
    // console.log("Request URL = " + req.url + "Request Method: " + req.method);
    // res.end("End of Program");
})

server.listen(PORT, () => {
    // console.log("hello")
    console.log(`Server is running on the Port https://localhost:${PORT}/`);
})