require('dotenv').config()
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import React, {component} from 'react';

class App extends component {
constructor(props) {
  super(props);
  this.state = {apiResponse: ""};
}


callAPI() {
  fetch("http://localhost:3500/dress")
  .then(res => res.text())
  .then(res => this.setState({apiResponse: res}));
}

componentWillMount() {
this.callAPI();
}


render() {
    return (
    <div>
    <Home/>
  <Cart/>
    </div>
    );
  };
  
}

  
  export default App;