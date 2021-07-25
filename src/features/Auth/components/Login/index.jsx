
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { PropTypes } from 'prop-types';
// import { register } from 'features/Auth/userSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './../../userSlice';
import LoginForm from './../LoginForm/index';

Login.propTypes = {
    closeDialog: PropTypes.func,
};

function Login(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {

        try {

            const action = login(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);

            //Close dialog
            const { closeDialog } = props;
            if (closeDialog) {
                closeDialog();
            }

        } catch (error) {
            console.log('Fail to login', error);
            enqueueSnackbar(error.message, { variant: 'error' })

        }
    }
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;