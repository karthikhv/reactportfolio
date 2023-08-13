import React from 'react'
import "./Form.css"
const Form =
 () => {
  return (
    <div className="form">
      <form >
        <label>Your Name</label>
        <input type="text" />
        <label>email</label>
        <input type="email" />
        <label>Subject</label>
        <input type="Subject" />
        <label>Message</label>
        <textarea placeholder='Type your message here' rows="6"></textarea>
        <button type='submit' className='btn' >Submit</button>
      </form>
    </div>
  )
}

export default Form
