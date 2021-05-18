import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Slide from 'react-reveal/Slide';

import MainLayout from '../componets/layout/MainLayout'
import {H1, H3, Spacer, FlexHome, ImageHome, FlexHomeContent, ImageHomeCode, Flex} from '../styles/ui';
import profileImage from '../images/IMG_0209.jpg'
import developerImage from '../images/Developer.png'


const HomePage = () => {
 
    return(
        <>
           <MainLayout>
           <Spacer height='40px'/>
           <Slide right duration={2000}>
            <FlexHomeContent>
                    <FlexHome margin='40px'>
                        <Slide left duration={2000}>
                            <H3>Hello, I am</H3>
                            <H1>JORDI GUIRAO MUNS</H1>
                            <H3>Blockchain & DLTs Engineer and Front End Developer</H3>
                        </Slide>
                    </FlexHome>
                    <ImageHome src={profileImage}/>               
            </FlexHomeContent>
            <Spacer height='100px'/>
            <Flex justify='center'>
             <ImageHomeCode src={developerImage}/>
            </Flex>
           </Slide>
           <Spacer height='40px'/>
          </MainLayout>  
        </>
    )
}

export default HomePage;