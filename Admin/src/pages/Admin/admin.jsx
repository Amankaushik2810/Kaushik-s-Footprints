import React from 'react'
import './admin.css'
import Sidebar from '../../component/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import AddProduct from '../../component/AddProduct/AddProduct'
import ListProduct from '../../component/ListProduct/ListProduct'
import Orders from '../../component/Orders/Orders'
const admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
        <Route path='/Orders' element={<Orders/>}/>
      </Routes>
    </div>
  )
}

export default admin
