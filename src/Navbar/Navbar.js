import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../PaceLogo.png'
import './Navbar.css'

const Navbar = (props) => {
    return (
        <div className='nav'>
            
            <Link to='/'><img src={logo} alt='logo' className='logo'/></Link>
            <Link to='/projects' className='navItems'>Projects</Link>
            <Link to='/resume' className='navItems'>Resume</Link>
            <Link to='/about' className='navItems'>About</Link>
            <Link to='/joinnow' className='navItems'>Join Now</Link>
        </div>
    );
};

export default Navbar;