import { useState} from 'react';
import Slide from 'react-reveal/Slide';
import emailjs from 'emailjs-com';
import Alert from '@material-ui/lab/Alert';

import MainLayout from '../componets/layout/MainLayout'
import {Button, Input, Label, TextArea, P, Spacer, Flex} from '../styles/ui';
const {REACT_APP_SERVICEID, REACT_APP_TEMPLATEID, REACT_APP_USERID } = process.env;





const ContactPage = () => {
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        message: ''
    });
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorInput, setErrorInput] = useState(false);

    const sendEmail = (event) => {
        event.preventDefault();
        setEmailSuccess(false);
        setErrorEmail(false);
        setErrorInput(false);
        if(formData.name && formData.email && formData.message) {
            emailjs.sendForm(REACT_APP_SERVICEID, REACT_APP_TEMPLATEID, event.target, REACT_APP_USERID)
            .then((result) => {
                console.log(result.text);
                setEmailSuccess(true);
            }, (error) => {
                console.log(error.text);
                setErrorEmail(true);
            });
        } else {
            setErrorInput(true, 'Please fill all fields, thanks :)')
        } 
      };
  
 
    return(
        <>
           <MainLayout>
           <Spacer height='150px'/>
           <Slide up duration={2000}>
            <Flex width='100%' justify='center' direction='column'>
                <form onSubmit={sendEmail}>
                    <Label htmlFor='name'>Name</Label>
                    <Input width='100%' 
                            height='40px' 
                            id='name' 
                            name='name' 
                            type='text' 
                            placeholder='Name' 
                            value={formData.name} 
                            onChange={(event) => {
                                setFormData({...formData, name: event.target.value });}}
                            /> 
                    <Spacer height='30px'/>
                    <Label htmlFor='email'>Email</Label>   
                    <Input width='100%' 
                            height='40px' 
                            id='email' 
                            name='email' 
                            type='email' 
                            placeholder='Email' 
                            value={formData.email}
                            onChange={(event) => {
                                setFormData({...formData, email: event.target.value });}}
                            /> 
                    <Spacer height='30px'/>
                    <Label htmlFor='email'>Message</Label> 
                    <TextArea width='100%' height='100px' 
                                id='message' 
                                name='message' 
                                type='text' 
                                rows="4" 
                                cols="50"
                                placeholder='Write your message'
                                value={formData.message}
                                onChange={(event) => {
                                    setFormData({...formData, message: event.target.value });}}
                            />
                    <Spacer height='30px'/>
                    {errorEmail && <Alert severity="error">&nbsp;Sorry, a problem has occurred. Try again or contact me by LinkedIn or jordigm92@gmail.com</Alert>}
                    {errorInput && <Alert severity="error">&nbsp;Please fill all fields, thanks :)</Alert>}
                    {emailSuccess && <Alert severity="success">&nbsp;Thanks for contact me. I will answer as soon as possible</Alert>}
                    <Spacer height='10px'/>
                    <Button>Contact me</Button>   
                </form>
                
            </Flex>
           </Slide>
           <Spacer height='40px'/>
          </MainLayout>  
        </>
    )
}

export default ContactPage;