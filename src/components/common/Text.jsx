import { Typography } from '@mui/material';
import React from 'react';

export default function Text({ text, sx,font,onClick ,className,children}) {
  const style = { ...sx, fontFamily: font?`"${font}", sans-serif`:'"Poppins", sans-serif !important' };
  return <Typography onClick ={onClick}  className={className} sx={style}>{text}{children} </Typography>;
}
