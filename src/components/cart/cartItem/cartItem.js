import React from 'react'

export default function cartItem(props) {
    return (
        <div>
            <img src={props.img_url} alt='Bike Image'/>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <button onClick={()=>{props.removeFromCart(props.id)}}>Remove</button>
        </div>
    )
};
