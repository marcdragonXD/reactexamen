import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './Home'
import MenuComponents from './MenuComponents'
import Series from './Series';
import Personajes from './Personajes';
import NuevoPersonaje from './NuevoPersonaje';
import ModificarPersonaje from './ModificarPersonaje';
import ListaSeries from './ListaSeries';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <MenuComponents />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/nuevo' element={<NuevoPersonaje/>}/>
            <Route path='/modificar' element={<ModificarPersonaje/>}/>
            <Route path='/lista' element={<ListaSeries/>}/>
        </Routes>
      </BrowserRouter>

    )
  }
}
