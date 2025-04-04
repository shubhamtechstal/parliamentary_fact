import Box from './Box';

export default function GrayDot({icon_url}) {
  return (
    <Box
      sx={{
        height: '20px',
        width: '20px',
        minWidth: '20px',
        borderRadius: '50%',
        background: '#D3D3D3',
      }}
    >
      {icon_url&& <img width={20} height={20} src={icon_url} />}
    </Box>
  );
}
