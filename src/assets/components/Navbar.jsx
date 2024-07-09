import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPlane } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#"style={{fontSize:"1.5em", fontWeight: 'bold'}}>
        <FontAwesomeIcon icon={faPlane} style={{ marginRight: 10 ,fontSize: "1em"}} /> 
        Touro</a>
        <ul class="nav navbar-nav mx-auto nav-ul">
          <li class="nav-item">
            <a class="nav-link" href="#" style={{ color: "#000",fontSize: "1.5em", fontWeight: 'bold' }}>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{ color: "#000",fontSize: "1.5em", fontWeight: 'bold' }}>Category</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{ color: "#000" ,fontSize: "1.5em", fontWeight: 'bold'}}>Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{ color: "#000",fontSize: "1.5em", fontWeight: 'bold' }}>About Us</a>
          </li>
        </ul>
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link btn btn-outline-dark" href="#" style={{ color: "#fff", backgroundColor: "#ffa07a",marginRight:40,fontSize: "1.5em"}}>Login</a>
          </li>
        </ul>
      </nav>
      
    );

    
};

export default Navbar;