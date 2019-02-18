import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const PlaceInput = ({ sedes, handleChange }) => {
    return (
        <div className="d-flex  justify-content-around">
            <p className="subTitle">{'Sede'}</p>
            {sedes.map((sede, index) =>
                <div key={index} className="d-flex justify-content-center">
                    <label htmlFor="customRadio1">{sede.name}</label>
                    <input onChange={handleChange} value={sede._id} type="radio" id="customRadio1" name="sede" />
                </div>
            )}
        </div>
    );
}

PlaceInput.propTypes = {
    sedes: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleChange: PropTypes.func.isRequired
}
export default PlaceInput;
