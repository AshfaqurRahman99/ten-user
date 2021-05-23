import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './User.css'


const User = (props) => {
    const {img, first_name, last_name, email, gender, income} = props.user;
    const profileStyle ={width:'200px', height:'200px', margin:'10px'}
    return (
        <div className='beginig-box'>
            <div className='user-box'>
            <div>
               <img style={profileStyle} src={img} alt="" /> 
            </div>
            <div>
                <h3>{first_name} {last_name}</h3>
                <p><b>Email:</b> {email}</p>
                <p><b>Gender: {gender} </b></p>
                <p><small><b> Income: {income}</b></small></p>
                <button  onClick={() => props.handleAddUser(props.user)} className='add-button'><FontAwesomeIcon icon={faPlus} />      Add Now</button>
            </div>  
        </div>
        </div>
    );
};

export default User;