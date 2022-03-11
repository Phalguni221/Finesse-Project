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

export default function SignIn () {
  return (
  <div>
  <Container2>
    <Wrapper2>
    <h1>Welcome to the Sign-in page!</h1>
    <h2>If you are already a member, then please log in! 
      If you aren't a member but want to become one, please go to the sign-in page to become a new member of Finesse!</h2>
      <br></br>
      <br></br>
      <p>
    <button type="button" onclick="./Survey.js" >Survey</button>
    </p>
    <br></br>
    <br></br>
    <p>
    <button type="button" onclick="./Account.js">Account</button>
    </p>
    </Wrapper2>
    </Container2>
  </div>
        
  )
}

