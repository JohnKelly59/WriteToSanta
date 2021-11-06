import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

const ContactUs = (props) => {
  console.log(props.con)
  const form = useRef();

  const [open, setOpen] = useState(false)

  
 
  function press(){
    setOpen(true)
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7gxiymk', 'template_d1bjuti', form.current, 'user_MAPnewD6fcXNOZxvQGLnv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className="send" ref={form} onSubmit={sendEmail}>
      <input onClick={press} name="from_name" placeholder="Name" autocomplete="off"/>
      {open ?
      <input className="mail"  type="email"  name="user_email" placeholder="e-Mail" autocomplete="off"/>
      : null}
      {open ?
      <textarea name="message" value={props.stuff} />
      : null}
     <Zoom in={open}><Fab type="submit" onClick={props.restart}><SendIcon /></Fab></Zoom>
    </form>
  );
};

export default ContactUs;