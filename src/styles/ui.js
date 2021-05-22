import styled from 'styled-components';
import theme from '../styles/theme';
import { Link } from 'react-router-dom';


export const Wrapper = styled.div`
  width: ${props => props.width ? props.width : '100vh'};
  height: ${props => props.height ? props.height : '100vh'};
  background-image: linear-gradient(180deg, ${theme.colors.blue} 85%, ${theme.colors.white} 95%);
`
export const WrapperDiv = styled.div`
  min-height: 100vh;
  width: ${props => props.width ? props.width : '100vh'};
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
  background-image: ${theme.gradientPinkBlue};
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
  background-color: ${props => props.backColor ? props.backColor : theme.colors.blue};
  width: 100%;
  
  @media (max-width: 580px) {
    flex-direction: column;
    padding-top: 20px;
    }
`

export const AHeader = styled.a`
  color: ${props => props.color ? props.color : 'transparent'};
  font-weight: 700;
  background-image: ${theme.gradientPinkBlue};
  -webkit-background-clip: text;
  background-clip: text;

  &:hover{
      font-size: 20px;
  }
`

export const LinkHeader = styled(Link)`
  text-decoration: none;
  color: ${props => props.color ? props.color : theme.colors.white};
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 10px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:active{
        background-color: ${theme.colors.white};
        color: ${theme.colors.blue};
        font-weight: 700;
    }

    &.activated {
        background-color: ${theme.colors.white};
        color: ${theme.colors.blue};
        font-weight: 700;
    }

`;


//Home
export const H1 = styled.h1`
  color: ${props => props.color ? props.color : 'transparent'};
  font-weight: 800;
  margin: 10px 0px;
  background-image: ${theme.gradientPinkBlue};
  -webkit-background-clip: text;
  background-clip: text;
`
export const H3 = styled.h3`
  color: ${props => props.color ? props.color : theme.colors.white};
  margin: ${props => props.margin ? props.margin : '10px 0px'};;
  font-weight: ${props => props.weight ? props.weight : '500'};
`
export const H3Colored = styled.h3`
  color: ${props => props.color ? props.color : 'transparent'};
  margin: ${props => props.margin ? props.margin : '10px 0px'};
  font-weight: ${props => props.weight ? props.weight : '500'};
  background-image: ${theme.gradientPinkBlue};
  -webkit-background-clip: text;
  background-clip: text;
`
export const H4 = styled.h4`
  color: ${props => props.color ? props.color : 'white'};
  margin: ${props => props.margin ? props.margin : '10px 0px'};
  font-weight: ${props => props.weight ? props.weight : '500'};
  font-size: ${props => props.fontSize ? props.fontSize : ''};
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
  

  @media all and (max-width: 580px) {
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

  @media all and (max-width: 580px) {
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
  border: ${props => props.borderSize ? props.borderSize : '3px'} solid ${props => props.colorBorder ? props.colorBorder : theme.colors.grey};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '10px'};

  @media all and (max-width: 580px) {
    flex-direction: column;
    }
`

export const P = styled.p`
  color: ${props => props.color ? props.color : theme.colors.white};
  margin: ${props => props.margin ? props.margin : '0'};
  font-weight: ${props => props.weight ? props.weight : ''};
  font-style: ${props => props.fontstyle ? props.fontstyle : ''};
`
export const ImageProfileAbout = styled.img`
  height: ${props => props.height ? props.height : '220px'};
  max-width: ${props => props.maxWidth ? props.maxWidth : ''};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '2%'};
  width: ${props => props.width ? props.width : 'auto'};
  margin: ${props => props.margin ? props.margin : ''};

  @media all and (max-width: 580px) {
    height: auto;
    }

`



//Contact
export const Input = styled.input`
  width: ${props => props.width ? props.width : '80%'};
  max-width: ${props => props.maxWidth ? props.maxWidth : '1000px'};
  height: ${props => props.height ? props.height : 'auto'};
  border-image-source: ${theme.gradientPinkBlue};
  border-image-slice: 1;
  border-width: 3px;
`

