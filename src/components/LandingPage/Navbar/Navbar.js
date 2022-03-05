import React from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll/modules';

import{ 
    Nav, 
    NavbarContainer, 
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn
} from './NavbarElements';
import GoogleAuth from '../../GoogleAuth';

const Navbar = ({ toggle }) => {
    const toggleHome = () =>{
        scroll.scrollToTop();
    }

  return ( 
      <React.Fragment>
          <Nav>
              <NavbarContainer>
                  <NavLogo to="/" onClick={toggleHome}>
                    🔖
                  </NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks 
                            to="features"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                          >
                            Features
                          </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks 
                            to="startUsing"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                          >
                            Start Using!
                          </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks 
                            to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                          >
                            Contact
                          </NavLinks>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                    <GoogleAuth location={"nav"}/> 
                  </NavBtn>
              </NavbarContainer>
          </Nav>
      </React.Fragment>
    );
}

export default Navbar;
