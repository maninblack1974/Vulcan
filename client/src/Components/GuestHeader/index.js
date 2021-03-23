import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavLink from './NavLink';


// import Logout from "../Logout"

const HeaderStyled = styled.header`
  margin-bottom: 45px;

  @media (min-width: 700px) {
    margin-bottom: 0;
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;

  z-index: 1000;
  > ul {
    display: flex;
    flex-direction: column;
    position: fixed;
    transition: transform 0.3s linear;
    transform: ${({ isClosed }) => (isClosed ? ' translateY(-110vh)' : 'translateY(60px)')};
    padding: 0;
    width: 100%;
    height: 100vh;
    background: #fff;
    z-index: 999;
  }
  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
    height: 60px;
    border-bottom: 1px solid #eee;
    > ul {
      position: relative;
      transform: none;
      height: auto;
      width: auto;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      min-height: 100%;
      margin: 0 10px 0 0;
      box-sizing: border-box;
    }
  }
`;

const LogoFullStyledLink = styled.nav`
  padding: 20px;
  display: none;

  @media (min-width: 700px) {
    display: initial;
  }
`;

const navLinks = [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: '/sign-up',
    title: 'Sign Up',
  },
  {
    to: '/sign-in',
    title: 'Log In',
  },
];

class GuestHeader extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isClosed: true,
    };
  }

  openDropdownHandler = () => {
    window.addEventListener('scroll', this.scrollToTop);
    this.setState(previousState => ({ isClosed: !previousState.isClosed }));
  };

  render() {
    let renderLinks;
    renderLinks = navLinks.map(({ to, title }) => (
      <NavLink close={this.openDropdownHandler} key={title} to={to} title={title} />
    ));


    return (
      <HeaderStyled>
        <Navigation>
          <LogoFullStyledLink>
            VULCAN
          </LogoFullStyledLink>
          <ul>{renderLinks}</ul>
        </Navigation>
      </HeaderStyled>
    );
  }
}  

export default GuestHeader;