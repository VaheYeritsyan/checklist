import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const CalendarDate = ({ selectDate, setSelectDate }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (ranges) => {
        setSelectDate(ranges.selection);
        console.log(ranges.selection);
    };

    const initialState = {
        startDate: selectDate.startDate,
        endDate: selectDate.endDate,
        key: 'selection',
    };

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Close Calendar' : 'Open Calendar'}
            </button>
            {isOpen && (
                <div style={{ width: '300px' }}>
                    <DateRangePicker
                        ranges={[initialState]}
                        onChange={handleSelect}
                        showDateDisplay={false}
                        showMonthArrow={false}
                        months={1}
                        direction="horizontal"
                        minDate={today}
                        style={{
                            width: '300px',
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default CalendarDate;
