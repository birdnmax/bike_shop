import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from '../../nav/nav';
import './main.css';

export default class main extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className='main-boxes'>
                    <div className='about-box'>
                        <div className='text-box'>
                            <Link to={`/about`}>About Us</Link>
                        </div>
                        <div className='about-image'>
                            <img className='img1' src='https://www.backpackerguide.nz/wp-content/uploads/2016/03/9859-Lake-Wakatipu-Around-the-Mountains-cycle-Trail-Southland.jpg' className='about-image'/>
                        </div>
                    </div>
                    <div className='bikes-box'>
                        <div className='bikes-image'>
                            <img src='https://cdn.shopify.com/s/files/1/2081/1519/products/1600x1067_US_B_Blue_PROFILE.jpg?v=1545814321' className='bikes-image'/>
                        </div>
                        <div className='text-box'>
                            <Link to={`/bikes`}>Bikes for Sale</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
