import './App.css'
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import SignIn from './SignIn.js'

const Container2 = styled.div `
 height:0.01px;
  width:600px;
  background-color: beige;
`;

//Parent-wrapper for nav 
const Wrapper2 = styled.div `
  padding: 200px 100px;
  justify-content: space-between;
  margin-right:80px;
`;

export default function Register() {
  return (
    <div>
      <Container2>
        <Wrapper2>
        <h1>New Member Registration Form</h1>
    <h2>If you want to become a new member of Finesse, please fill out and submit the questionnaire below!</h2>
    <br></br>
    <br></br>
                <form method ="GET" action="SignIn">
                  <div>
                    <label for="firstname">Your First Name<span class="required-field">*</span></label>
                    <input type="text" minlength="2" maxlength="35" id="firstname" name="firstname" placeholder="firstname" required />
                </div>
                <br></br>
                 <div>
                    <label for="lastname">Your Last Name<span class="required-field">*</span></label>
                    <input type="text" minlength="2" maxlength="35" id="lastname" name="lastname" placeholder="lastname" required />
                 </div>
                 <br></br>
                 <div>
                    <label for="address">Your Address<span class="required-field">*</span></label>
                    <input type="text" minlength="2" maxlength="35" id="address" name="address" placeholder="address" required/>
                </div>
                <br></br>
                <div>
                    <label for="age">Your age</label>
                    <input type="number" name="age" id="age" min="13" max="120" placeholder="age" required/>
                    <br></br>
                    <br></br>
                    <h3>Must be 13 and older to make an account!</h3>
                </div>
                 <br></br>
             <input type="submit" id="submit" name="submit" value="submit"/> 
             </form>   
        </Wrapper2>
      </Container2>
      </div>
  )
}
