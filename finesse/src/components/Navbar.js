import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import {useState} from 'react'

import SignIn from './SignIn'
import Register from './Register'
import Survey from './Survey'
import Slider from './Slider'
import Intro from './Intro'





//React styled component in use
const Container = styled.div `
  height: 70px;
  background-color: pink;
`;

//Parent-wrapper for nav 
const Wrapper = styled.div `
  padding: 10px 50px;
  display:flex;
  align-items: center;
  margin-left:100px
  justify-content: space-between;
`;


// For Arrow style
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: pink;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

//for EN lang
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  `;

//for searchbar
const SearchContainer = styled.div`
  border: none;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 1px
`;

//for searchbar input
const Input = styled.input`
  border: 0.5px solid purple;
`;

//for LCR proper divider
const Left = styled.div`
  flex: 1;
  display: flex;
  aline-item: center;
  `;

const Center = styled.div`
  flex: 1;
  text-align: center;
  `;

//logo/name
const Logo = styled.h1`
flex: 1;
display: flex;
aline-item: center;
font-weight: bold;
`;

//For Right side things
const Right = styled.div`
  flex: 1;
  display: flex;
  aline-item: center;
  justify-content: flex-end;
  margin-right:500px;
  `;

//For Audio
const Video = styled.div`
text-align:center;
margin-right:300px;
`;

 //for menuitems, cart and all
 const MenuItem = styled.div`
 font-size: 17px;
 cursor: pointer;
 margin-right: 35px;
 `; 


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input/>
              <Search style={{ color: "purple", fontSize: 16 }}/>
            </SearchContainer> 
          </Left>
        <p>
      {/* <Video>
        <p>Click for some background music while you shop!</p>
      <iframe width="50" height="30" src="https://www.youtube.com/embed/FxU7XEMonbk" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
      </Video> */}
      </p>
          <Center>
            <Logo>
              FINESSE
            </Logo>     
          </Center>
          <hr></hr>
       
          <Right>
            <MenuItem>
            <form method="GET" action="Intro">
              <input type="Submit" name="Home" id="Home" value="Home"/>
            </form>
            </MenuItem>
              <MenuItem> 
              <form method="GET" action="Register">
             <input type="Submit" name="Register" id="Register" value="Register"/>
             </form> 
             </MenuItem>

                <MenuItem>
                <form method="GET" action="SignIn">
             <input type="Submit" name="SignIn" id="SignIn" value="SignIn"/>
             </form> 
                </MenuItem>

                <MenuItem>
                <form method="GET" action="Survey">
             <input type="Submit" name="Survey" id="Survey" value="Survey"/>
             </form> 
                </MenuItem>

       

              <div className="display">
        <Routes>
        <Route path="Intro" element={
            <Intro/>
          } />
          <Route path="Register" element={
            <Register/>
          } />
          <Route path="SignIn" element={
            <SignIn/>
            } />
             <Route path="Survey" element={
            <Survey/>
            } />
        </Routes>
              </div> 
           
            <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
            </MenuItem>
         
        </Right>
          
      </Wrapper>
    
    </Container>
  )
}

export default Navbar
