import React from 'react';
import PropTypes from 'prop-types';
import Sugar from 'sugar';
import './index.css';

const DaysTable = ({ days, getDay }) => {
    console.log(days)
    return (
        <table className="table table-bordered table-hover">
            <tbody>
                {days.map((day, index) =>
                    <tr key={index}>
                        <td className='btn-day'
                            id={day.day}
                            onClick={getDay}>
                            <div className="circle" />
                            {Sugar.Date.format(new Date(Number(day.day)), '{Weekday}  {dd}')}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

DaysTable.propTypes = {
    days: PropTypes.arrayOf(PropTypes.object).isRequired,
    getDay: PropTypes.func.isRequired
}
export default DaysTable;
