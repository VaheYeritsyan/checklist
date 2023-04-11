import React from "react";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

export default function Date(props) {
  const { selectDate, setSelectDate } = props; 
  // console.log(selectDate)
  return ( 
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoItem>
          <DateRangePicker
            disablePast
            calendars={1}
            values={selectDate}
            onChange={(newValue) => setSelectDate(newValue)}
          />
        </DemoItem>
      </LocalizationProvider>
    </div>
  );
}
