import { Box, Button, Container } from '@mui/material';
import Text from 'components/common/Text';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import images from 'helpers/images';

export default function Header() {
    const header = [
        {head:'Home',},
        {head:'News',subhead:'check'},
        {head:'Coronavirus',subhead:'check'},
        {head:'Videos',},
        {head:'Health',},
        {head:'Stories',},
        {head:'Local news',},
        {head:'More',subhead:'check'},
    ];
    console.log(images);
  return (
    <Container>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
      <Box sx={{display:'flex',gap:'0.7rem',alignItems:'center',marginLeft:'1rem'}}>
        <Text
          text={'TRENDING NOW'}
          sx={{
            background: '#0d0b52',
            color: '#FFF',
            padding: '0.5rem',
            fontSize: '0.625rem',
            fontWeight: 700,
          }}
        />
        <Text text={'COVID-19: Australia to ban all arrivals of non-residents, says PM'} sx={{fontSize:'0.68rem',fontWeight:400}}/>
      </Box>
      <Box sx={{display:'flex',gap:'5px',alignItems:'center'}}> 
    <ArrowBackIosIcon sx={{border:'1px solid #dcdcdc',height:'25px',width:'25px',padding:'6px',color:'#dcdcdc',}}/>
    <ArrowForwardIosIcon sx={{border:'1px solid #dcdcdc',height:'25px',width:'25px',color:'#dcdcdc',padding:'6px'}}/>
      </Box>
      </Box>
      <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      
        <Text sx={{maxWidth:'1rem',color:'#767676',fontSize:'0.75rem'}} text={'Download App'}/>
       
        <Box sx={{textAlign:'center'}}>
        <Text text={'ParliamentaryFact'} sx={{color:'#0d0b52',fontSize:'3.125rem',fontWeight:700}}/>
        <Text text={'Local Coronavirus informations'} sx={{color:'#767676',fontSize:'0.75rem'}}/>
        </Box>
        <Box sx={{display:'flex',gap:'0.5rem',alignItems:'center'}}>
        <Box sx={{display:'flex',gap:'0.5rem'}}>
            <img style={{cursor:'pointer'}} src={images.facebook} alt='facebook'/>
            <img style={{cursor:'pointer'}} src={images.instagram} alt='instagram'/>
            <img style={{cursor:'pointer'}}src={images.twitterX} alt='twitter'/>
            <img style={{cursor:'pointer'}} src={images.youtube} alt='youtube'/>
        </Box>
        <Box sx={{background:'#0d0b52',color:'#FFF',padding:'0.2rem 0.6rem',marginLeft:'1rem',}}>
        <img src={images.search} style={{height:'10px'}} alt='search'/>
        </Box>
        </Box>
      </Box>
      <Box sx={{display:'flex',justifyContent:'center',marginTop:'1rem'}}>
      <Box sx={{display:'flex',gap:'1.5rem'}}>
       {header.map((val,index)=>(
        <Box sx={{display:'flex'}}>
<Text text={val.head} key={index} sx={{
    fontSize:'1rem',fontWeight:700,cursor:'pointer',
    '&:hover': {
                color:'#162eb7'
        }
    }}/>
    {val?.subhead  && <ExpandMoreIcon/>}
    </Box>
       ))}
      </Box>
      </Box>
    </Container>
  );
}
