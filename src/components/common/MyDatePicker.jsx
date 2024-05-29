import React, { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import { DateRangePicker } from "@wojtekmaj/react-daterange-picker";
import CalendarIcon from "asset/icons/CalendarIcon";

function MyDatePicker({ onDateRangeChange }) {
  const currentDate = new Date();
  const oneMonthBefore = new Date(currentDate);
  oneMonthBefore.setMonth(oneMonthBefore.getMonth() - 1);

  const [dateRange, setDateRange] = useState([oneMonthBefore, currentDate]);
  const datePickerClassName = "my-date-picker";

  useEffect(() => {
    onDateRangeChange(dateRange);
  }, [dateRange, onDateRangeChange]);

  const handleDateChange = (newDateRange) => {
    setDateRange(newDateRange);
    onDateRangeChange(newDateRange);
  };

  return (
    <div>
      <DateRangePicker
        clearIcon={null}
        onChange={handleDateChange}
        calendarIcon={<CalendarIcon/>}
        value={dateRange}
        className={datePickerClassName}
        maxDate={currentDate}
        format="dd/MM/yyyy"
      />
    </div>
  );
}

export default MyDatePicker;
