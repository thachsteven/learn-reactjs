import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, makeStyles, TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[300]}`,
    },

    list: {
        padding: 0,
        margin: 0,
        listStyleType: 'none',

        '& > li ': {
            margin: 0,
        }
    }
}))

FilterByService.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

function FilterByService({ filters = {}, onChange }) {
    const classes = useStyles();

    const handleChange = (e) => {
        if (!onChange) return;

        const { name, checked } = e.target;
        onChange({ [name]: checked });
    }


    return (
        <div>
            <Box className={classes.root}>
                <Typography variant="subtitle2">Dịch vụ</Typography>

                <ul className={classes.list}>
                    {[
                        { value: 'isPromotion', label: 'Có khuyến mãi' },
                        { value: 'isFreeShip', label: 'Vận chuyển miễn phí' },

                    ].map((service) => (
                        <li key={service.value}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={Boolean(filters[service.value])}
                                        onChange={handleChange}
                                        name={service.value}
                                        color="primary"
                                    />
                                }
                                label={service.label}
                            />
                        </li>
                    ))}
                </ul>

            </Box>
        </div >
    );
}

export default FilterByService;