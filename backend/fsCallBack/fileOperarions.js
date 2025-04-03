const {log} = require('console');
const fs = require('fs');

const writeASync = () => {
    fs.writeFile('data.pdf', "Data is written using FS Module", (err)=>{
        if(err){
            console.log("Error Occured during Writting file Content" + err);
        } else{
            console.log("Data is written");
        }
    })
};

const readASync = () => {
    fs.readFile('data.pdf',{encoding:'utf-8'},(err,data)=>{
        if(err){
            console.log("Error while reading file" + err);
        } else{
            console.log(data);
        }
    })
};

let obj = {writeASync, readASync};

module.exports = obj;