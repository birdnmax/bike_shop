import React, { Component } from 'react';
import axios from 'axios';
import nav from '../../nav/nav';
import bike from './bike/bike';
import './bike_list.css';

export default class bike_list extends Component {
    state = {
        bikes: []
    };

    componentDidMount(){
        axios.get('/api/bikes')
        .then(({data}) => {
            if(data.success){
                this.setState({
                    bikes: data.bikes
                })
            }else if (!data.isLoggedIn){
                this.props.history.push('/')
            }else{
                alert('Error 404')
            }
        })
    }
    render() {
        const bikes = this.state.bikes.map((e, r) => {
            return <bike key={e.id} id={e.id} name={e.name} price={e.price} description={e.description} img_url={e.img_url}/>
        })
        return (
            <div className='bikeList'>
                {bikes}
            </div>
        )
    }
}
