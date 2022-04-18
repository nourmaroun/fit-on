import React from 'react'
import {FaBars} from 'react-icons/fa'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to='/'>fiton</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="workouts">Workouts</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="healthy-lifestyle">Healthy Lifestyle</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="sports-news">Sports News</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="workout-playlists">Workout Playlists</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contact-us">Contact Us</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar