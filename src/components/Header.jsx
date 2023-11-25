/* eslint-disable no-unused-vars */
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        console.log('this is clicked ')
        setClick(!click)
        const menu = document.querySelector('.menu-list')
        console.log
        menu.style.display = 'block'
    }



    return (
        <>
            <header>
                <div>
                    <h1> PORTFOLIO</h1>
                </div>

                <nav className="header-list">
                    <ul>
                        <Link to='/home'>
                            <li> Home </li>
                        </Link>

                        <Link to='/aboutUs'>
                            <li> About </li>
                        </Link>

                        <Link to='/contactUs'>
                            <li> Contact us </li>
                        </Link>

                        <Link to='/Projects'>
                            <li> Project</li>
                        </Link>

                    </ul>
                </nav>


                <div className={`hamburger ${click ? 'show-menu' : ''}`} onClick={handleClick}>
                   
                    {click ?
                    ( <Link to='/home'>
                       <FaTimes size={30} style={{ color: 'white' }} />
                      </Link>
                      )  : 
                      (

                        <Link to='/menu'>
                         <FaBars size={30} style={{ color: 'white' }} />
                        </Link>
                      )
                       
                    }
                  
                </div>
        


            </header>

        </>
    )
}

export default Header