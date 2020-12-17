import React from 'react';
import { Link } from "react-router-dom";
import RegisterUI from '../../layout/Register';
import useForm from './useForm';

function RegisterComponent() {
    return (
        <RegisterUI form={useForm()} />
    )
}

export default RegisterComponent
