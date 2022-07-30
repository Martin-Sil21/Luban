import React from "react";
import {Link} from 'react-router-dom'
import './NavBar.css'
const NavBar = function () {

    return <div className="navbar">
        <Link to = '/home'>Home</Link>
        <Link to = '/aboutus'>About Us</Link>
        <Link to = '/register'>Register</Link>
        <Link to = '/login'>Log In</Link>
        <Link to = '/sugestions'>Sugerencias</Link>
    </div>
}


export default NavBar