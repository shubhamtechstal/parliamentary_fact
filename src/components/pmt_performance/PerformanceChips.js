import { Box, Chip, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PerformanceChips = ({ sections }) => {
  const navigate = useNavigate();
  const handleChipClick = (id, routeUrl) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    navigate(`/parliament-performance/lok-sabha-performance/${routeUrl}`);
  };

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#f6f6f6',
        padding: '0  0',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '1rem',
          overflowX: 'auto',
          padding: '1rem 0 0 0',
        }}
      >
        {sections?.map((data, index) => {
          const id = data?.title.replace(/\s+/g, '_');
          const isSelected = window.location.pathname.includes(data?.routeUrl);

          return (
            <Chip
              key={index}
              label={data?.title}
              onClick={() => handleChipClick(id, data?.routeUrl)}
              variant={isSelected ? 'filled' : 'outlined'}
              sx={{
                backgroundColor: isSelected
                  ? 'rgb(255, 147, 111)'
                  : 'transparent',
                color: isSelected ? '#fff' : 'black',
                borderColor: isSelected ? 'orange' : 'rgba(0, 0, 0, 0.23)',
                '&:hover': {
                  backgroundColor: isSelected
                    ? 'rgb(255, 147, 111)'
                    : 'rgba(0, 0, 0, 0.04)',
                },
                cursor: 'pointer',
                justifyContent: 'center',
              }}
            />
          );
        })}
      </Container>
    </Box>
  );
};

export default PerformanceChips;
