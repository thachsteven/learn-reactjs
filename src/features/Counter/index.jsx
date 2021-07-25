import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './CounterSlice';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});

CounterFeature.propTypes = {

};



function CounterFeature(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);

    const handleIncreaseClick = () => {

        const action = increase(); //action creator
        dispatch(action);
    }

    const handleDecreaseClick = () => {

        const action = decrease(); //action creator
        dispatch(action);
    }

    return (
        <div>
            Counter: {count}

            <div>
                <Button className={classes.root} onClick={handleIncreaseClick}>Increase</Button>
                <Button className={classes.root} onClick={handleDecreaseClick}>Decrease</Button>
            </div>
        </div>
    );
}

export default CounterFeature;