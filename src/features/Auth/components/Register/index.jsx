
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { PropTypes } from 'prop-types';
// import { register } from 'features/Auth/userSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import { register } from './../../userSlice';

Register.propTypes = {
    closeDialog: PropTypes.func,
};

function Register(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {

        try {
            //auto set username = email
            values.username = values.email;

            const action = register(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);

            //Close dialog
            const { closeDialog } = props;
            if (closeDialog) {
                closeDialog();
            }

            //do something here on register successfully 

            enqueueSnackbar('Register successfully', { variant: 'success' })

        } catch (error) {
            console.log('Fail to register', error);
            enqueueSnackbar(error.message, { variant: 'error' })

        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;