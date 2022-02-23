import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'
import girl from "../img/Reading Book 02 light.png"
import NavBar from '../layout/NavBar'

function Home() {   
    return (
        <div className="homeContainer">
            <div className="Home">
                <div className="text">
                    <h1 id="Welcome">Welcome to Bookify.</h1>
                    <h1>Here you will find a nice collection of books of any genre at the best price in Canada.</h1>
                    <Link to ="/Bookify/catalogue"><button>View Catalogue</button></Link>
                </div>
                <div className="girlImg">
                    <img src={girl} alt="girl reading book" />
                </div>
            </div>
            
        </div>

    )
}

export default Home
