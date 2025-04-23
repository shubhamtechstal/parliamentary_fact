import * as React from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import isWeekend from 'date-fns/isWeekend';
import format from 'date-fns/format';
import { isValid, parseISO } from 'date-fns';

export default function CustomFilterDatePicker({
  sessionDatesData = [],
  handleDateChange,
  selectedDates,
}) {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const validDateSet = new Set(sessionDatesData);

  const defaultMonth = React.useMemo(() => {
    if (sessionDatesData.length > 0) {
      const first = parseISO(sessionDatesData[0]);
      return isValid(first) ? first : null;
    }
    return null;
  }, [sessionDatesData]);

  // 👇 Auto-select the first date if none selected
  React.useEffect(() => {
    if (selectedDates.length > 0 && !selectedDate) {
      const first = parseISO(selectedDates[0]);
      if (isValid(first)) {
        setSelectedDate(first);
        handleDateChange(format(first, 'yyyy-MM-dd'));
      }
    } else if (sessionDatesData.length > 0 && !selectedDate) {
      const first = parseISO(sessionDatesData[0]);
      if (isValid(first)) {
        setSelectedDate(first);
        handleDateChange(format(first, 'yyyy-MM-dd'));
      }
    }
  }, [sessionDatesData, selectedDates]);

  const shouldDisableDate = (date) => {
    const formatted = format(date, 'yyyy-MM-dd');
    return !validDateSet.has(formatted) || isWeekend(date);
  };

  const onDateChange = (newValue) => {
    if (newValue) {
      const formatted = format(newValue, 'yyyy-MM-dd');
      setSelectedDate(newValue);
      handleDateChange(formatted);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Select Date"
        value={selectedDate}
        onChange={onDateChange}
        shouldDisableDate={shouldDisableDate}
        defaultCalendarMonth={defaultMonth}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
