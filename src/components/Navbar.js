import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoImage } from "../assets/Boston_Dynamics-Logo.wine.svg";

export const NavbarContainer = styled.div`
  font-family: "Ubuntu", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  width: 100%;
  
 
`;

export const NavbarWrap = styled.div`
  display: flex;
  align-items: center;
  
`;

export const Logo = styled(LogoImage)`
  width: 60px;
  height: 60px;
  margin-right: 1rem;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  

`;

export const NavLink = styled.a`
  margin: 0 1rem;
  font-size: 1.2rem;
  color: #333;
  text-decoration: none;
  &:hover {
    color: #f8b500;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchWrap = styled.div`
  position: relative;
`;

export const Input = styled.input`
  padding: 0.5rem 2rem 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 50px;
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: #f8b500;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 380px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  background-color: #f8b500;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #e39700;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(248, 181, 0, 0.4);
  }
  margin-left: 1rem;
`;


const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrap>
        <Logo />
        <Nav>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/">Market</NavLink>
          <NavLink href="/">Trade</NavLink>
          <NavLink href="/">Pricing</NavLink>
          <NavLink href="/">Download</NavLink>
          <NavLink href="/">Help</NavLink>
        </Nav>
        <Search>
          <SearchWrap>
            <Input type="text" placeholder="Symbol/Name" />
          </SearchWrap>
        </Search>
        <ButtonContainer>
          <Button>Sign up</Button>
          <Button>Log in</Button>
        </ButtonContainer>
      </NavbarWrap>
    </NavbarContainer>
  );
};

export default Navbar;
