import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_list_icon.svg'
import order_icon from '../../assets/order_icon.png'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* <div className="sidebar-items"> */}
        <NavLink to={'/addproduct'} className="sidebar-item" style={{textDecoration:"none"}}>
            <img src={add_product_icon} alt="" />
            <p>Add Product</p>
        </NavLink>

        <NavLink to={'/listproduct'} className="sidebar-item" style={{textDecoration:"none"}}>
            <img src={list_product_icon} alt="" />
            <p>Product List</p>
        </NavLink>

        <NavLink to={'/Orders'} className="sidebar-item" style={{textDecoration:"none"}}>
          <img src={order_icon} alt="" />
          <p>Order Updates</p>
        </NavLink>
    </div>
  )
}

export default Sidebar
