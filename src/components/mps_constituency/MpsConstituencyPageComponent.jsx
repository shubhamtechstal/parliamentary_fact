import { Box, Button, Container } from '@mui/material';
import AdvertiseSection from 'components/addLayout/HorizontalAdvertiseSection';
import Text from 'components/common/Text';
import MPPerformance from 'components/Mps_performance/MPPerformance';
// import MpsPerformanceSectionComponent from 'components/Mps_performance/MpsPerformanceSectionComponent';
// import {
//   mpsDataNetionalRank,
//   mpsDataStateRank,
// } from 'helpers/performanceConstants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMpsPerformanceData } from 'stores/redux/apiSlices/mps_PerformanceSlice';


function MpsConstituencyPageComponent({
  handleDetailsClick,
  handleOpenSharePopup,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchMpsPerformanceData({
        datasets: ['mp_fund_data', 'popular_mps'],
        limit: 20,
      })
    );
  }, [dispatch]);
  const { mp_fund_data, popular_mps } = useSelector(
    (state) => state?.mpsPerformance.partial || {}
  );
  const sorted = [...mp_fund_data];
  return (
    <Box sx={{ py: 4, backgroundColor: '#EEF3F7', color: '#00000080' }}>
      {/* Rank Toggle */}

      {/* Title */}
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          textAlign: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Box
            display={{ xs: 'none', md: 'flex' }}
            style={{ height: '1rem', width: '1rem', background: '#f1807c' }}
          />
          <Text
            variant="h1"
            sx={{
              fontSize: { xs: '1.5rem', md: '1.5rem' },
              letterSpacing: '-0.3px',
              fontWeight: 600,
              textAlign: { xs: 'center', md: 'left' },
              margin: 'auto',
            }}
            font={'Sora'}
          >
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
            i
          </div>
          Read before check performance
        </Box>
      </Container>

      {/* Popular MPs */}
      <MPPerformance
        title="Popular MPs Performance"
        detailsPage="popular-mps"
        handleDetailsClick={handleDetailsClick}
        handleOpenSharePopup={handleOpenSharePopup}
        mps_Data={popular_mps}
        cardCatagory={'Mp LD fund'}
        // mpsDataNetionalRank={mpsDataNetionalRank}
        // mpsDataStateRank={mpsDataStateRank}
      />
      <AdvertiseSection />

      {/* Top Performer Section */}
      <MPPerformance
        title="Top Performer MPs Rating and Ranking"
        detailsPage="top-performer-mps"
        handleDetailsClick={handleDetailsClick}
        handleOpenSharePopup={handleOpenSharePopup}
        cardCatagory={'Mp LD fund'}
        mps_Data={mp_fund_data}
        // mpsDataNetionalRank={mpsDataNetionalRank}
        // mpsDataStateRank={mpsDataStateRank}
      />
      <AdvertiseSection />
      {/* Bottom Performer Section */}
      <MPPerformance
        title="Bottom Performer MPs Rating and Ranking"
        detailsPage="top-performer-mps"
        handleDetailsClick={handleDetailsClick}
        handleOpenSharePopup={handleOpenSharePopup}
        cardCatagory={'Mp LD fund'}
        mps_Data={sorted.sort((a, b) => a.performance - b.performance)}
        // mpsDataNetionalRank={mpsDataNetionalRank}
        // mpsDataStateRank={mpsDataStateRank}
      />
      <AdvertiseSection />
      {/* Non Performer Section */}
      <MPPerformance
        title="Non Performer MPs Rating and Ranking"
        detailsPage="top-performer-mps"
        handleDetailsClick={handleDetailsClick}
        mps_Data={mp_fund_data}
        cardCatagory={'Mp LD fund'}
        handleOpenSharePopup={handleOpenSharePopup}
        // mpsDataNetionalRank={mpsDataNetionalRank}
        // mpsDataStateRank={mpsDataStateRank}
      />
    </Box>
  );
}

export default MpsConstituencyPageComponent;
