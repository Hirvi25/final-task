import React from 'react';
import 'tachyons';
import './Ustyle.css';
import { FaUserEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Userdata = (props) =>{
    
    return(
        <div>
            
            <div className="buttons">
                <button type="button" className="deletebutton grow" onClick={()=>deleteUser(props.id)}><MdDelete /></button>
                <Link to={{
                    pathname:"/add",
                    data:{
                        title:props.title,
                        body:props.body,
                        id:props.id
                    }
                }} >
                    <button type="button" className="editbutton grow" ><FaUserEdit /></button>
                </Link>
            </div>
            <div className="data  ma1 bg-white black-90 dib pa1 tc">
            
                <p className="title">  {props.title}</p>
                <p className="body">  {props.body}</p>
            </div> 
        </div> 
    );
}

const deleteUser = (id) => {
    return(
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
        }).then(alert('User is Deleted'))    
    )
}

export default Userdata;