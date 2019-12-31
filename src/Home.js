import React from 'react';
import './App.css';
import './Ustyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Userdata from './Userdata';
import 'tachyons';
import { IoIosAddCircle } from "react-icons/io";
import axios from 'axios';
import {Link} from 'react-router-dom';



class Home extends React.Component{

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
    // console.log(this.state);
    const arrayofuser = this.state.user.map((data, i) => {
      return (<Userdata key={this.state.user[i].id} id={this.state.user[i].id} title={this.state.user[i].title} body={this.state.user[i].body}/>);
    })

  return (
    <div className="App">
      <header className="App-header">
      <Link to={{
            pathname:"/add",
            data:{}
        }} >
        <button type="button" className="btn btn-warning mt4 grow shadow-4"><IoIosAddCircle /> Add</button></Link>
        <div className="userdatastyle "> {arrayofuser}</div>       
      </header>
    </div>
  );}
}

export default Home;
