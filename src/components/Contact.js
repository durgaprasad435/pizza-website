import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';
function Contact() {
  return (
    // <div className='contact'>
    //     <div className='leftSide' 
    //     style={{backgroundImage:`url(${PizzaLeft})`}}>
            
    //     </div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='Enter Full Name..' type='text'/>
                <label htmlFor='email'>E Mail</label>
                <input name='email' placeholder='Enter Your Email..' type='text'/>
                <label htmlFor='message'>Message</label>
                <textarea rows='6' placeholder='Enter Message..' name='message'></textarea>
                <button type='submit'>Submit</button>
               
            </form>
        </div>
        
    // </div>
  )
}

export default Contact