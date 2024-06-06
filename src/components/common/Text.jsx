import { Typography } from '@mui/material';
import React from 'react';

export default function Text({ text, sx,font,onClick }) {
  const style = { ...sx, fontFamily: font?`"${font}", sans-serif`:'"Poppins", sans-serif' };
  return <Typography onClick ={onClick} sx={style}>{text}</Typography>;
}
