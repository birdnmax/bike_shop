import React, {Component} from 'react';
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
       <header className="App-header">
         App
       </header>
     </div>
   );
 }
}
export default App;