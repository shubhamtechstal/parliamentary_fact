import { Box } from '@mui/material'
import Text from 'components/common/Text'
import React from 'react'

export default function StateAttendance({index}) {
  return (
    <Box key={index} sx={{display:'flex',alignItems:'center'}}>
        <img style={{height:'100px',width:'auto'}} src='/Assets/madhyaPradesh.png'/>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Box sx={{height:'30px',width:'2px',background:'grey'}}></Box>
            <Box sx={{height:'40px',width:'6px',background:'#FF9C93'}}></Box>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',marginLeft:'0.5rem'}}>
            <Text sx={{color:'#6E6E6E',fontSize:'0.8rem',fontWeight:600}} text={"Madhya pradesh"}/>
            <Text text={"86%"} sx={{color:'#FF9C93',fontSize:'1.2rem', fontWeight: 'bold'}}/>
            <Text text={"25 / 30"} sx={{color:'#4D4D4D',fontSize:'0.9rem',fontWeight:500}}/>
        </Box>

    </Box>
  )
}
