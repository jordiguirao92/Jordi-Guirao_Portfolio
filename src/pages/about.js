import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


import MainLayout from '../componets/layout/MainLayout'
import {H1, H3, H3Colored, H4, P, Spacer, FlexAboutCard, ImageProfileAbout, Flex} from '../styles/ui';
import profileImage from '../images/IMG_1595.jpg'
import developerImage from '../images/Developer.png'
import {experience, organisations, education, certifications} from '../data/jordiData';


const AboutPage = () => {
    const [set, Set] = useState(true);
 
    return(
        <>
           <MainLayout>
           <Flex width='100%' justify='center' direction='column'>

            <FlexAboutCard backColor='grey'>
                    <ImageProfileAbout src={profileImage}/>
                    <Flex direction='column' align='flex-start' margin='10px 20px'>
                        <Flex justify='flex-start' width='100%'>
                            <H1>Jordi Guirao Muns</H1>
                            <Flex margin='0px 0px 0px auto' >
                                <a href='https://github.com/jordiguirao92' target='_blank'><FontAwesomeIcon icon={faGithub}  style={{ color: 'black' }} size="3x"/></a>
                                <Spacer width='30px'/>
                                <a href='https://www.linkedin.com/in/jordiguiraomuns/' target='_blank'><FontAwesomeIcon icon={faLinkedin}  size="3x"  style={{ color: '#0A66C2' }}/></a>
                            </Flex>  
                        </Flex>
                        <H3 color='black' weight='bold'>Front End Developer & Blockchain&DLTs Engineer</H3>
                        <P>I am Jordi Guirao, Engineer and Developer, specialized in Blockchain and Distributed Ledger Technology Engineering at the Blockchain Institute & Technology in Barcelona (BIT BCN) with an International MBA Master in Industrial Business and Administration. I have strong experience in Power Generation working in a world leading company in the sector. 
                            I speak Spanish, Catalan and English.</P>
                    </Flex>
            </FlexAboutCard>

            <Flex direction='column' width='80%' align='flex-start'>
                <H3Colored weight='bold'>EXPERIENCE</H3Colored>
                <Flex backImage='linear-gradient(90deg, #fc87da 0%, #cb94ef 36%, #41e0e7 70%, #28f6c2 100%);' width='100%' height='5px'/>
            </Flex>
            
            {experience.map((experience) => {
                if(true){
                    if(window.innerWidth > 580) {
                    return(
                        <FlexAboutCard direction='column' backColor='grey' margin='5px'>
                            <Flex margin='0px 10px'>
                                <H4 margin='5px 0px' weight='bold' color='black'>{experience.rol}</H4>
                                <P fontstyle='oblique'>{experience.startYear}-{experience.finishYear}</P>
                            </Flex>
                            <Flex margin='0px 10px'>
                                <H4 margin='0px' weight='bold'>{experience.company}</H4>
                                <P fontstyle='oblique'>{experience.location}</P>
                            </Flex>
                        </FlexAboutCard>
                    )
                    } else {
                        return(
                        <FlexAboutCard direction='column' backColor='grey' margin='5px'>
                                <H4 margin='0px 10px' weight='bold' color='black'>{experience.rol}</H4>
                                <H4 margin='0px 10px' weight='bold'>{experience.company}</H4>
                                <P margin='0px 10px' fontstyle='oblique'>{experience.location}</P>
                                <P margin='0px 10px' fontstyle='oblique'>{experience.startYear}-{experience.finishYear}</P>
                        </FlexAboutCard>
                     )
                    }
                }
                })}

            <Flex direction='column' width='80%' align='flex-start'>
                <H3Colored weight='bold'>ORGANISATIONS</H3Colored>
                <Flex backImage='linear-gradient(90deg, #fc87da 0%, #cb94ef 36%, #41e0e7 70%, #28f6c2 100%);' width='100%' height='5px'/>
            </Flex>
            {organisations.map((experience) => {
                if(true){
                    if(window.innerWidth > 580) {
                    return(
                        <FlexAboutCard direction='column' backColor='grey' margin='5px'>
                            <Flex margin='0px 10px'>
                                <H4 margin='5px 0px' weight='bold' color='black'>{experience.rol}</H4>
                                <P fontstyle='oblique'>{experience.startYear}-{experience.finishYear}</P>
                            </Flex>
                            <Flex margin='0px 10px'>
                                <H4 margin='0px' weight='bold'>{experience.company}</H4>
                                <P fontstyle='oblique'>{experience.location}</P>
                            </Flex>
                        </FlexAboutCard>
                    )
                } else {
                    return(
                        <FlexAboutCard direction='column' backColor='grey' margin='5px'>
                                <H4 margin='0px 10px' weight='bold' color='black'>{experience.rol}</H4>
                                <H4 margin='0px 10px' weight='bold'>{experience.company}</H4>
                                <P margin='0px 10px' fontstyle='oblique'>{experience.location}</P>
                                <P margin='0px 10px' fontstyle='oblique'>{experience.startYear}-{experience.finishYear}</P>
                        </FlexAboutCard>   
                    )
                  } 
                }
                }
                )}


            <Flex direction='column' width='80%' align='flex-start'>
                <H3Colored weight='bold'>EDUCATION</H3Colored>
                <Flex backImage='linear-gradient(90deg, #fc87da 0%, #cb94ef 36%, #41e0e7 70%, #28f6c2 100%);' width='100%' height='5px'/>
            </Flex>
            {education.map((study) => {
                if(true){
                    if(window.innerWidth > 580) {
                    return(
                        <FlexAboutCard direction='column' backColor='grey' margin='5px'>
                            <Flex margin='0px 10px'>
                                <H4 margin='5px 0px' weight='bold' color='black'>{study.rol}</H4>
                                <P fontstyle='oblique'>{study.startYear}-{study.finishYear}</P>
                            </Flex>
                            <Flex margin='0px 10px'>
                                <H4 margin='0px' weight='bold'>{study.company}</H4>
                                <P fontstyle='oblique'>{study.location}</P>
                            </Flex>
                        </FlexAboutCard>
                    )

                } else {
                    return(
                        <FlexAboutCard direction='column' backColor='grey' margin='5px'>
                                <H4 margin='0px 10px' weight='bold' color='black'>{study.rol}</H4>
                                <H4 margin='0px 10px' weight='bold'>{study.company}</H4>
                                <P margin='0px 10px' fontstyle='oblique'>{study.location}</P>
                                <P margin='0px 10px' fontstyle='oblique'>{study.startYear}-{study.finishYear}</P>
                        </FlexAboutCard>   
                    )   
                }
                }
                })}

                <Flex direction='column' width='80%' align='flex-start'>
                    <H3Colored weight='bold'>CERTIFICATION</H3Colored>
                    <Flex backImage='linear-gradient(90deg, #fc87da 0%, #cb94ef 36%, #41e0e7 70%, #28f6c2 100%);' width='100%' height='5px'/>
                </Flex>
                {certifications.map((certificate) => {
                    if(true){
                        if(window.innerWidth > 580) {
                        return(
                            <FlexAboutCard direction='column' backColor='grey' margin='5px'>
                                <Flex margin='0px 10px'>
                                    <H4 margin='5px 0px' weight='bold' color='black'>{certificate.rol}</H4>
                                    <P fontstyle='oblique'>{certificate.year}</P>
                                </Flex>
                                <Flex margin='0px 10px'>
                                    <H4 margin='0px' weight='bold'>{certificate.company}</H4>
                                    <P fontstyle='oblique'>{certificate.location}</P>
                                </Flex>
                            </FlexAboutCard>
                         )
                        } else {
                            return(
                                <FlexAboutCard direction='column' backColor='grey' margin='5px'>
                                        <H4 margin='0px 10px' weight='bold' color='black'>{certificate.rol}</H4>
                                        <H4 margin='0px 10px' weight='bold'>{certificate.company}</H4>
                                        <P margin='0px 10px' fontstyle='oblique'>{certificate.year}</P>
                                </FlexAboutCard>   
                            )   
                        }
                    }
                })}
           
           </Flex>
          </MainLayout>  
        </>
    )
}

export default AboutPage;