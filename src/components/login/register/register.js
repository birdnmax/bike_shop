import React, { Component } from 'react';
import './register.css';

export default class register extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    register = () => {
        const registerUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        this.props.register(registerUser)
    }

    render() {
        const inputs = Object.keys(this.state).map((e, i) => {
            return <input type="text" key={i} placeholder={e} name={e} value={this.state[e]} onChange={this.handleChange}/>
        })
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
