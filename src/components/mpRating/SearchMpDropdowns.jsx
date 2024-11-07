import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Typography } from '@mui/material';

export default function SearchMpDropdowns() {
  const [formValues, setFormValues] = React.useState({
    state: '',
    search: '',
    district: '',
    place: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const formControlStyles = { minWidth:'23%',width:{xs:'100%',md:'max-content'}, borderRadius: '13px', fontSize: '14px' };

  const dropdownOptions = [
    {
      name: 'state',
      label: 'Select State & UT',
      options: ['Ladakh', 'Kashmir', 'Leh'],
    },
    {
      name: 'search',
      label: 'Search by',
      options: ['state 1', 'state 2', 'state 3'],
    },
    {
      name: 'district',
      label: 'Select Constituency/District',
      options: ['District 1', 'District 2', 'District 3'],
    },
    {
      name: 'place',
      label: 'Place',
      options: ['Place 1', 'Place 2', 'Place 3'],
    },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, mt: 2 }}>
        Search your MP
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        {dropdownOptions.map((dropdown) => (
          <FormControl key={dropdown.name} sx={formControlStyles} size="small">
            <InputLabel sx={{fontSize:'0.9rem',lineHeight:'unset',marginLeft:'4px'}}>{dropdown.label}</InputLabel>
            <Select
              name={dropdown.name}
              value={formValues[dropdown.name]}
              onChange={handleChange}
              label={dropdown.label}
              sx={{ borderRadius: '13px' }}
            >
              {dropdown.options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </Box>
      <Button
        sx={{
          backgroundColor: 'navy',
          color: 'white',
          fontWeight: 600,
          width: 215,
          borderRadius: '13px',
          mt: 3,
          mb: 5,
        }}
      >
        Search
      </Button>
    </>
  );
}
