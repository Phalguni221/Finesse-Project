
 import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import About from "./pages/About";
 import Survey from "./pages/Survey";
 import Product from "./pages/Product";
 import {BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
    return 
      <Router>

        <Routes>
          
        <Route exact path="/">
          <Home />
        </Route>
        
        <Route path="/products/:category">
          <ProductList />
        </Route>

        <Route path="/productList">
          <ProductList/>
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/survey">
        <Survey />
        </Route>

        <Route path="/product">
        <Product />
      </Route>

       <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}

          </Routes>
       </Router>
     );
  }
  
  export default App;