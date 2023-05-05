import { Link } from "react-router-dom"
import './navbar.css'


export const Navbar = () =>{
    return (
        <div className="navbar">
           
            <Link to="/"> HOME</Link>
            <Link to="/about"> ABOUT</Link>
            <Link to=""> CONTACT </Link>
            <Link to=""> SETTING</Link>

        </div>
    )
} 