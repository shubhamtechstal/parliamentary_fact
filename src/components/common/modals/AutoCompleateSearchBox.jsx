import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

export default function AutocompleteSearchBox({ onSelectMP }) {
  const [selectedValue, setSelectedValue] = React.useState(null); // holds full object
  const [searchQuery, setSearchQuery] = React.useState(''); // for input box text
  const [suggestions, setSuggestions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
console.log('selectedValueselectedValue', selectedValue)
  // Fetch suggestions when searchQuery changes
  React.useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchQuery.length < 2) {
        setSuggestions([]);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(
          `https://parliamentryfact.revanshrenewable.com/API/mp_minister_seacrh_api.php?search=${searchQuery}`
        );
        const data = await response.json();

        const filtered = data?.data?.filter(
          (mp) => mp.full_name && mp.party_full_name
        );
        setSuggestions(filtered || []);
      } catch (error) {
        console.error('Failed to fetch suggestions:', error);
        setSuggestions([]);
      }
      setLoading(false);
    };

    const debounce = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounce);
  }, [searchQuery]);

  return (
    <Stack spacing={2} sx={{ width: { md: 500, xs: '80%' } }}>
      <Autocomplete
        id="mp-autocomplete"
        options={suggestions}
        getOptionLabel={(option) =>
          `${option.full_name} (${option.party_short_name}) - ${option.party_full_name}${
            option.position_mp_ministers
              ? `, ${option.position_mp_ministers}`
              : ''
          }`
        }
        value={selectedValue}
        onChange={(event, newValue) => {
          setSelectedValue(newValue);
          setSearchQuery(newValue?.full_name || '');
          if (newValue && onSelectMP) {
            onSelectMP(newValue); // Pass the full object to parent
          }
        }}
        inputValue={searchQuery}
        onInputChange={(event, newInputValue) => {
          setSearchQuery(newInputValue);
        }}
        loading={loading}
        renderInput={(params) => (
          <TextField
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '50px',
              padding: '0 2rem',
              backgroundColor: '#f5f5f5',
              '&:hover fieldset': {
                borderColor: '#1976d2',
              },
            },
            '& .MuiInputBase-input': {
              padding: '1rem 0',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '.MuiInputLabel-root ':{
              fontSize: '0.8rem',
              top: '-0.5rem',
            }
          }}
            {...params}
            label="Search MP or Minister"
            InputProps={{
              ...params.InputProps,
              type: 'search',
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </Stack>
  );
}
