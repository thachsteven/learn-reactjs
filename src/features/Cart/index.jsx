import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from './selectors';
import { formatPrice } from '../../utils';



CardFeature.propTypes = {

};

function CardFeature(props) {
    const cartTotal = useSelector(cartTotalSelector)

    return (
        <div>
            Cart Feature {formatPrice(cartTotal)}
        </div>
    );
}

export default CardFeature;