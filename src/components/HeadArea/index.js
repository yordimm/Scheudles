import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const HeadArea = ({ title }) => {
    return (
        <div className="header">
            <p>{title}</p>
        </div>
    );
}

HeadArea.propTypes = {
    title: PropTypes.string,
}
export default HeadArea;
