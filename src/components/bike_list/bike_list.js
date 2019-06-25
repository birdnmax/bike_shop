import React, { Component } from 'react';
import axios from 'axios';
import bike from './bike/bike';

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
            return <bike key={e.id} id={e.id} name={e.name} price={e.price} desc={e.desc} img_url={e.img_url}/>
        })
        return (
            <div className='bikeList'>
                {bikes}
            </div>
        )
    }
}
