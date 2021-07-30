import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress } from '@material-ui/core';
import { Typography } from '@material-ui/core/';
import { LockOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { makeStyles } from '@material-ui/core';

// import { PasswordField } from 'components/form-controls/PasswordFiled';
import InputField from './../../../../components/form-controls/InputField/index';
import PasswordField from './../../../../components/form-controls/PasswordFiled/index';



const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        paddingTop: theme.spacing(4),
    },

    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },

    title: {
        textAlign: 'center',
        margin: theme.spacing(2, 0, 3, 0)
    },

    submit: {
        margin: theme.spacing(3, 0, 2, 0)
    },

    progress: {
        position: 'absolute',
        top: theme.spacing(1),
        left: 0,
        right: 0,

    }


}))


LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {
    const classes = useStyles();
    const schema = yup.object().shape({

        identifier: yup.string()
            .required('Please enter your email')
            .email('please enter a valid email'),

        password: yup.string()
            .required('Please enter your password'),


    });

    const form = useForm({
        defaultValues: {

            identifier: '',
            password: '',

        },

        resolver: yupResolver(schema),

    });

    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }

    }

    const { isSubmitting } = form.formState;

    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.progress} />}

            <Avatar className={classes.avatar}>
                <LockOutlined>

                </LockOutlined>
            </Avatar>

            <Typography className={classes.title} component="h3" variant="h5">
                Sign In
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>

                <InputField name="identifier" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />

                <Button

                    disabled={isSubmitting}
                    type="submit"
                    className={classes.submit} variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                >
                    Sign In
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;