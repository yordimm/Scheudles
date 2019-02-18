import React from 'react';
import PropTypes from 'prop-types';
import Sugar from 'sugar';
import './index.css';

const HoursTable = ({ hours }) => {
    return (
        <table className="table table-striped table-bordered table-hover d-flex justify-content-start">
            <tbody style={{ flexWrap: 'wrap', display: 'flex', flexDirection: 'column' }}>
                {hours.map((hour, index) =>
                    <div className="table-responsive">
                        <table key={index} className="table table-striped table-bordered table-hover">
                            <tr className="ctn-hour">
                                <label htmlFor="customRadio1">{Sugar.Date.format(new Date(Number(hour)), '%H:%M')}</label>
                                <input type="radio" id="customRadio1" name="hour" />
                            </tr>
                        </table>
                    </div>
                )}
            </tbody>
        </table>
    );
}

HoursTable.propTypes = {
    hours: PropTypes.arrayOf(PropTypes.number).isRequired
}
export default HoursTable;