export const TextArea = styled.textarea`
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  border-image-source: ${theme.gradientPinkBlue};
  border-image-slice: 1;
  border-width: 3px;
`
 
export const Label = styled.label`
  font-size:20px;
  color: ${props => props.color ? props.color : 'transparent'};
  background-image: ${theme.gradientPinkBlue};
  -webkit-background-clip: text;
  background-clip: text;
`

export const Button = styled.button`
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : '40px'};
  margin: ${props => props.margin ? props.margin : '0px'};
  background-image: ${theme.gradientPinkBlue};
  border: 0px solid;
  border-radius: ${props => props.borderRadius ? props.borderRadius : '5px'};
  color: ${props => props.color ? props.color : theme.colors.white};
  font-size:20px;
  cursor: pointer;

  &:hover {
    background-image: ${theme.gradientBluePink};
    transform: scale(1.1);
  }
  `

  //Portfolio
  export const Card = styled.div`
    width: ${props => props.width ? props.width : '80%'};
    max-width: ${props => props.maxWidth ? props.maxWidth : '800px'};
    height: ${props => props.height ? props.height : ''};
    display: flex;
    flex-direction: ${props => props.direction ? props.direction : 'row'};
    justify-content: ${props => props.justify ? props.justify : 'space-between'};
    align-items: ${props => props.align ? props.align : 'center'};
    margin: ${props => props.margin ? props.margin : '15px auto'};
    padding: ${props => props.padding ? props.padding : 'auto'};
    background-color: #707070;
    border: solid;
    border-image-source: ${theme.gradientPinkBlue};
    border-image-slice: 1;
    border-width: 3px;
    box-shadow: ${props => props.shadow ? props.shadow : '3px 3px 10px #DCDCDC'};
    cursor: ${props => props.cursor ? props.cursor : ''};
    flex-wrap: ${props => props.wrap ? props.wrap : 'nowrap'};

    @media all and (max-width: 580px) {
    flex-direction: column;
    }
  `

export const FlexCard = styled.div`
  width: ${props => props.width ? props.width : ''};
  max-width: ${props => props.maxWidth ? props.maxWidth : '1000px'};
  height: ${props => props.height ? props.height : ''};
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'column'};
  justify-content: ${props => props.justify ? props.justify : 'flex-start'};
  align-items: ${props => props.align ? props.align : 'flex-start'};
  margin: ${props => props.margin ? props.margin : '5px'};
  padding: ${props => props.padding ? props.padding : ''};
  background-color: ${props => props.backColor ? props.backColor : ''};
  background-image: ${props => props.backImage ? props.backImage : ''};
  color: ${props => props.color ? props.color : ''};
  flex-wrap: ${props => props.wrap ? props.wrap : 'nowrap'};
  border-radius: ${props => props.borderRadius ? props.borderRadius : ''};

`

export const TechCard = styled.div`
  width: ${props => props.width ? props.width : ''};
  max-width: ${props => props.maxWidth ? props.maxWidth : '1000px'};
  height: ${props => props.height ? props.height : ''}; 
  display: flex;
  flex-wrap: ${props => props.wrap ? props.wrap : 'wrap'};
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'flex-start'};
  align-items: ${props => props.align ? props.align : 'flex-start'};
  margin: ${props => props.margin ? props.margin : '5px 0px'};
  background-color: ${props => props.backColor ? props.backColor : ''};
  color: ${props => props.color ? props.color : ''};
`
export const TechElement = styled.div`
  margin: ${props => props.margin ? props.margin : '5px'};
  background-color: ${props => props.backColor ? props.backColor : theme.colors.blue};
  color: ${props => props.color ? props.color : theme.colors.white};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '20px'};
  padding: 10px;
  font-size: 12px;
  font-style: italic;
  font-weight: bold;

`