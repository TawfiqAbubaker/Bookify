import React from 'react'
import { Link } from 'react-router-dom'
import {CgShoppingCart} from "react-icons/cg"
import {GiWhiteBook} from "react-icons/gi"
import { useState } from 'react'
import Cart from './Cart'


import './NavBar.css'

function NavBar(props) {
    const [CartVisibility, setCartVisibility] = useState(false)
    const invertCartVisibility = (() =>setCartVisibility(!CartVisibility))
    
    return (
        <div className="divNavBar">
            {CartVisibility ? <Cart inverCart={invertCartVisibility} setCartData={props.setCartData} cartData={props.cartData}/> : null}
            <div className="home">
                <Link to ="/Bookify/" className="LinkHomeLeft">
                    <GiWhiteBook className="book"/>
                    <p> Bookify</p>
                </Link>
            </div>
            <div className="rightNav">
                <Link to ="/Bookify/" id="HomeNav" className={CartVisibility ? "rightLink" : "rightLink hover-underline-animation" }>Home</Link>
                <Link to ="/Bookify/catalogue" className={CartVisibility ? "rightLink" : "rightLink hover-underline-animation" }>Catalogue</Link> 
                <Link to ="/Bookify/submitBook" className={CartVisibility ? "rightLink" : "rightLink hover-underline-animation" }>Form</Link> 
                <span className ={CartVisibility ? "rightLink" : "hover-underline-animation" }>
                    <CgShoppingCart className="Icon rightLink" onClick = {props.clickable ?  invertCartVisibility : null} />
                </span>
            </div>
        </div>
    )
}

export default NavBar
