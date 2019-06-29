import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import main from './components/main/main';
import login from './components/login/login';
import register from './components/login/register/register';
import contact from './components/contact/contact';
import bike_list from './components/bike_list/bike_list';
import bike from './components/bike_list/bike/bike';
import cart from './components/cart/cart';
import cartItem from './components/cart/cartItem/cartItem';
import nav from './nav/nav';

import './App.css';
import axios from 'axios';


class App extends Component {

  componentDidMount = async () =>{
   const ping = await axios.get('/api/ping')
   console.log(ping.data)
 }
 
 render(){
   return (
     <div className="App">
      <nav/>
      <Router>
        <Switch>
          <Route path='/' exact component={login}/>
          <Route path='/main' component={main}/>
          <Route path='/register' component={register}/>
          <Route path='/contact' component={contact}/>
          <Route path='/bike_list' component={bike_list}/>
          <Route path='/bike/:id' component={bike}/>
          <Route path='/cart' component={cart}/>
          <Route path='/cartItem/:id' component={cartItem}/>
        </Switch>
      </Router>
     </div>
   );
 }
}
export default App;