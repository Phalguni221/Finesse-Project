// import { Badge } from "@material-ui/core";
// import { Search, ShoppingCartOutlined } from "@material-ui/icons";
// import React from "react";
// import styled from "styled-components";
// import About from "./About"
// import {BrowserRouter, Link, Links, Route, Routes} from "react-router-dom"


// //For styled main container
// const Container = styled.div`
//   height: 60px;
//   background-color: pink;
//   margin-left:1px;
// `;

// //parent wrapper for nav
// const Wrapper = styled.div`
//   padding: 10px 20px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
  
// `;

// //For left side of navbar
// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
// `;

// //For lang
// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
  
// `;


// //For search container
// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
// `;



// const Input = styled.input`
//   border: none;
  
// `;


// //For center navbar
// const Center = styled.div`
//   flex: 1;
//   text-align: center;
// `;


// //For finesse name
// const Logo = styled.h1`
//   font-weight: bold;
  
// `;

// //For right side of navbar
// const Right = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
  
// `;

// //for menuitem
// const MenuItem = styled.div`
//   font-size: 14px;
//   cursor: pointer;
//   margin-left: 25px;
//   }
// `;

// const Navbar = () => {
//   return (
//     <Container>
//       <Wrapper>
//         <Left>
//           <Language>EN</Language>
//           <SearchContainer>
//             <Input placeholder="Search" />
//             <Search style={{ color: "gray", fontSize: 16 }} />
//           </SearchContainer>
//         </Left>
//         <Center>
//           <Logo>Finesse</Logo>
//         </Center>
//         <Right>
//         <MenuItem> ABOUT US</MenuItem>
//           <MenuItem>REGISTER</MenuItem>
//           <MenuItem>SURVEY</MenuItem>
//           <MenuItem>LOG IN</MenuItem>
//           <MenuItem>
//             <Badge badgeContent={4} color="primary">
//               <ShoppingCartOutlined />
//             </Badge>
//           </MenuItem>
//         </Right>
//       </Wrapper>
//     </Container>
//   );
// };

import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import {useState} from 'react'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Survey from '../pages/Survey'
import Cart from '../pages/Cart'
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
            <text><input type="Submit" name="Home" id="Home" value="Home"/></text>
            </form>
            </MenuItem>
              <MenuItem> 
              <form method="GET" action="Register">
             <text><input type="Submit" name="Register" id="Register" value="Register"/></text>
             </form> 
             </MenuItem>

                <MenuItem>
                <form method="GET" action="Login">
                <text><input type="Submit" name="LogIn" id="Login" value="Login"/></text>
             </form> 
                </MenuItem>

                <MenuItem>
                <form method="GET" action="Survey">
             <text><input type="Submit" name="Survey" id="Survey" value="Survey"/></text>
             </form> 
                </MenuItem>


                <MenuItem>
                <form method="GET" action="Cart">
             <input type="Submit" name="Cart" id="Cart" value="Cart"/>
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
          <Route path="Login" element={
            <Login/>
            } />
             <Route path="Survey" element={
            <Survey/>
            } />
                <Route path="Cart" element={
            <Cart/>
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

export default Navbar;

