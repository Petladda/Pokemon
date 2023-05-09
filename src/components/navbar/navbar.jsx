import { Link } from "react-router-dom"
//import './navbar.css'


export const Navbar = () =>{
    return (
        <div className="flex p-4 justify-around mb-6 mt-1.5 bg-amber-600/70">
            <Link to="/"> HOME</Link>
            <Link to="/about"> ABOUT</Link>
            <Link to=""> CONTACT </Link>
            <Link to=""> SETTING</Link>

        </div>
    )
} 