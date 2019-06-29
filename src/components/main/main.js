import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from '../../nav/nav';
import './main.css';

export default class main extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className='main'>
                    <div className='box1'>
                        <Link to={`/about`}>About Us</Link>
                        <div className='img1'>
                            <img className='img1' src='https://www.backpackerguide.nz/wp-content/uploads/2016/03/9859-Lake-Wakatipu-Around-the-Mountains-cycle-Trail-Southland.jpg'/>
                        </div>
                    </div>
                    <div className='box2'>
                        <div className='img2'>
                            <img src='https://cdn.shopify.com/s/files/1/2081/1519/products/1600x1067_US_B_Blue_PROFILE.jpg?v=1545814321'/>
                        </div>
                        <Link to={`/bikes`}>Bikes for Sale</Link>
                    </div>
                </div>
            </div>
        )
    }
}
