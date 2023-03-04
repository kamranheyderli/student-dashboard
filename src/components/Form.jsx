import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Base_url } from '../utils/constant'
import axios from 'axios';
import swal from 'sweetalert';

export const Form = () => {
    const [userData, setUserData] = useState({
        name: "",
        surname: "",
        userName: "",
        password: "",

    })

    const handleChangeData = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const sendData = () => {
        axios.post(`${Base_url}/create-data`, userData)
        .then(() => {
            swal({
                title: "Good job", 
                text: "the data has been successfully created!", 
                type: "success"
              }).then(() => {
                window.location.reload();
              })
        }).catch(() => {
            swal("Unsuccesfull!", "error happened!", "error");
        })
    }
    const { name, surname, userName, password } = userData;


    return (
        <div className='form'>
            <div className="form-content">
                    <h1>LOGIN</h1>
                    <TextField id="outlined-basic" label="Name" variant="outlined" onChange={handleChangeData} name="name" />
                    <TextField id="outlined-basic" label="Surname" variant="outlined" onChange={handleChangeData} name="surname" />
                    <TextField id="outlined-basic" label="UserName" variant="outlined" onChange={handleChangeData} name="userName" />
                    <TextField type="password" id="outlined-basic" label="Password" variant="outlined" onChange={handleChangeData} name="password" />
                    <button disabled={name.length < 5} onClick={sendData}>Sign In</button>        
            </div >
        </div >
    )
}

export default Form