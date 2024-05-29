import { Box } from '@mui/material'
import Text from '../Text'
import images from 'helpers/images'

export default function SubHeadingNewCard({textWidth}) {
  return (
    <Box sx={{display:'flex',gap:'1rem'}}>
    <Box
    sx={{
        width:'200px', 
        height: '160px',}}
>
    <img  src={images.dummy} style={{height:'100%',width:'100%'}}/>
</Box>
<Box sx={{maxWidth:textWidth?textWidth:'500px',display:'flex',flexDirection:'column',gap:'1rem'}}>
    <Box sx={{display:'flex'}}>
<Text    sx={{
    background: '#0d0b52',
    color: '#FFF',
    padding: '0.5rem',
    fontSize: '0.625rem',
    fontWeight: 700,
  }} text={'Coronavirus'}></Text>
  </Box>
<Box>
<Text sx={{fontSize:'1rem',fontWeight:700}}
  text={`The fortunes of war along Myanmar's border with Thailnd have been
  turning with bewildering speed. been turning with bewildering speed.`}
/>
<Box sx={{ display: 'flex', gap: '1rem',alignItems:'center',marginTop:'0.5rem' }}>
  <Text  sx={{ fontWeight: 700,fontSize: '0.8rem'}}
  text={'Stephen Romero'}></Text>
  <Text  sx={{textAlign:'center',color:'#767676',fontSize:'0.7rem'}} text={'19/03/2020 - 10:48'}></Text>
</Box>
</Box>
</Box>
</Box>
  )
}
