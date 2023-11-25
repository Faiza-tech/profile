import { useState } from "react"

const CONTACTFORM = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  }


function ContactUs() {
    const [contactForm, setContactForm] = useState(CONTACTFORM)

    const handleChange = (event) => {
      const { name, value} = event.target
      setContactForm({...contactForm, [name]: value})
    }

    const handleSubmit = () => {
        event.preventDefault
        console.log(contactForm)
    }
  
  return (

    <>
 
     <div  className='Form'>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">First Name</label> <br />
        <input type="text" placeholder='First Name' required name='firstName' value={contactForm.firstName} onChange={handleChange}/> <br />

        <label htmlFor="">Last Name</label> <br />
        <input type="text" placeholder='Last Name' required name='lastName' value={contactForm.lastName} onChange={handleChange}/> <br />

        <label htmlFor="">Email</label> <br />
        <input type="email" placeholder='Email' required name='email' value={contactForm.email} onChange={handleChange}/><br />

        <label htmlFor="">Message</label> <br />
        <textarea name='message' id="" cols="30" rows="6" required  placeholder='Type your meassage here' value={contactForm.message} onChange={handleChange} ></textarea> <br />

        <button className='btn'>Sumbit</button>
      </form>
    </div>


    </>
  );
}

export default ContactUs;