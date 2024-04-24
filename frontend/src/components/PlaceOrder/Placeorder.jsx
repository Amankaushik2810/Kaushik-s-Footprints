import React, { useContext, useState } from 'react'
import './Placeorder.css'
import { ShopContext } from '../../context/ShopContext'

const Placeorder = () => {

    const {getTotalCartAmount,token,product_list,cartItem,url} = useContext(ShopContext)
    const [data,setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        street:"",
        city:"",
        state:"",
        Zipcode:" ",
        country:"",
        phone:""
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const PlaceOrder = async(event) =>{
        event.preventdefault();
        let orderItem = [];
        product_list.map((item)=>{
            if (cartItem[item._id]){
                let itemInfo = item;
                itemInfo["quantity"] = cartItem[item._id];
                orderItem.push(itemInfo)
            }
        })
        console.log(orderItem)
    }

  return (
    <form onSubmit={PlaceOrder} className='place-order'>
        <div className="place-order-left">
            <p className="title">Delivery Information</p>
            <div className="multi-fields">
                <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name'/>
                <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='last Name'/>
            </div>
            <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder='Email address' />
            <input name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
            <div className="multi-fields">
                <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
                <input name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
            </div>

            <div className="multi-fields">
            <input name='Zipcode' onChange={onChangeHandler} value={data.Zipcode} type="text" placeholder='Zip Code' />
                <input name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
            </div>
            <input name='phone' onChange={onChangeHandler} value={data.phone} type="Number" placeholder='Phone no' />
        </div>


        <div className="place-order-right">
        <div className="cartitems-total">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Sub Total</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>₹{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button type='submit' >PROCEED TO PAYMENT</button>
                </div>
        </div>
      
    </form>
  )
}

export default Placeorder
