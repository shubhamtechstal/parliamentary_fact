// import Button from './Button';

import { Button } from "@mui/material";

export default function GrayButton({ children, bgColor, textColor, ...restProps }) {
  return (
    <Button
      {...restProps}
      sx={{
        background: bgColor ?? '#b5b5b5',
        color: textColor ?? '#fff',
        borderRadius: '18px',
        padding: '0.2rem 2rem',
        textWrap:'nowrap',
        '&:hover': {
          background: 'grey',
          color: '#fff',
        },
        '.MuiButton-startIcon': {
          marginRight: '2px',
        },
        '.MuiButton-startIcon>*:nth-of-type(1)': {
          fontSize: '14px',
        },
      }}
    >
      {children}
    </Button>
  );
}
