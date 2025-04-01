const http = require('http');
const PORT = 3002;
const server = http.createServer(async(req, res) => {
    res.setHeader('Content-type', 'text/html');
    const data = await fetch('https://fakestoreapi.com/products');
    const jsData = await data.json();
    console.log(jsData[0].title);
    const title = jsData[0].title;
    const htmlTemplate = `
    <div style="
        max-width: 600px;
        margin: 20px auto;
        font-family: Arial, sans-serif;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    ">
        <h2 style="
            background: linear-gradient(135deg, #8B0000, #FF4500);
            color: white;
            text-align: center;
            padding: 15px;
            margin: 0;
            font-size: 24px;
            font-weight: bold;
        ">
            Welcome to Online Bag Store
        </h2>
        
        <div style="
            background: #1E3A8A;
            text-align: center;
            padding: 20px;
            color: white;
        ">
            <h3 style="margin-bottom: 10px; font-size: 22px;">${title}</h3>
            
            <img src="${jsData[0].image}" 
                alt="${title}" 
                width="250" 
                style="
                    border-radius: 10px;
                    border: 3px solid white;
                    margin: 10px 0;
                " 
            />
            
            <p style="
                font-size: 16px;
                line-height: 1.5;
                background: rgba(255, 255, 255, 0.2);
                padding: 10px;
                border-radius: 5px;
                display: inline-block;
                max-width: 80%;
            ">
                ${jsData[0].description}
            </p>
        </div>
    </div>
`;


    //console.log(data);
    res.end(htmlTemplate);
});

server.listen(PORT, () => {
    console.log(`Server is Running on:  + ${PORT}`);
});