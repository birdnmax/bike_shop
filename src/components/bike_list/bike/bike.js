import React from 'react';
import {Link} from 'react-router-dom';
import './bike.css';

export default function bike(props) {
    return (
        <div>
            <Link to={`/details/${props.id}`}>
                <img src={props.img_url} alt='Bike image'/>
                <h2>{props.name}</h2>
                <h2>{props.price}</h2>
                <h4>{props.desc}</h4>
            </Link>
        </div>
    )
}
