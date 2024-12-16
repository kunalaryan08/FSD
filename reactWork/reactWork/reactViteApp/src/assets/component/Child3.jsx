import React from "react";
export default function Child3({hild2Data}){
    return (
        <div>
            <h1>Name : {hild2Data.name}</h1>
            <h2>Section : {hild2Data.section}</h2>
            <h3>Roll_No. : {hild2Data.roll}</h3>
        </div>
    )
}