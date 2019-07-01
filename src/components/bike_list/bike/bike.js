import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './bike.css';

export default function bike(props) {

    

    return (
        <div className='bike'>
            <Link to={`/bike/${props.id}`}>
                <img src={props.img_url} alt='Bike'/>
                <h2>{props.name}</h2>
                <h2>{props.price}</h2>
                <h4>{props.description}</h4>
                {/* <button onClick={this.addToCart}>Add to Cart</button> */}
            </Link>
        </div>
    )
}
