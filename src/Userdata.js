import React from 'react';
import 'tachyons';
import './Ustyle.css';

const Userdata = (props) =>{
    
    return(
        <div className="data  ma1 bg-white black-90 dib pa1 tc">
            <p className="title">  {props.title}</p>
        </div>
    );
}

export default Userdata;