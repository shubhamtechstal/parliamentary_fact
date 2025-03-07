import Box from './Box';

export default function GrayDot() {
  return (
    <Box
      sx={{
        height: '20px',
        width: '20px',
        minWidth: '20px',
        borderRadius: '50%',
        background: '#D3D3D3',
      }}
    ></Box>
  );
}
