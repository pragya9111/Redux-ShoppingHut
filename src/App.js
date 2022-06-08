import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './Component/Navbar/Nav'
import Sidenav from './Component/Sidenav/Side'
import Allproducts from './Component/Allproducts/Allproducts'
import SelectedProducts from './Component/SelectedProduct/SelectedProducts'

function App() {
  return (
    <div className='main'>
      <Nav />
      <div className='center'>
        <Sidenav />
        <Routes>
          <Route path='/' element={<Allproducts />} ></Route>
          <Route path='/product/:id' element={<SelectedProducts />} ></Route>
        </Routes>
      </div>

    </div>
  )
}

export default App