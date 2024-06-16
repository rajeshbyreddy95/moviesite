import React from 'react'
import Home from './components/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './components/details/Details'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path={'/detail/:id'} element={<Details/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
