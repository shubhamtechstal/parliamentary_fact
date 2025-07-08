import { Box, Chip, Container } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const PerformanceChips = ({ sections }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const chipRefs = useRef([]);

  const handleChipClick = (id, routeUrl, index) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    navigate(`/parliament-performance/lok-sabha-performance/${routeUrl}`);
  };

  useEffect(() => {
    const activeIndex = sections?.findIndex((data) =>
      location.pathname.includes(data?.routeUrl)
    );
    if (activeIndex !== -1 && chipRefs.current[activeIndex]) {
      chipRefs.current[activeIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [location.pathname, sections]);

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#f6f6f6',
        pl: { md: 0, xs: 2 },
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
          const isSelected = location.pathname.includes(data?.routeUrl);

          return (
            <Chip
              key={index}
              ref={(el) => (chipRefs.current[index] = el)}
              label={data?.title}
              onClick={() => handleChipClick(id, data?.routeUrl, index)}
              variant={isSelected ? 'filled' : 'outlined'}
              sx={{
                backgroundColor: isSelected ? 'rgb(255, 147, 111)' : 'transparent',
                color: isSelected ? '#fff' : 'black',
                borderColor: isSelected ? 'orange' : 'rgba(0, 0, 0, 0.23)',
                '&:hover': {
                  backgroundColor: isSelected
                    ? 'rgb(255, 147, 111)'
                    : 'rgba(0, 0, 0, 0.04)',
                },
                cursor: 'pointer',
                justifyContent: 'center',
                flexShrink: 0, // important to prevent shrinking in scroll
              }}
            />
          );
        })}
      </Container>
    </Box>
  );
};

export default PerformanceChips;
