import * as React from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from "components/common/TextField";


export default function BasicTimePicker({ error = "", value, onChange, name = "", textFieldProps = {}, ...restProps }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    
        <TimePicker 
          value={value}
          onChange={onChange}
          {...restProps}
          renderInput={(params) => (
            <TextField
              {...params}
              {...textFieldProps}
              helperText={restProps.helperText}
              error={error}
            />
          )} />
   
    </LocalizationProvider>
  );
}
