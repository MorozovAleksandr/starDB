import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ left, right }) => {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col mt-4">
                    {left}
                </div>
                <div className="col mt-4">
                    {right}
                </div>
            </div>
        </div>
    )
}

Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
}

export default Row;