import React from "react";
import {Child1} from "./ContextComponent/child1";
export default function AppProps(){
    const data = {
        name : "Aryan",
        section : "A",
        roll : 34
    }
    return (
        <div>
            AppProps
            <div>
                <Child1 childData = {data}/>
            </div>
        </div>
    )
}