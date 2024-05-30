import { Box } from '@mui/material'
import React from 'react'
import Text from '../Text'
import images from 'helpers/images'

export default function SideNewCards() {
  return (
    <Box sx={{display:'flex',gap:'1rem'}}>
    <Box
    sx={{
        width: '210px', 
        height: '80px',}}
>
    <img  src={images.dummy} style={{height:'100%',width:'100%'}}/>
</Box>
<Box sx={{maxWidth:'500px',display:'flex',flexDirection:'column',gap:'1rem'}}>
<Box>
<Text sx={{fontSize:'0.8rem',fontWeight:500,lineHeight:'17px'}}
  text={`Exclusive: Amazon Confirms First Known Coronavirus Case in an American Warehouse`}
/>
<Box sx={{ display: 'flex', gap: '1rem',alignItems:'center',marginTop:'0.5rem' }}>
  <Text  sx={{textAlign:'center',color:'#767676',fontSize:'0.7rem'}} text={'19/03/2020 - 10:48'}></Text>
</Box>
</Box>
</Box>
</Box>
  )
}
