import styled from 'styled-components';
import theme from '../styles/theme';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : '100vh'};
  background-image: linear-gradient(180deg, #323767 85%, ${theme.colors.white} 95%);
`
export const WrapperDiv = styled.div`
  min-height: 100vh;
`

export const Spacer = styled.div`
  height: ${props => {
    if (props.height) {
      return props.height;
    } else {
      return '20px';
    }
  }};
  width: ${props => {
    if (props.width) {
      return props.width;
    } else {
      return '0px';
    }
  }};
`

export const Flex = styled.div`
  width: ${props => props.width ? props.width : ''};
  max-width: ${props => props.maxWidth ? props.maxWidth : '1000px'};
  height: ${props => props.height ? props.height : ''};
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-between'};
  align-items: ${props => props.align ? props.align : 'center'};
  margin: ${props => props.margin ? props.margin : 'auto'};
  padding: ${props => props.padding ? props.padding : ''};
  background-color: ${props => props.backColor ? props.backColor : ''};
  background-image: ${props => props.backImage ? props.backImage : ''};
  color: ${props => props.color ? props.color : ''};
  flex-wrap: ${props => props.wrap ? props.wrap : 'nowrap'};
  border-radius: ${props => props.borderRadius ? props.borderRadius : ''};
`

//Footer
export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'center'};
  align-items: ${props => props.align ? props.align : 'center'};
  background-color: ${props => props.backColor ? props.backColor : theme.colors.white};
  height: ${props => props.height ? props.height : '100px'};
  /*position: fixed;
  bottom: 0;
  left:0;
  right: 0;
  margin-top: auto;*/
`

export const AFooter = styled.a`
  color: ${props => props.color ? props.color : 'transparent'};
  font-weight: 700;
  background-image: linear-gradient(90deg, #fc87da 0%, #cb94ef 36%, #41e0e7 70%, #28f6c2 100%);
  -webkit-background-clip: text;
  background-clip: text;

  &:hover{
      font-size: 20px;
  }
`

//Header
export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-around'};
  align-items: ${props => props.align ? props.align : 'center'};
  background-color: ${props => props.backColor ? props.backColor : '#323767'};
  width: 100%;
  
  @media (max-width: 580px) {
    flex-direction: column;
    padding-top: 20px;
    }
`

export const AHeader = styled.a`
  color: ${props => props.color ? props.color : 'transparent'};
  font-weight: 700;
  background-image: linear-gradient(90deg, #fc87da 0%, #cb94ef 36%, #41e0e7 70%, #28f6c2 100%);
  -webkit-background-clip: text;
  background-clip: text;

  &:hover{
      font-size: 20px;
  }
`

export const LinkHeader = styled(Link)`
  text-decoration: none;
  color: ${props => props.color ? props.color : '#fff'};
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 10px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:active{
        background-color: #fff;
        color: #323767;
        font-weight: 700;
    }

    &.activated {
        background-color: #fff;
        color: #323767;
        font-weight: 700;
    }

`;


//Home
export const H1 = styled.h1`
  color: ${props => props.color ? props.color : 'transparent'};
  font-weight: 800;
  margin: 10px 0px;
  background-image: linear-gradient(90deg, #fc87da 0%, #cb94ef 36%, #41e0e7 70%, #28f6c2 100%);
  -webkit-background-clip: text;
  background-clip: text;
`
export const H3 = styled.h3`
  color: ${props => props.color ? props.color : 'white'};
  margin: ${props => props.margin ? props.margin : '10px 0px'};;
  font-weight: ${props => props.weight ? props.weight : '500'};
`
export const H3Colored = styled.h3`
  color: ${props => props.color ? props.color : 'transparent'};
  margin: ${props => props.margin ? props.margin : '10px 0px'};
  font-weight: ${props => props.weight ? props.weight : '500'};
  background-image: linear-gradient(90deg, #fc87da 0%, #cb94ef 36%, #41e0e7 70%, #28f6c2 100%);
  -webkit-background-clip: text;
  background-clip: text;
`
export const H4 = styled.h4`
  color: ${props => props.color ? props.color : 'white'};
  margin: ${props => props.margin ? props.margin : '10px 0px'};;
  font-weight: ${props => props.weight ? props.weight : '500'};
`

export const FlexHome = styled.div`
  width: ${props => props.width ? props.width : ''};
  height: ${props => props.height ? props.height : ''};
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'column'};
  justify-content: ${props => props.justify ? props.justify : ''};
  align-items: ${props => props.align ? props.align : 'flex-start'};
  margin: ${props => props.margin ? props.margin : '0px'};
  padding: ${props => props.padding ? props.padding : ''};
  background-color: ${props => props.backColor ? props.backColor : ''};
  color: ${props => props.color ? props.color : ''};
  flex-wrap: ${props => props.wrap ? props.wrap : 'nowrap'};
`
export const FlexHomeContent = styled.div`
  width: ${props => props.width ? props.width : ''};
  height: ${props => props.height ? props.height : ''};
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-evenly'};
  align-items: ${props => props.align ? props.align : 'center'};
  margin: ${props => props.margin ? props.margin : ''};
  padding: ${props => props.padding ? props.padding : ''};
  background-color: ${props => props.backColor ? props.backColor : ''};
  color: ${props => props.color ? props.color : ''};
  flex-wrap: ${props => props.wrap ? props.wrap : 'nowrap'};
  

  @media (max-width: 580px) {
    flex-direction: column;
    }
`

export const ImageHome = styled.img`
  height: ${props => props.height ? props.height : '200px'};
  max-width: ${props => props.maxWidth ? props.maxWidth : '100%'};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '15%'};
  width: ${props => props.width ? props.width : ''};
  margin: ${props => props.margin ? props.margin : '0px'};

  &:hover{
    transform: scale(1.2);
  }
`

export const ImageHomeCode = styled.img`
  height: ${props => props.height ? props.height : '850px'};
  max-width: ${props => props.maxWidth ? props.maxWidth : ''};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '2%'};
  width: ${props => props.width ? props.width : 'auto'};
  margin: ${props => props.margin ? props.margin : ''};

  @media (max-width: 580px) {
    height: 450px;
    }

`

//About
export const FlexAboutCard = styled.div`
  width: ${props => props.width ? props.width : '80%'};
  max-width: ${props => props.maxWidth ? props.maxWidth : '1000px'};
  height: ${props => props.height ? props.height : ''};
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-evenly'};
  align-items: ${props => props.align ? props.align : 'stretch'};
  margin: ${props => props.margin ? props.margin : '20px'};
  padding: ${props => props.padding ? props.padding : ''};
  background-color: ${props => props.backColor ? props.backColor : ''};
  color: ${props => props.color ? props.color : ''};
  flex-wrap: ${props => props.wrap ? props.wrap : 'nowrap'};
  border: ${props => props.borderSize ? props.borderSize : '3px'} solid ${props => props.colorBorder ? props.colorBorder : 'grey'};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '10px'};

  @media (max-width: 580px) {
    flex-direction: column;
    }
`

export const P = styled.p`
  color: ${props => props.color ? props.color : 'white'};
  margin: ${props => props.margin ? props.margin : '0px'};
  font-weight: ${props => props.weight ? props.weight : ''};
  font-style: ${props => props.fontstyle ? props.fontstyle : ''};
`
export const ImageProfileAbout = styled.img`
  height: ${props => props.height ? props.height : '220px'};
  max-width: ${props => props.maxWidth ? props.maxWidth : ''};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '2%'};
  width: ${props => props.width ? props.width : 'auto'};
  margin: ${props => props.margin ? props.margin : ''};

  @media (max-width: 580px) {
    height: auto;
    }

`



//Contact
export const Input = styled.input`
  width: ${props => props.width ? props.width : '80%'};
  max-width: ${props => props.maxWidth ? props.maxWidth : '1000px'};
  height: ${props => props.height ? props.height : 'auto'};
  border: 1px solid ${props => props.colorBorder ? props.colorBorder : theme.colors.primary};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '7px'};;
`

export const TextArea = styled.textarea`
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  border: 1px solid ${props => props.colorBorder ? props.colorBorder : theme.colors.primary};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '7px'};;
`
 
