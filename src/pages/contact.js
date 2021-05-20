import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import emailjs from 'emailjs-com';
import dotenv from 'dotenv';
//rocess.env.DB_HOST
import MainLayout from '../componets/layout/MainLayout'
import {Input, TextArea, H1, H3, Spacer, FlexHome, ImageHome, FlexHomeContent, ImageHomeCode, Flex} from '../styles/ui';

const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }


const ContactPage = () => {
 
    return(
        <>
           <MainLayout>
           <Spacer height='40px'/>
           <Slide up duration={2000}>
            <Flex width='100%' justify='center' direction='column'>
                <form onSubmit={sendEmail}>
                    <Input width='100%' 
                            height='40px' 
                            id='name' 
                            name='name' 
                            type='text' 
                            placeholder='NAME' 
                            value='' 
                            onChange={(event) => {console.log(event.target.value) }}
                            /> 
                    <Spacer height='40px'/>   
                    <Input width='100%' 
                            height='40px' 
                            id='email' 
                            name='email' 
                            type='email' 
                            placeholder='EMAIL' 
                            value='' 
                            onChange={(event) => {console.log(event.target.value) }}
                            /> 
                    <Spacer height='40px'/>
                    <TextArea width='100%' height='100px' 
                                id='message' 
                                name='message' 
                                type='text' 
                                rows="4" 
                                cols="50"
                                placeholder='Write your message'
                                value=''
                                onChange={(event) => {console.log(event.target.value) }}
                            />
                </form>
            </Flex>
           </Slide>
           <Spacer height='40px'/>
          </MainLayout>  
        </>
    )
}

export default ContactPage;