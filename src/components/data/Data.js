import React from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Date = ({ selectDate, setSelectDate }) => {
    const handleSelect = (ranges) => {
        setSelectDate(ranges.selection);
        console.log(ranges.selection);
    };

    const initialState = {
        startDate: selectDate.startDate,
        endDate: selectDate.endDate,
        key: 'selection',
    };

    return (
        <div style={{ width: '300px' }}>
            <DateRangePicker
                ranges={[initialState]}
                onChange={handleSelect}
                showDateDisplay={false}
                showMonthArrow={false}
                months={1}
                direction="horizontal"
                style={{
                    width: '300px',
                }}
            />
        </div>
    );
};

export default Date;
