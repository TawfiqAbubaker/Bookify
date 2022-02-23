import React from 'react'
import "./CartItem.css"
function CartItem({ data, cartData, setCartData }) {
    function addBtn(event) {
        setCartData(cartData.map(function (item) {
            if (item.name == data.name) {
                if (data.number != 100) {
                    return {
                        name: data.name,
                        number: data.number + 1
                    }
                }
                else {
                    return {
                        name: data.name,
                        number: 100
                    }
                }
            }
            else {
                return {
                    name: item.name,
                    number: item.number
                }
            }
        }))
        console.log(cartData)
    }
    function substractBtn() {
        setCartData(cartData.map(function (item) {
            if (item.name == data.name) {
                if (data.number != 1) {
                    return {
                        name: data.name,
                        number: data.number - 1
                    }
                }
                else {
                    return {
                        name: data.name,
                        number: 1
                    }
                }
            }
            else {
                return {
                    name: item.name,
                    number: item.number
                }
            }
        }))
    }
    return ( 
        <div className="cartItemDiv">
            <div className="bookCartName">
                <h4>{data.name}</h4>
            </div>
            <div className="changeNumberItem">
                <div className="SubstractButton">
                    <button onClick={() => substractBtn()}>-</button>
                </div>
                <p>
                    {data.number}
                </p>

                <div className="AddButton">
                    <button onClick={() => addBtn()}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
