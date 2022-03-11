import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import SignIn from './SignIn'
import Register from './Register'
import Survey from './Survey'


//React styled component in use
const Container = styled.div `
  height: 60px;
  background-color: pink;
`

//Parent-wrapper for nav 
const Wrapper = styled.div `
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  padding: 5px
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
  `;

//For Audio
const Video = styled.div`
text-align:center;
margin-right:300px;

`;

 //for menuitems, cart and all
 const MenuItem = styled.div`
 font-size: 14px;
 cursor: pointer;
 margin-left: 25px;
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
      <Video>
        <p>Click for some background music while you shop!</p>
      <iframe width="50" height="30" src="https://www.youtube.com/embed/FxU7XEMonbk" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
      </Video>
      </p>
          <Center>
            <Logo>
              FINESSE
            </Logo>
            
          </Center>

          <Right>
                <MenuItem>
                <Link to="/">Home</Link>
                </MenuItem>

                <MenuItem>
                <Link to="/Register"> Register</Link>
                </MenuItem>

                <MenuItem>
                <Link to="/SignIn">Sign-in</Link>
                </MenuItem>

                <MenuItem>
                <Link to="/Survey">Survey</Link>
                </MenuItem>

              <div className="display">
        <Routes>
          <Route path="/Register" element={
            <Register/>
          } />
          <Route path="/SignIn" element={
            <SignIn/>
            } />
             <Route path="/Survey" element={
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
