import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Jump from 'react-reveal/Jump';

import {HeaderStyled, LinkHeader, AHeader}from '../styles/ui';


const Header = () => {
    const {pathname} = useLocation();
    console.log(pathname)
 
    return(
        <HeaderStyled>
        <Jump>
            <AHeader>JGM</AHeader>
        </Jump> 
         <ul>
          <LinkHeader className={pathname == '/' && 'activated'} to='/'>Home</LinkHeader>
          <LinkHeader className={pathname == '/about' && 'activated'} to='/about'>About</LinkHeader>
          <LinkHeader className={pathname == '/portfolio' && 'activated'} to='/portfolio'>Porfolio</LinkHeader>
          <LinkHeader className={pathname == '/contact' && 'activated'} to='/contact'>Contact</LinkHeader>
         </ul>
        </HeaderStyled>
       
    )
}

export default Header;