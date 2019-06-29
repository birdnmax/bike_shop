import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../../../redux/action';
import './register.css';

class register extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    }

    register = () => {
        const registerUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('/auth/register', registerUser).then(({data}) => {
            if(data.success){
                this.props.setUser(data.user);
                this.props.history.push('/bikes')
            }else{
                alert('Invalid credentials.')
            }
        });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div className='register-box'>
                Username
                <input
                    type='text'
                    placeholder='Username'
                    name='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                Email
                <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    value={this.state.email}
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
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}

export default connect(state => state, actions)(register);