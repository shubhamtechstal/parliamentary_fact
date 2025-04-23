import { useEffect, useState } from 'react';
import { Container, Grid, Box } from '@mui/material';
import GrayButton from 'components/common/GrayButton';
import SectionHeading from 'components/common/SectionHeading';
import MpsPerformanceCard from './cards/MpsPerformanceCard';
import MpsPerformanceAttandanceCard from './cards/MpsPerformanceAttandanceCard';

export default function MpsPerformanceInAttandance({
  title,
  handleOpenSharePopup,
  mpsData,
  handleStepperChange,
  activeSection,
  sections,
  handleStateRankClick,
  isStateRank,
  cardCatagory,
  handleDetailsClick,
  detailsPage
}) {
  const [isRankLoading, setIsRankLoading] = useState(false);

  useEffect(() => {
    setIsRankLoading(true);
    setTimeout(() => {
      setIsRankLoading(false);
    }, 200);
  }, [isStateRank, activeSection]);
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        display="flex"
        flexDirection={{ md: 'row', xs: 'column' }}
        justifyContent={{ md: 'space-between', xs: 'center' }}
        alignItems={'center'}
      >
        <Box display={{ xs: 'flex', md: 'none' }} textAlign={'center'}>
          <h3 style={{ margin: '0 auto 1rem', width: '80%' }}>{title} </h3>
        </Box>
        <Box display={{ xs: 'none', md: 'block' }} textAlign={'center'}>
          <SectionHeading title={title} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          mb={2}
        >
          <GrayButton
            onClick={() => handleStateRankClick(false)}
            fontWeight="600"
            bgColor="#fff"
            textColor="#00000080"
          >
            {!isStateRank ? 'Check State Ranking' : 'Back  to National Rank'}
          </GrayButton>
        </Box>
      </Box>
      {sections?.map((section) => (
        <button
          key={section.id}
          onClick={() => handleStepperChange(section.id)}
          style={{
            margin: '5px',
            borderTop: 'none',
            borderRight: 'none',
            borderLeft: 'none',
            borderBottom:
              activeSection == section.id ? '3px solid #f1807c' : 'none',
            background: 'transparent',
            paddingBottom: '5px',
          }}
        >
          {section.title}
        </button>
      ))}

      <Grid
        container
        gap={{ xs: 2, md: 0 }}
        spacing={{ xs: 0, md: 2 }}
        sx={{ py: 4 }}
        flexWrap={{ md: 'wrap', xs: 'nowrap' }}
        overflow={'auto'}
      >
        {mpsData?.slice(0, 3)?.map((mp, index) => (
          <MpsPerformanceAttandanceCard
            handleOpenSharePopup={handleOpenSharePopup}
            mp={mp}
            index={index}
            cardCatagory={cardCatagory}
            isLoading={isRankLoading}
          />
        ))}
      </Grid>
      <Grid
        container
        gap={{ xs: 3, md: 0 }}
        spacing={{ xs: 0, md: 1 }}
        p={1}
        flexWrap={{ md: 'wrap', xs: 'nowrap' }}
        overflow={'auto'}
      >
        {mpsData?.slice(3, 9)?.map((mp, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
            <MpsPerformanceCard
              handleOpenSharePopup={handleOpenSharePopup}
              mp={mp}
              index={index}
              isLoading={isRankLoading}
              cardCatagory={cardCatagory}
            />
          </Grid>
        ))}
      </Grid>
      <Box textAlign={{ xs: 'center', md: 'right' }} mt={3} mr={1}>
        <GrayButton onClick={() => handleDetailsClick(detailsPage)}>
          Load More
        </GrayButton>
      </Box>
    </Container>
  );
}
