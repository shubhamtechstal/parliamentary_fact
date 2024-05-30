import { Typography } from '@mui/material';
import React from 'react';

export default function Text({ text, sx }) {
  const style = { ...sx, fontFamily: '"Oxygen", sans-serif' };
  return <Typography sx={style}>{text}</Typography>;
}
