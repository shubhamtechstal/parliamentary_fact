import Button from './Button';

export default function GrayButton({ children, ...restProps }) {
  return (
    <Button
      {...restProps}
      sx={{
        background: '#b5b5b5',
        color: '#fff',
        borderRadius: '18px',
        padding: '0.2rem 2rem',
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
