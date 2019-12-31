import React from 'react';
import './App.css';
import './Add.css'
import axios from 'axios';


class Add extends  React.Component{

    constructor(props){
      super(props);
      if(this.props){
      this.state ={
        title: this.props.location.data.title,
        description:this.props.location.data.body,
      }
    }
    else{
        this.state ={
            title: '',
            description:'',
          }   
    }
    
    }

    render(){
        return(
        <div className="App">
            <header className="App-header">
                <div className="addform">
                    <form onSubmit={this.props.location.data.id?this.editData:this.addData}>
                        <input name="id" type="hidden" value={ this.props.location.data.id? this.props.location.data.id: 101}/>
                        
                        <input className="form-control" type="text" name="title" placeholder="Title"
                            value={ this.state.title } onChange={this.handle}/><br/>
                        <input className="form-control" type="text" name="description" placeholder="Description"
                            value={this.state.description } onChange={this.handle}/><br/>
                        <input className="btn btn-primary my-1 grow" type="submit"/>
                    </form>
                </div>
            </header>
        </div>
        )
    }


handle = (event) => {
    this.setState( {  [event.target.name] : [event.target.value] } )      
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
          .then(json => console.log(json))
          .then(alert('Data is Updated....'))
    )
}

}
export default Add;