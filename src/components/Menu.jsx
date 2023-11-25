import { Link } from "react-router-dom"
function Menu() {
    return(
        <>
        <div className="menu-list">
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

        </div>
        </>
    )
}

export default Menu