import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fabgithub} from '@fortawesome/free-solid-svg-icons';


import MainLayout from '../componets/layout/MainLayout'
import {H1, H3, P, Spacer, FlexAboutCard, ImageProfileAbout, Flex} from '../styles/ui';
import profileImage from '../images/IMG_1595.jpg'
import developerImage from '../images/Developer.png'


const AboutPage = () => {
 
    return(
        <>
           <MainLayout>
           <Flex width='100%' justify='center' direction='column'>
            <FlexAboutCard>
                    <ImageProfileAbout src={profileImage}/>
                    <Flex direction='column' align='flex-start' margin='10px 20px'>
                        <H1>Jordi Guirao Muns</H1>
                        <H3 color='black'>Front End Developer & Blockchain&DLTs Engineer</H3>
                        <P>I am Jordi Guirao, Engineer and Developer, specialized in Blockchain and Distributed Ledger Technology Engineering at the Blockchain Institute & Technology in Barcelona (BIT BCN) with an International MBA Master in Industrial Business and Administration. I have strong experience in Power Generation working in a world leading company in the sector. 
                            I speak Spanish, Catalan and English.</P>
                    </Flex>
            </FlexAboutCard>

            <FlexAboutCard>
             <H3>EXPERIENCE</H3>
             <FontAwesomeIcon icon={fabgithub} />
           </FlexAboutCard>

           </Flex>

           

          </MainLayout>  
        </>
    )
}

export default AboutPage;