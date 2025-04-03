import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/login'
import Registration from './Components/Registration'
import DashBoard from './Components/DashBoard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      // <div>
      //   <div>
      //     <Login />
      //   </div>
      // </div>
  )
}

export default App
