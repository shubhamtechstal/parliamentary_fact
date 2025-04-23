import React, { useState } from 'react';
import { Box, Chip } from '@mui/material';


const PerformanceChips = ({ sections }) => {
  const [selectedChip, setSelectedChip] = useState(null);

  const handleChipClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setSelectedChip(id);
  };

  return (
    <Box
      className="performanceSection"
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '1rem',
        overflowX: 'auto',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#f6f6f6',
        padding: '1rem',
      }}
    >
      {sections?.map((title, index) => {
        const id = title.replace(/\s+/g, '_');
        const isSelected = selectedChip === id;

        return (
          <Chip
            key={index}
            label={title}
            onClick={() => handleChipClick(id)}
            variant={isSelected ? 'filled' : 'outlined'}
            sx={{
              backgroundColor: isSelected ? 'rgb(255, 147, 111)' : 'transparent',
              color: isSelected ? '#fff' : 'black',
              borderColor: isSelected ? 'orange' : 'rgba(0, 0, 0, 0.23)',
              '&:hover': {
                backgroundColor: isSelected ? 'rgb(255, 147, 111)' : 'rgba(0, 0, 0, 0.04)',
              },
              cursor: 'pointer',
              justifyContent: 'center',
            }}
          />
        );
      })}
    </Box>
  );
};

export default PerformanceChips;
