import React from 'react'
import "../pages/Catalogue.css"
import "./BookCard.css"
import { CgShoppingCart } from 'react-icons/cg'

function BookCard({ title, author, cover, setCartData, cartData, genre }) {
    let addorremove = true;
    cartData.forEach(element => {
        if(element.name == title) addorremove = false;
    });
    function cartOnClick(){
        if(addorremove == true){
            setCartData([...cartData, {name:title,number:1} ])
        }
        else{
            setCartData(cartData.filter(name => name.name != title))
        }
    }
    return (
        <div className="bookContainer">
            <div className="imgDiv">
                <img src={cover} alt= ""/>
                <div className="PriceAndGenre">
                    <p>Price: 5$</p>
                    <p>Genre: {genre}</p>
                </div>
            </div>
            <div className="belowImage">
                <div className="title">
                    {title}
                </div>
                <div className="author">
                    {author}
                </div>
                <div className="shoppingCartIcon">
                    <div className="CenteringCartButton">
                        <button className="cartButton" onClick = {() => cartOnClick()}>
                            {addorremove? "Add to" : "Remove from"} Cart <CgShoppingCart className="cart" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BookCard