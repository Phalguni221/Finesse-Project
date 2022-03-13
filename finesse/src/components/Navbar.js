import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";


//For styled main container
const Container = styled.div`
  height: 60px;
  background-color: pink;
`;

//parent wrapper for nav
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

//For left side of navbar
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

//For lang
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  
`;


//For search container
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;



const Input = styled.input`
  border: none;
  
`;


//For center navbar
const Center = styled.div`
  flex: 1;
  text-align: center;
`;


//For finesse name
const Logo = styled.h1`
  font-weight: bold;
  
`;

//For right side of navbar
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`;

//for menuitem
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Finesse</Logo>
        </Center>
        <Right>
        <MenuItem>ABOUT US</MenuItem>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SURVEY</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

