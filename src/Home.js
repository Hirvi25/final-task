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

  deleteUser = (id) => {
    return(
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
        }).then(alert(`User ${id} is Deleted`))    
    )
  }

  addData = (e) =>{
    e.preventDefault();
    return(
      axios.post('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: {
      title: e.target.elements.title.value,
      body: e.target.elements.description.value,
      userId: 1
      },
      headers: {
      "Content-type": "application/json; charset=UTF-8"
      }
      })
      .then(json => console.log(json.data))
      .then(alert('Data is Added....'))
       
    )
  }

  editData = (e) =>{
    e.preventDefault();
    return(
      axios.put(`https://jsonplaceholder.typicode.com/posts/${e.target.elements.id.value}`, {
      method: 'PUT',
      body: {
        id: e.target.elements.id.value,
        title:  e.target.elements.title.value,
        body: e.target.elements.description.value,
        userId: 1
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
      })
      .then(json => console.log(json.data))
      .then(alert('Data is Updated....'))
    )
  }

  render(){
    const arrayofuser = this.state.user.map((data, i) => {
      return (<Userdata key={this.state.user[i].id} id={this.state.user[i].id} title={this.state.user[i].title} body={this.state.user[i].body}
              deleteUser={() => this.deleteUser(this.state.user[i].id)}
              editData={this.editData}/>);
    })
    return (
      <div className="App">
        <header className="App-header">
        <Link to={{
              pathname:"/add",
              data:{
                addData:this.addData
              }
          }} >
          <button type="button" className="addButton mt4 grow pa44 bn"><IoIosAddCircle /> Add</button>
        </Link>
          <div className="userdatastyle "> {arrayofuser}</div>       
        </header>
      </div>
    );
  }

}

export default Home;