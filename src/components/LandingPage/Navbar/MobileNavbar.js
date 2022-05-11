import React from 'react';

import {
    MobileNavBarContainer,
    Icon,
    CloseIcon,
    MobileNavBarWrapper,
    MobileNavBarMenu,
    MobileNavItem,
    MobileNavBarLink,
    MobileNavBtnWrap,
} from './MobileNavbarElements';
import GoogleAuth from '../../GoogleAuth';

const MobileNavBar = ({ isOpen, toggle }) => {
    return (
        <MobileNavBarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <MobileNavBarWrapper>
                <MobileNavBarMenu>
                    <MobileNavItem>
                        <MobileNavBarLink
                            onClick={toggle}
                            to="features"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >
                            Features
                        </MobileNavBarLink>
                    </MobileNavItem>
                    <MobileNavItem>
                        <MobileNavBarLink
                            onClick={toggle}
                            to="startUsing"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >
                            Start Using!
                        </MobileNavBarLink>
                    </MobileNavItem>
                    <MobileNavItem>
                        <MobileNavBarLink
                            onClick={toggle}
                            to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >
                            Contact
                        </MobileNavBarLink>
                    </MobileNavItem>
                </MobileNavBarMenu>
                <MobileNavBtnWrap>
                    <GoogleAuth location={"mobileNav"} />
                </MobileNavBtnWrap>
            </MobileNavBarWrapper>
        </MobileNavBarContainer>
    );
}

export default MobileNavBar;
