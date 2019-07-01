import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../../redux/action';
import Register from './register/register';
import './login.css';


class login extends Component {
    state = {
        username: '',
        password: '',
        loggedIn: false
    };

    login = () => {
        const loginUser = {
            username: this.state.username,
            password: this.state.password
        };
        axios.post('/auth/login', loginUser).then(({data}) => {
            if(data.success){
                this.props.setUser(data.user);
                this.props.history.push('/')
            }else{
                alert('Username or password did not match our records.')
            }
        });
    };
    isRegistered = () => {
        this.setState({
            isRegistered: true
        });
    };
    // register = registerUser => {
    //     axios.post('/auth/register', registerUser).then(({data}) => {
    //         if(data.success){
    //             this.props.setUser(data.user);
    //             this.props.history.push('/bikes')
    //         }else{
    //             alert('Username already exists. Please login.')
    //         }
    //     });
    // };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const register = this.state.isRegistered ? <Register register={this.state.register}/> : '';
        return (
            <div>
                {register}
                {this.state.isRegistered ? (
                    ''
                ) : (
                    <div className='login-box'>
                        <div  className='login-values'>
                            Username
                            <input
                                type='text'
                                placeholder='Username'
                                name='username'
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                            Password
                            <input
                                type='password'
                                placeholder='Password'
                                name='password'
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            <button type='submit' onClick={this.login}>Login</button>
                            <Link to='/register' className='link'>Register</Link>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default connect(state => state, actions)(login);