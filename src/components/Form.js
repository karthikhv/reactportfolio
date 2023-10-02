import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Form.css"
const Form = () => {
  const form = useRef();
  const [message, setMessage] = useState(''); // To hold and display the confirmation or error message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kyuvr5w', 'template_wkh6ovg', form.current, 'A_7aZV3mKHwKBZrJ5')
      .then((result) => {
          console.log(result.text);
          form.current.reset(); // Clear the form
          setMessage('Message sent successfully!'); // Set success message
      }, (error) => {
          console.log(error.text);
          setMessage('Failed to send the message.'); // Set error message
      });
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail} className="email-form">
        <div className="input-group">
          <label className="input-label">Name</label>
          <input type="text" name="from_name" className="input-field" />
        </div>
        <div className="input-group">
          <label className="input-label">Email</label>
          <input type="email" name="user_email" className="input-field" />
        </div>
        <div className="input-group">
          <label className="input-label">Message</label>
          <textarea name="message" className="textarea-field"></textarea>
        </div>
        <input type="submit" value="Send" className="submit-button" />
      </form>
      {message && <p className="status-message">{message}</p>}
    </div>
  )
  
}

export default Form;
