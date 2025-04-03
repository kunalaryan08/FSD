const fs = require('fs').promises;
const pd = fs.writeFile('student.pdf', "CSEB students data");
// console.log(pd);.
pd.then(()=>{
    console.log("Data Written Successfully!!");
})
.catch((err)=>{
    console.log("Error caught" + err);
})
.finally(()=>{
    console.log("This is the Finally Part and the Resources are clsoed!!!");
})

async function readFilepromise(){
    try{
        const data = await fs.readFile('student.pdf',{
            encoding:'utf-8'
        })
        console.log(data);
    } catch(err){
        console.log("Error is coming" + err);
    }
    
}

readFilepromise();