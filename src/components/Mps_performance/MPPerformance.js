import React, { useState } from 'react';
import {
  Container,
  Grid,
  Box,
} from '@mui/material';
import GrayButton from 'components/common/GrayButton';
import SectionHeading from 'components/common/SectionHeading';
import MpsPerformanceCard from './MpsPerformanceCard';

const mpData = new Array(18).fill({
  rank: '000',
  name: 'Neeraj Ram Mandola',
  constituency: 'Choudheer Mandola',
  performance: '52.9',
  image: 'https://via.placeholder.com/50', // Replace with actual image URL
});

export default function MPPerformance({ title, handleDetailsClick }) {
  const [visibleMPs, setVisibleMPs] = useState(12);

  const loadMore = () => {
    setVisibleMPs((prev) => prev + 6);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <SectionHeading title={title} />
      <Grid container spacing={2}>
        {mpData.slice(0, visibleMPs).map((mp, index) => (
          <MpsPerformanceCard mp={mp} index={index} />
        ))}
      </Grid>

      {visibleMPs < mpData.length && (
        <Box textAlign="right" mt={3} mr={1}>
          <GrayButton onClick={()=>{handleDetailsClick("populer-mps");loadMore() }}>Load More</GrayButton>
        </Box>
      )}
    </Container>
  );
}
