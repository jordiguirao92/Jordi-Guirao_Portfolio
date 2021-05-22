import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEye} from '@fortawesome/free-solid-svg-icons';

import MainLayout from '../componets/layout/MainLayout'
import {TechElement, TechCard, FlexCard, Card, H4, P, Spacer, Flex} from '../styles/ui';
import {portfolio} from '../data/jordiPortfolio';


const PortfolioPage = () => {
 
    return(
        <>
           <MainLayout>
           <Spacer height='40px'/>
           <Slide up duration={2000}>
           <Flex width='100%' justify='center' direction='column'>
           {
            portfolio.map((project, index) => {
                return(
                    <Card>
                    <FlexCard width='100%'>
                        <Flex justify='flex-start' margin='0px 0px 10px 0px' width='100%'>
                            <H4 margin='5px 0px' weight='bold' color='black' fontSize='18px'>{project.project_name}</H4>
                            <Flex margin='0px 0px 0px auto'>
                                <a href={project.live_link ? project.live_link : ''} target='_blank'><FontAwesomeIcon icon={faEye} style={{ color: project.live_link ? 'rgb(153, 153, 255' : 'rgb(153, 153, 255, 0.15' }} size="2x"/></a>
                                <Spacer width='20px'/>
                                <a href={project.github_link && project.github_link} target='_blank'><FontAwesomeIcon icon={faGithub} style={{ color: 'black' }} size="2x"/></a>
                            </Flex>    
                        </Flex>
                        <P fontstyle='oblique'>{project.description}</P>
                        <TechCard>
                        {
                            project.technologies.map((tech, index) => {
                                return(
                                    <TechElement>{tech}</TechElement>
                                )
                            })
                        }
                        </TechCard>
                    </FlexCard>
                </Card>

                )
            })
           }
                

           </Flex>
            
            
           </Slide>
           <Spacer height='40px'/>
          </MainLayout>  
        </>
    )
}

export default PortfolioPage;