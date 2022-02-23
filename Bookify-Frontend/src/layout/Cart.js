import React from 'react'
import './Cart.css'
import { CgClose } from "react-icons/cg"
import {FaOpencart} from 'react-icons/fa'
import CartItem from './CartItem'

function Cart({ inverCart, cartData, setCartData }) {
    function PriceCalculator(){
        let x = 0;
        cartData.forEach(element => {
            x += element.number * 5
        });
        return x;
    }
    function emptyData(){
        if (cartData.length == 0){

            return false;
        }
        else{
            return true;
        }
    }
    return (
        <div class="CartTotalDiv">
            <div className="greyBackground" onClick={inverCart}>
            </div>
            <div className="sideCartBar">
                <div className="Icon">
                    <CgClose className="closeIcon" onClick={inverCart} />
                </div>
                <div className="cartName">
                    <h2>Cart</h2>
                </div>
                <hr class="solidLine" />
                <div className="cartItems">
                    {cartData.map(data => (
                        <CartItem data={data} cartData={cartData} setCartData={setCartData} />
                    ))}
                </div>
                {emptyData() ? <hr class="solidLine" /> : ""}
                <div className="Price">   
                    {emptyData() ? <div className="PriceDiv">
                                        <h3>Base Price:</h3> 
                                        <h3>{PriceCalculator()} $</h3>
                                        <h3>Delivery Fee:</h3>
                                        <h3>1.99 $</h3>
                                        <h3>Tax (10%):</h3>
                                        <h3>{PriceCalculator()/10} $</h3>
                                        <h3>Final Price: </h3>
                                        <h3>{PriceCalculator() + PriceCalculator()/10 + 1.99} $</h3>
                                   </div>           
                    : <h3>Empty Cart</h3>}
                </div>
            </div>
        </div>
    )
}

export default Cart
