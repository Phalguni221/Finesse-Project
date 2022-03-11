import './App.css'
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container2 = styled.div `
 height:0.01px;
  width:600px;
  background-color: beige;
  align-items: center;

`;

//Parent-wrapper for nav 
const Wrapper2 = styled.div `
  padding: 200px 100px;
  justify-content: space-between;
  margin-right:80px;
`;

export default function Survey () {
  return (
  <div>
  <Container2>
    <Wrapper2>
    <h1>Take this Survey to get recommended clothes to your style and suiting!</h1>
    <form method="GET" action="Jackets.js">
    <div>
    
     </div>
     <br></br>
     <br></br>
    <input type="submit" id="submit" name="submit" value="Click here to finish!"/>
        </form>
    </Wrapper2>
    </Container2>
  </div>
        
  )
}