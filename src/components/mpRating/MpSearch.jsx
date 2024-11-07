import { Box, Button, TextField } from '@mui/material'
import React from 'react'

export default function MpSearch() {
  return (
    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>

  <TextField fullWidth placeholder="To search and rate your MP/Write here MPs Name otherwise go to click here" id="fullWidth"
 sx={{
     backgroundColor: "white",
    width:'60%',
    padding:"0 1rem",margin:'1rem 0',borderRadius:'24px',
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
    },
    "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
          border: "none",
        },
    },
    "& .MuiInputBase-input::placeholder": {
      color: "grey",
      opacity: 1, // Ensures the grey color appears fully
    },
    "& .MuiInputBase-input":{
        padding:'0.6rem'
    }
}} />
<Button
      sx={{
        background: 'gray',
        color: '#fff',
        fontWeight: '600',
        borderRadius: '18px',
        padding: {xs:'0.4rem 0.5rem',md:'0.4rem 3rem'},
        '&:hover':{
            background: 'gray',
            color: '#fff',}
        }}
        >
      Click here
    </Button>
    </Box>
  )
}
