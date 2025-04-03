import React from 'react'
import {Link, Outlet} from 'react-router-dom'
export default function Home() {
  return (
    <div>
        <div style={{backgroundColor:'brown', color:'white',fontSize:'30px'}}>Welcome to Page
            <nav>
                <ul>
                    <li><Link to ='/login'>Login</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    </div>
  )
}
 