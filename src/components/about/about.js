import React, { Component } from 'react';
import Nav from '../../nav/nav';
import './about.css';

export default class about extends Component {
    render() {
        return (
            <div className='about'>
            <Nav/>
                <div className='heroimg'>
                    <img src='https://www.exploresquamish.com/files/dmo_experience/lead/GoatRidgeBikers-CC2224x800_0.jpg'/>
                </div>
                <h1>Who We Are</h1>
                <p>Lorem Ipsum</p>
            </div>
        )
    };
}
