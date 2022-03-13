import './App.css'
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'

const Container2 = styled.div `
 height:0.01px;
  width:600px;
  background-color: beige;
  align-items: center;

`;

//Parent-wrapper for nav 
const Wrapper2 = styled.div `
  padding: 100px 10px;
  justify-content:"stylece-between;
  margin-right:80px;
`;

export default function Survey () {
  return (
  <div>
  <Container2>
    <Wrapper2>
    <h1>Take this Survey to get recommended clothes to your style and suiting!</h1>
    <br></br>
    <form method="GET" action="Jackets">
    <div>
                    <label for="color">What is your favorite color?</label>
                    <input type="text" minlength="3" maxlength="22" id="firstname" name="colorname" placeholder="colorname" required />
                </div>
                <br></br>
               
                <label for="material">Preferred material</label>
                <br></br>
                <select name="material-list">
                                <option value="cotton">Cotton</option>
                                <option value="polyester">Polyester</option>
                                <option value="veganleather">Vegan Leather</option>
                                <option value="faux fur">Faux fur</option>
                                <option value="nylon">Nylon</option>
                </select>
                                  <br></br>
                                  <br></br>
               
                                <label for="brand">Preferred brand</label>
                                <br></br>
                <select name="brand-list">
                                <option value="Zara">Zara</option>
                                <option value="Kohls">Kohls</option>
                                <option value="Ralph Lauren">Ralph Lauren</option>
                                <option value="Gucci">Gucci</option>
                                <option value="Prada">Prada</option>
                                <option value="Macy's">Macy's</option>
                </select>
                                  <br></br>          
                                  <br></br>
                          <div>
                        <p>What is your main purpose of purchasing a jacket(s)? Pick ONE or MORE options below</p>
                        <br></br>
                              <legend>
                               Purpose of Jacket
                            </legend>
                           
                            <div>
                                <input type="checkbox" id="comfort" name="comfort" value="comfort"/> 
                                <label for="comfort">Comfort</label>
                            </div>
                           <div>
                            <input type="checkbox" id="style" name="extras" value="style"/> 
                            <label for="style">Style</label>
                           </div>
                              <div>
                                <input type="checkbox" id="trend" name="extras" value="tour"/> 
                                <label for="trend">Trend</label>  
                              </div>
                              <br></br>
                              <br></br>
                              <div>
                              <p>Other reasons? List below:</p>
                            <input type="text" minlength="1" maxlength="300" id="other" name="other" placeholder="other"/>
                            
                            </div>
                          
     <br></br>
     <br></br>
     </div>
    <input type="submit" id="submit" name="submit" value="Click here to finish!"/>
        </form>
    </Wrapper2>
    </Container2>
  
  </div>
        
  )
}