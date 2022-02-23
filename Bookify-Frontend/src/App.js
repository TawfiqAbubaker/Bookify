import "./App.css";
import { Route, Switch } from "react-router";
import { useState } from "react";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import Cart from "./layout/Cart";
import NavBar from "./layout/NavBar";
import SubmitBook from "./pages/SubmitBook";

// import backgroundimg from './img/indie-bookstore-day-bastrop-gigapixel-scale-2_00x.jpg'

function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <div className="App">     
      <NavBar cartData={cartData} setCartData={setCartData} clickable={true}/>
      <div className="everythingButNavBar"> 
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Bookify/" exact>
          <Home />
        </Route>

        <Route path="/catalogue" exact>
          <Catalogue cartData={cartData} setCartData={setCartData}/>
        </Route>
        <Route path="/Bookify/catalogue" exact>
          <Catalogue cartData={cartData} setCartData={setCartData}/>
        </Route>
        
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/Bookify/cart" exact>
          <Cart />
        </Route>

        <Route path="/submitBook" exact>
          <SubmitBook />
        </Route>
        <Route path="/Bookify/submitBook" exact>
          <SubmitBook />
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
