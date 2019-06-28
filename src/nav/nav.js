import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './nav.css';

export default function nav() {
    return(
        <div classname='nav_container'>
            <div classname='left'><Link to='/'><i>Home</i></Link></div>
            <div classname='right'><Link to='/about'><i>About</i></Link></div>
            <div classname='right'><Link to='/bike_list'><i>Bikes</i></Link></div>
            <div classname='right'><Link to='/cart'><i>Cart</i></Link></div>
            <div classname='right'><Link to='/'><i>logout</i></Link></div>
        </div>
    )
}
