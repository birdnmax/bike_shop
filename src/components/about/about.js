import React, { Component } from 'react';
import Nav from '../../nav/nav';
import './about.css';

export default class about extends Component {
    render() {
        return (
            <div>
            <Nav/>
            <div className='about'>
                <div className='heroimg'>
                </div>
                <h1>Who We Are</h1>
                <p>Lorem Ipsum</p>
            </div>
            </div>
        )
    };
}
