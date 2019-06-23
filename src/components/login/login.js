import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../../redux/action';
import register from './register/register';
import './login.css';


export default class login extends Component {
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
        axios.post('api/login', loginUser).then(({data}) => {
            if(data.success){
                this.props.setUser(data.user);
                this.props.history.push('/bikes')
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
    register = registerUser => {
        axios.post('api/register', registerUser).then(({data}) => {
            if(data.success){
                this.props.setUser(data.user);
                this.props.history.push('/bikes')
            }else{
                alert('Username already exists. Please login.')
            }
        });
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const register = this.state.isRegistered ? <Register register={this.register}/> : '';
        return (
            <div className='login'>
                {register}
                {this.state.isRegistered ? (
                    ''
                ) : (
                    <div>
                        <input
                            type='text'
                            placeholder='Username'
                            name='username'
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        <input
                            type='text'
                            placeholder='Password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <button onclick={this.login}>login</button>
                        <button onClick={this.isRegistered}>register</button>
                    </div>
                )}
            </div>
        )
    }
}

export default connect(state => state, actions)(login);