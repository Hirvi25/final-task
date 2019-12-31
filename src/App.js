import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Ustyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Userdata from './Userdata';
import 'tachyons';
import { IoIosAddCircle } from "react-icons/io";
import axios from 'axios';


class App extends React.Component{

  constructor(){
    super();
    this.state ={
      user: []
    };
  };

  componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      this.setState ({user: res.data });
    });
  };

  render(){
    
    const arrayofuser = this.state.user.map((data, i) => {
      return (<Userdata title={this.state.user[i].title}/>);
    })

  return (
    <div className="App">
      <header className="App-header">
      
        <button type="button" className="btn btn-warning">
         <IoIosAddCircle /> Add
        </button>
        <div className="userdatastyle "> {arrayofuser}</div>
        
      </header>
    </div>
  );}
}

export default App;
