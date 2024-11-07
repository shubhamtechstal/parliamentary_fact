import { Box, Button, Checkbox, FormControlLabel, FormGroup, Rating, TextField } from '@mui/material';
import Text from 'components/common/Text';
import StarIcon from '@mui/icons-material/Star';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import React, { useState } from 'react';
import '../App.css'

export default function MpsRatingAllListContainer() {
    const [filter,setFilter] = useState(false);
    const data = [1,2,3,4,5]
    const filterData = [
        {
          category: "Year",
          options: [
            { label: "1st year", selected: true },
            { label: "2nd year", selected: false },
            { label: "3rd year", selected: false },
            { label: "4th year", selected: false },
            { label: "5th year", selected: false }
          ]
        },
        {
          category: "Session",
          options: [
            { label: "Special Session 2019", selected: true },
            { label: "Monsoon Session 2019", selected: false },
            { label: "Winter Session 2019", selected: false },
            { label: "Budget Session 2020", selected: false }
          ]
        },
        {
          category: "Session",
          options: [
            { label: "Special Session 2019", selected: true },
            { label: "Monsoon Session 2019", selected: false },
            { label: "Winter Session 2019", selected: false },
            { label: "Budget Session 2020", selected: false }
          ]
        }
      ];
      
  return (
    <Box sx={{background:'#f7f7f7',display:'flex',justifyContent:'center'}}>
        <Box sx={{width:{md:'80%',xs:'90%'}}}>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>

      <TextField fullWidth placeholder="To search and rate your MP/Write here MPs Name otherwise go to click here" id="fullWidth"
     sx={{
         backgroundColor: "white",
        width:'70%',
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
            textTransform:'none',
            padding: {xs:'0.4rem 0.5rem',md:'0.4rem 3rem'},
            '&:hover':{
                background: 'gray',
                color: '#fff',}
            }}
            >
          Click here
        </Button>
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
        <Box sx={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
            <Box sx={{height:'1rem',width:'1rem',background:'#ff000070'}}></Box>
            <Text sx={{fontWeight:'600',marginTop:'0.1rem'}} text={"MPs Public Rating - Top to Bottom"}/>
        </Box>
        <Button className="MobileViewRemove"
        onClick={()=>setFilter(!filter)}
          sx={{
            background: '#b5b5b5',
            textTransform:'none',
            color: '#fff',
            fontWeight: '600',
            height:'min-content',
            borderRadius: '18px',
            padding: '0.2rem 1rem',
            '&:hover':{
                background: 'grey',
                color: '#fff',
            }
          }}
          startIcon={<FilterAltOutlinedIcon/>}
        >
          Filter
        </Button>
        </Box>
{filter && (
    <>
  <Box sx={{ background: '#e6e5e5', margin: '1rem 0', borderRadius: '2px', padding: '1rem',display:'flex',flexWrap:'wrap' }}>
    {filterData.map((item, index) => (
      <Box key={index} sx={{ marginBottom: '1.5rem',minWidth:{xs:'50px',md:'310px'} }}>
        {/* Category Header */}
        <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Text sx={{ fontWeight: '600' }} text={`Select ${item.category}`} />
          <ArrowForwardIosOutlinedIcon sx={{ fontSize: '16px' }} />
        </Box>

        {/* Options */}
        <FormGroup sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
          {item.options.map((option, idx) => (
            <FormControlLabel
              key={idx}
              control={ <Checkbox
                defaultChecked={option.selected}
                sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: 20, // Adjust size to fit design
                    borderRadius: '4px', // Add slight rounding for the checkbox
                  },
                  '&.Mui-checked': {
                      color: '#808080', // Gray color for the checked state
                    },
                    color: '#B0B0B0', // Lighter gray for unchecked state
                    transition: 'all 0.3s', 
                }}
              />}
              sx={{
                '& .MuiTypography-root': {
                  fontWeight: 500, // Make label text bold
                  fontSize: '0.8rem', // Adjust font size
                  color: '#333', // Darker color for label text
                
                }
              }}
              label={option.label}
            />
          ))}
        </FormGroup>
      </Box>
    ))}
  </Box>
  <Button 
  onClick={()=>setFilter(!filter)}
    sx={{
      background: '#b5b5b5',
      color: '#fff',
      fontWeight: '600',
      borderRadius: '18px',
      padding: '0.2rem 1rem',
      '&:hover':{
          background: 'grey',
          color: '#fff',
      }
    }}
    
  >
    Done
  </Button>
  </>
)}

    <Box
      sx={{ background: '#f7f7f7', display: 'flex',flexDirection:'column',alignItems:'center', justifyContent: 'center' }}
    >
{ data.map((val)=>(
     <Box
     sx={{
       padding: {xs:'0.5rem',md:'1rem'},
       width: '100%',
       background: '#fff',
       margin: '1rem',
       borderRadius: '12px',
       display: 'flex',
       boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
       alignItems: 'center',
       justifyContent: 'space-between',
       gap: {xs:'0.5rem',md:'1rem'},
     }}
   >
     <Box sx={{ display: 'flex',  gap: {xs:'0.5rem',md:'1rem'},}}>
       <Text
         sx={{ padding: '1rem', borderRadius: '50%', background: '#cfcfcf',fontSize:{xs:'o.7rem'} }}
         text={'001'}
       />
       <Box className="MobileViewRemove"
         sx={{ padding: '1rem', borderRadius: '50%', background: '#cfcfcf' }}
         text={'001'}
       >
         001
       </Box>
     </Box>
     <Box sx={{display:"flex",alignItems:'center',   gap: {xs:'0.5rem',md:'1rem'},flexWrap:'wrap'}}>

     <Box >
       <Text sx={{ fontWeight: '600',fontSize:{xs:'0.7rem',md:'0.9rem'},textWrap:'nowrap' }} text={'Neeraj ram mandola'} />
       <Text sx={{ fontWeight: '600',fontSize:{xs:'0.7rem',md:'0.9rem'} }} text={'Choudheer Mandola'} />
     </Box>
     <Text sx={{ fontWeight: '600',fontSize:{xs:'0.7rem',md:'0.9rem'}, color: '#acacac' }} text={'BJP'} />
     <Text className="MobileViewRemove" sx={{ fontWeight: '600',fontSize:{xs:'0.7rem',md:'0.9rem'}, color: '#acacac' }} text={'Delhi'} />
     <Text sx={{ fontWeight: '600',fontSize:{xs:'0.7rem',md:'0.9rem'}, color: '#acacac' }} text={'Delhi'} />
     </Box>
     <Box sx={{display:'flex',  gap: {xs:'0.5rem',md:'1rem'},alignItems:'center',flexWrap:'wrap',justifyContent:'center'}}>
 <Box sx={{display:'flex',alignItems:'center',gap:'0.5rem'}}> 
     <Rating
       sx={{ fontSize:{xs:'1.2rem',md:'1.5rem'} }}
       name="read-only"
       value={4}
       readOnly
       emptyIcon={<StarIcon style={{ color: '#000' }} fontSize="inherit" />}
       />
     <Text className="MobileViewRemove" text={"4.7"} sx={{ fontSize: '1.5rem',color:'orange'}}/>
       </Box>
     <Box sx={{display:'flex',  gap: {xs:'0.5rem',md:'1rem'},}}>
     <Button
       sx={{
         background: 'orange',
         color: '#fff',
         fontWeight: '600',
         borderRadius: '18px',
         fontSize:{xs:'0.7rem'},
         padding: '0.2rem 1rem',
         '&:hover':{
         background: 'orange',
         color: '#fff',}
       }}
     >
       Rate Now
     </Button>
     <Button className="MobileViewRemove"
       sx={{
         background: 'grey',
         color: '#fff',
         fontWeight: '600',
         borderRadius: '18px',
         padding: '0.2rem 1rem',
         display: { xs: 'none', sm: 'block' },
         '&:hover':{
             background: 'grey',
             color: '#fff',
         }
       }}
     >
       Share Now
     </Button>
     </Box>
     </Box>
     <MoreVertIcon />
   </Box>
))    }
 
    </Box>
    </Box>
    </Box>
  );
}
