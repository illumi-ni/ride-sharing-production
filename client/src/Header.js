import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// import { SearchIcon } from "@material-ui/icons/Search"

class Header extends Component{
    render(){  

    return(
        <div className='header'>
             <header id="header" class="fixed-top d-flex align-items-center">
             <div class="container d-flex align-items-center justify-content-between">

            <div class="logo">
                <h1>Ride Sharing</h1>
            
               
            </div>

                <nav id="navbar" class="navbar">
                    <ul>
                    <Link to ="/">
                    <li>Home</li>
                    </Link>
                    <Link to ="/about">
                    <li>About</li> 
                    </Link>
                    <Link to ="/service">
                    <li>Services</li>
                    </Link>
                   <Link to ="/portfolio">
                   <li>Portfolio</li>
                   </Link>
                    <Link to = '/booking'>
                    <li>Booking</li> 
                    </Link>
                    <Link to="/contact">
                    <li>Contact</li>
                    </Link>
                    
                   
                    </ul>
                    {/* <i class="bi bi-list mobile-nav-toggle"></i> */}
                </nav>

                </div>
            </header>
       </div>
    )
    
 }
}
export default Header;