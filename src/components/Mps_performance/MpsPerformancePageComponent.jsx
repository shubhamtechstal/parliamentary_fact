import { Box, Container } from '@mui/material';
import AdvertiseSection from 'components/addLayout/HorizontalAdvertiseSection';
import Text from 'components/common/Text';
import MPPerformance from 'components/Mps_performance/MPPerformance';
import MpsPerformanceInAttandance from 'components/Mps_performance/MpsPerformanceInAttandance';

function MpsPerformancePageComponent({handleDetailsClick}) {
  return (
    <Box sx={{ py: 4, backgroundColor: '#EEF3F7', color: '#00000080', }}>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          textAlign: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{ height: '1rem', width: '1rem', background: '#f1807c' }}
          />
          <Text
            variant="h1"
            sx={{
              fontSize: { xs: '1rem', md: '1.5rem' },
              letterSpacing: '-0.3px',
              fontWeight: 600,
            }}
            font={'Sora'}
          >
            {' '}
            MPs Rating & Ranking & Performance
          </Text>
        </Box>
        <Box
          sx={{
            borderBottom: '1px solid #D3D3D3',
            display: { md: 'flex', xs: 'none' },
            gap: '5px',
            alignItems: 'center',
            padding: '0 30px 5px',
          }}
        >
          <div
            style={{
              padding: '1px 7px',
              border: '1px solid #00000080',
              borderRadius: '50%',
              fontSize: '10px',
              height: '18px',
              width: '18px',
            }}
          >
            {' '}
            i
          </div>{' '}
          Read before check performance
        </Box>
      </Container>

      <MPPerformance title={"Populer MPs Performance"} handleDetailsClick={handleDetailsClick} />
      <AdvertiseSection />
      <MPPerformance title={"Top Performer MPs Rating and Ranking"} />
      <AdvertiseSection />
      <MpsPerformanceInAttandance  title={"MPs Performance In Attendance"}/>
    </Box>
  );
}

export default MpsPerformancePageComponent;
