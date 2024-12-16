import React, { createContext } from 'react'
import {Child1} from './contextcompo/Child1';
import Child3 from './contextcompo/Child3';
import Child2 from './contextcompo/Child2';
const mycontext=createContext();
function AppContext() {
   
    const data={
        name:'Aryan',
        branch:'CSE'
    }
  return (
    <div>AppContext
  <mycontext.Provider value={data}>
    <Child3 />
    <Child2 />
    </mycontext.Provider>

    
    </div>
  )
}
export {
    mycontext
}


export default AppContext