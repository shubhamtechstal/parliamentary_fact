import { Box } from '@mui/material'
import Text from 'components/common/Text'
import React from 'react'

export default function StateAttendance({item}) {
  return (
    <Box sx={{display:'flex',alignItems:'center'}}>
        <img style={{height:'100px',width:'auto'}} src={'/Assets/madhyaPradesh.png'}/>
        {/* <img style={{height:'100px',width:'auto'}} src={item?.iconUrl}/> */}
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center', height:'70px'}}>
            <Box sx={{height:`${100 - item.percentage}%`,width:'2px',background:'grey'}}></Box>
            <Box sx={{height:`${item.percentage}%`,width:'6px',background:'#FF9C93'}}></Box>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',marginLeft:'0.5rem'}}>
            <Text sx={{color:'#6E6E6E',fontSize:'0.8rem',fontWeight:600}} text={item?.title}/>
            <Text variant='h2' text={`${item.percentage}%`} sx={{color:'#FF9C93',fontSize:'1.2rem', fontWeight: 'bold'}}/>
            <p style={{margin:'0 0'}}>{item?.attendance}</p>
        </Box>

    </Box>
  )
}
