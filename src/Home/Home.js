import React, { Component } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <div className='heroImage'>
                   <div className='heroImageMsg'>
                    <h2 className='heroPicTitle'>Pace Academy Taekwondo</h2>
                    <h1 className='heroPicSubTitle'>Creating 
                    Opportunity</h1>
                    <Link to='/joinnow' className='homeJoinBtn'>Join Now</Link>
                   </div>
                </div>
                <div className='section1'>
                    <h1 className='sec1Title1'>
                        Creating <span style={{color:'#E5B02C'}}>Opportunity</span>  in all Areas of Life
                    </h1>
                </div>
                <div className='section2'>
                    Hello
                </div>
                <div className='section3'>
                    Hello
                </div>
            </div>
        );
    }
}

export default Home;