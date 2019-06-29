import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../../redux/action';
import Nav from '../../nav/nav';
import './bike_details.css';


class bike_details extends Component {
    state = {
        bike: {}
    };

    componentDidMount(){debugger
        axios.get(`/api/bike/${this.props.match.params.id}`).then(({data}) => {debugger
            if (data.success){
                this.setState({
                    bike: data.bike
                })
            }else if (!data.isLoggedIn){
                this.props.history.push('/')
            }else{
                alert('Error 404')
            }
        })
    };

    addToCart = () => {
        const bike = this.state.bike;
        axios.post('api/cart', {bike})
            .then(({data}) => {
                if (data.success){
                    this.props.history.push('/cart')
                }else if (!data.isLoggedIn){
                    this.props.history.push('/')
                }else{
                    alert('Error 404')
                }
            })
    };

    render() {
        return (
            <div className='details'>
                <Nav/>
                <div>
                    <img src={this.state.bike.img_url} alt='bike'/>
                    <h1>{this.state.bike.name}</h1>
                </div>
                <div>
                    <p>{this.state.bike.description}</p>
                    <h4>{this.state.bike.price}</h4>
                    <button onClick={this.addToCart}>Add to Cart</button>
                </div>
            </div>
        )
    };
};

export default connect(null, actions)(bike_details);