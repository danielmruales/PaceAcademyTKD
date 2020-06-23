import React from 'react';
import {Link} from 'react-router-dom'
// import logo from '../DMR.png'
import './Navbar.css'

const Nabar = (props) => {
    return (
        <div className='nav'>
            
            {/* <Link to='/'><img src={logo} alt='logo' className='logo'/></Link> */}
            <Link to='/projects' className='navItems'>Projects</Link>
            <Link to='/resume' className='navItems'>Resume</Link>
            <Link to='/about' className='navItems'>About</Link>
            {/* <Link to='/recommendations' className='navItems'>Recommendations</Link> */}
            <Link to='/contact' className='navItems'>Contact</Link>
        </div>
    );
};

export default Nabar;