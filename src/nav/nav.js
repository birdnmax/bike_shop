import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import * as actions from '../redux/action';
import './nav.css';

class Nav extends Component{
    logout = () => {
        axios.post('/auth/logout')
        .then(res => {
            if(res.success){
                this.props.loginUser(res)
            }
        })
    }

    render(){
        return(
            <div className='nav_container'>
                <div className='left'>
                    <div><Link to='/'><p>Home</p></Link></div>
                </div>
                <div className='right'>
                    <div className='nav-link'><Link to='/about'><a>About</a></Link></div>
                    <div className='nav-link'><Link to='/bikes'><a>Bikes</a></Link></div>
                    <div className='nav-link'><Link to='/cart'><a>Cart</a></Link></div>
                    <div className='nav-link'><Link to='/login' onClick={this.logout}><a>Logout</a></Link></div>
                </div>
            </div>
        )
    }
}

export default connect(state => state, actions)(Nav);