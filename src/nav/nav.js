import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import axios from 'axios';
import './nav.css';

function nav(props) {
    // const logout = () => {
    //     axios.post('/auth/logout')
    //     .then(data => {
    //         if(data.success){
    //             this.props.loginUser(data)
    //         }
    //     })
    // }

    if (props.location.pathname !== '/'){
        console.log('nav', props)
        return(
            <div className='nav_container'>
                <div className='left'>
                    <div><Link to='/'><i>Home</i></Link></div>
                </div>
                <div className='right'>
                    <div><Link to='/about'><i>About</i></Link></div>
                    <div><Link to='/bike_list'><i>Bikes</i></Link></div>
                    <div><Link to='/cart'><i>Cart</i></Link></div>
                    <div><Link to='/' onClick={props.logout}><i>Logout</i></Link></div>
                </div>
            </div>
        )
    }else{
        return null
    }
}

function mapStateToProps(state){
    return state
}

export default withRouter(connect(mapStateToProps)(nav));