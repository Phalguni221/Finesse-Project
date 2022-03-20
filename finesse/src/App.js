
 import Home from "./pages/Home";
 import ProductList from "./pages/ProductList";
// import Register from "./pages/Register";
 //import Login from "./pages/Login";
  import Cart from "./pages/Cart";
 //import About from "./pages/About";
 //import Survey from "./pages/Survey";
 import Product from "./pages/Product";
 import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;


    
      // <Routes>
      //   <Route exact path="/">
      //     <Home />
      //   </Route>
      //   <Route path="/products/:category">
      //     <ProductList />
      //   </Route>
      //   <Route path="/productList">
      //     <ProductList/>
      //   </Route>
      //   <Route path="/cart">
      //     <Cart />
      //   </Route>
      //   <Route path="/register">
      //     <Register />
      //   </Route>
      //   <Route path="/login">
      //     <Login />
      //   </Route>
      //   <Route path="/about">
      //     <About />
      //   </Route>
      //   <Route path="/survey">
      //   <Survey />
      //   <Route path="/product">
      //   <Product />
      // </Route>
      //  <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
      //   <Route path="/register">
      //     {user ? <Redirect to="/" /> : <Register />}
       
      //  </Routes>
    // );
  // };
  
  // export default App;