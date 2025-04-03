const http = require('http');
const fs = require('fs').promises;
const PORT = 3001;
const server = http.createServer(async(req, res) =>{

    if(req.url == "/" && req.method == "GET"){
        res.setHeader('Content-type','text/html');
        res.end('<h2 styel=color=cyan>Welcome to Abes Engineering College</h2>');
    }

    else if(req.url == "/student" && req.method == "GET"){
        // res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Type', 'text/html');
        const data = await fs.readFile('student.json', {encoding:'utf-8'});
        const htmlData = await fs.readFile('Home.html', {encoding:'utf-8'});
        console.log(data);
        const htmlTemplate = `<h2 style=color=cyan>${htmlData}</h2>`;
        res.end(htmlData);
    }
    else{
        res.setHeader('Content-type', 'text.html');
        const htmlError = await fs.readFile('Error.html',{encoding:'utf-8'});
        res.end(htmlError);
    }
})

server.listen(PORT, ()=>{
    console.log("Server is Running on " + PORT);
})