import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

import MainLayout from '../componets/layout/MainLayout'
import {TechElement, TechCard, FlexCard, Card, H1, H3, H4, P, Spacer, FlexHome, ImageHome, FlexHomeContent, ImageHomeCode, Flex} from '../styles/ui';
import profileImage from '../images/IMG_0209.jpg'
import developerImage from '../images/Developer.png'


const PortfolioPage = () => {
 
    return(
        <>
           <MainLayout>
           <Spacer height='40px'/>
           <Slide up duration={2000}>
           <Flex width='100%' justify='center' direction='column'>
                <Card>
                    <FlexCard>
                        <Flex margin='0px 0px 0px 0px' width='100%'>
                            <H4 margin='5px 0px' weight='bold' color='black'>Project Name</H4>
                            <a href='https://github.com/jordiguirao92' target='_blank'><FontAwesomeIcon icon={faGithub} style={{ color: 'black' }} size="2x"/></a>

                        </Flex>
                        
                        <P fontstyle='oblique'>Description</P>
                        <TechCard>
                            <TechElement>JavaScript</TechElement>
                            <TechElement>JavaScript</TechElement>
                            <TechElement>JavaScript</TechElement>
                            <TechElement>JavaScript</TechElement>
                            <TechElement>JavaScript</TechElement>
                            <TechElement>JavaScript</TechElement>
                            <TechElement>JavaScript</TechElement>
                            <TechElement>JavaScript</TechElement>
                            <TechElement>JavaScript</TechElement>
                            <TechElement>JavaScript</TechElement>

                        </TechCard>

                    </FlexCard>
                </Card>

           </Flex>
            
            
           </Slide>
           <Spacer height='40px'/>
          </MainLayout>  
        </>
    )
}

export default PortfolioPage;