import React from "react";
import {Link} from 'react-router-dom'
import App from "../../App";
import Home from "../Home/home";
import './NavBar.css'
const NavBar = function () {

    return  <div>

      <nav>
    <input type="checkbox" id="check"/>
    <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
    </label>
    <label class="logo"><img src="../../assets/Imagenes/flechamouse.png"/>Luban!</label>
    <ul>
        <Link to='/' > Inicio</Link>
        <Link to='/AboutUs' > Sobre nosotros</Link>
        {/* <li><a href="a">Inicio</a></li>
        <li><a href="sugerencias.html">Empleos</a></li>
        <li><a href="info.html">¿Cómo funciona?</a></li>
        <li><a href="registrarme.html">Registrarse</a></li>
        <li><a class="log" href="log-in.html">Log in</a></li> */}
    </ul>
</nav>
    </div>
}


export default NavBar