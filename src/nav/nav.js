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
                    <div><Link to='/'><i>Home</i></Link></div>
                </div>
                <div className='right'>
                    <div><Link to='/about'><i>About</i></Link></div>
                    <div><Link to='/bikes'><i>Bikes</i></Link></div>
                    <div><Link to='/cart'><i>Cart</i></Link></div>
                    <div><Link to='/login' onClick={this.logout}><i>Logout</i></Link></div>
                </div>
            </div>
        )
    }
}

export default connect(state => state, actions)(Nav);