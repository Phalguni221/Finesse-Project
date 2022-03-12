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
  padding: 200px 70px;
  justify-content: space-between;
  margin-right:80px;
`;

//For Right side things
const Right = styled.div`
  flex: 1;
  display: flex;
  aline-item: center;
  justify-content: flex-end;
  margin-right:100px;
  `;
 //for menuitems, cart and all
 const Buttons = styled.div`
 font-size: 17px;
 cursor: pointer;
 margin-right: 55px;
 display: flex;
 flex: flex-wrap
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
      <Right>
      <Buttons>
        <form method="GET" action="Survey">
    <input type="Submit" name="Survey" id="Survey" value="Survey"/>
    </form>
      </Buttons>
      <Buttons>
    <form method="GET" action="Account">
      <input type="Submit" name="Login" id="Login" value="Login"/>
      </form>
      </Buttons>
      </Right>
    </Wrapper2>
    </Container2>
  </div>
        
  )
}

