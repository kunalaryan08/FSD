const http = require('http');
const fs = require('fs').promises;

const PORT = 8000;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-method', 'GET,POST,DELETE,PUT,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method == "OPTIONS") {
        res.statusCode = 200;
        return res.end();
    }


    if (req.url === '/register' && req.method === 'POST') {
        let body = "";

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', async () => {
            try {
                const { name, email, password } = JSON.parse(body);
                console.log("Name:", name);

                const data = await fs.readFile('student.json', { encoding: 'utf8' });
                let arr = JSON.parse(data);

                const status = arr.find(ele => ele.email === email);

                if (status) {
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify({ msg: "Email is already registered" }));
                }

                arr.push({ name, email, password });
                await fs.writeFile('student.json', JSON.stringify(arr));

                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ msg: 'User successfully registered' }));

            } catch (error) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ msg: "Error: " + error.message }));
            }
        });
    }

    if (req.url === '/login' && req.method === 'POST') {
        let body = "";

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', async () => {
            try {
                const { email, password } = JSON.parse(body);
                console.log("Login attempt:", email);

                const data = await fs.readFile('student.json', { encoding: 'utf8' });
                let arr = JSON.parse(data);

                const status = arr.find(ele => ele.email === email && ele.password === password);

                if (status) {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ msg: "Success" }));
                } else {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ msg: "Invalid email or password" }));
                }

            } catch (error) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ msg: "Error: " + error.message }));
            }
        });
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});