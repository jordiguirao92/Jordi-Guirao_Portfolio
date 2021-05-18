import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';

import {FooterStyled, AFooter}from '../styles/ui';


const Footer = () => {
 
    return(
        <FooterStyled>
         <AFooter>Jordi Guirao Muns</AFooter>
        </FooterStyled>
       
    )
}

export default Footer;