import React from 'react';
import './App.css';
import './Add.css'

class Add extends  React.Component{

    constructor(props){
        super(props);
            this.state ={
                title: this.props.location.data.title,
                description:this.props.location.data.body,
            } 
    }

    handle = (event) => {
        this.setState( {  [event.target.name] : [event.target.value] } )      
    }

    render(){
        return(
        <div className="App">
            <header className="App-header">
            
                <div className="addform">
                    <form onSubmit={this.props.location.data.id?this.props.location.data.editData:this.props.location.data.addData}>
                        <input name="id" type="hidden" value={ this.props.location.data.id? this.props.location.data.id: 101}/>
                        
                        <input className="form-control" type="text" name="title" placeholder="Title"
                            value={ this.state.title?this.state.title:'' } onChange={this.handle}/><br/>
                        <input className="form-control" type="text" name="description" placeholder="Description"
                            value={this.state.description?this.state.description:'' } onChange={this.handle}/><br/>
                        <input className="btn btn-primary my-1 grow" type="submit"/>
                    </form>
                </div>
            </header>
        </div>
        )
    }

}
export default Add;