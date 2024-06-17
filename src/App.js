import React from 'react'
import Home from './components/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './components/details/Details'
import Comedy from './components/comedy/Comedy'
import Thriller from './components/thriller/Thriller'
import Adventure from './components/adventure/Adventure'
import Action from './components/action/Action'
import Animation from './components/animation/Animation'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path={'/detail/:id'} element={<Details/>}></Route>
        <Route path={'/comedy'} element={<Comedy/>}></Route>
        <Route path={'/thriller'} element={<Thriller/>}></Route>
        <Route path={'/adventure'} element={<Adventure/>}></Route>
        <Route path={'/action'} element={<Action/>}></Route>
        <Route path={'/animation'} element={<Animation/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
