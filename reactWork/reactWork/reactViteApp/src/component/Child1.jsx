import React from "react";

export default function Child1({childData}){
    return (
        <div>
            <Child2 Child2Data={childData}/>
        </div>
    )
}