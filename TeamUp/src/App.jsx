import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={ <Home />} />
        <Route path='/Login' element ={<Login /> } />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App