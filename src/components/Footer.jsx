import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import React from 'react'

function Footer() {
    return (
        <footer>
            <div>
                <h1> Get In Touch</h1>
                <p> Connect with us on social media to stay updated on our <br /> latest projects and adventures. We'd love to hear from you! </p>
                <div className="social">
                <FaFacebook size={30} style={{ color: 'white', marginRight: '20px' }} />
                <FaLinkedin size={30} style={{ color: 'white', marginRight: '20px' }} />
                <FaGithub size={30} style={{ color: 'white', marginRight: '20px' }} />
               
            </div>
            </div>

        </footer>
    )
}

export default Footer