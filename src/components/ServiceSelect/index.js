import React from 'react';
import PropTypes from 'prop-types';
import '../PlaceInput/index.css';
import './index.css';

const ServiceSelect = ({ services, handleChange }) => {
  return (
    <div>
      <label className="subTitle">{'Prestación'}</label>
      <select className="custom-select" name="service" onChange={handleChange}>
        {services.map((service, index) => <option key={index} value={service._id} >{service.name}</option>)
        }
      </select>
    </div>
  );
}

ServiceSelect.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired
}
export default ServiceSelect;
