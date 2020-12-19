import React from 'react';
import {Link} from "react-router-dom";
import LoginUI from '../../layout/Login';
import useForm from './useForm';

function LoginComponent() {
    return (
        <div>
          
          <LoginUI form={useForm()}/>
           

        </div>
    )
}

export default LoginComponent
