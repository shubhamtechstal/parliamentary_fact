// import Button from './Button';

import { Button } from "@mui/material";

export default function GrayButton({text, height, children, bgColor, width, fontWeight, position, fontSize,display, textColor, ...restProps }) {
  return (
    <Button
      {...restProps}
      sx={{
        width: width || 'auto',
        height: height || 'auto',
        background: bgColor ?? '#b5b5b5',
        color: textColor ?? '#fff',
        borderRadius: '18px',
        padding: '0.2rem 2rem',
        textWrap:'nowrap',
        textTransform:'capitalize',
        fontSize: fontSize ?? '0.8rem',
        display: display || '',
        fontWeight: fontWeight ?? 400,
        position: position ||'static',
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
      {text}
    </Button>
  );
}
