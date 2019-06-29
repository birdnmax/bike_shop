import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/action';
import axios from 'axios';
import cartItem from './cartItem/cartItem'

class cart extends Component {
    componentDidMount(){
        axios.get('/api/cart')
        .then(({data}) => {
            if (data.success){
                this.props.setCart(data.cartItems);
            }else if (!data.isLoggedIn){
                this.props.history.push('/')
            }else{
                alert('Error 404')
            }
        });
    };
    removeFromCart = (id) => {
        axios.delete(`/api/cart/${id}`)
        .then(({data}) => {
            if (data.success){
                this.props.setCart(data.cartItems)
            }else if (!data.isLoggedIn){
                this.props.history.push('/')
            }else{
                alert('Error 404')
            }
        });
    };

    render() {
        const cartItems = this.props.cartItems.map((e) => {
            return <cartItem key={e.id} id={e.id} name={e.name} removeFromCart={this.removeFromCart} img_url={e.img_url} price={e.price}/>
        })
        return (
            <div className='cart'>
            Cart
                {cartItems}
            </div>
        )
    }
}

export default connect(state => state, actions)(cart);