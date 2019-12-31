import React from 'react';
import './App.css';
import './Add.css'
import axios from 'axios';

const Add =(props) =>{
   
    return(
    <div className="App">
      <header className="App-header">
            <div className="addform">
                <form onSubmit={props.location.data.id?editData:addData}>
                    <input name="id" type="hidden" value={ props.location.data.id? props.location.data.id: 101}/>
                    <input className="form-control" type="text" name="title" placeholder="Title"
                         value={ props.location.data.title? props.location.data.title: null}/><br/>
                    <input className="form-control" type="text" name="description" placeholder="Description"
                        value={ props.location.data.body? props.location.data.body: null}/><br/>
                    <input className="btn btn-primary my-1 grow" type="submit"/>
                </form>
            </div>
      </header>
    </div>
    )
}

const addData = (e) =>{
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

const editData = (e) =>{
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
          .then(json => console.log(json))
          .then(alert('Data is Updated....'))
    )
}


export default Add;