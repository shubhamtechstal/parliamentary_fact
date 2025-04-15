import { Box, Button, Container } from '@mui/material';
import AdvertiseSection from 'components/addLayout/HorizontalAdvertiseSection';
import Text from 'components/common/Text';
import MPPerformance from 'components/Mps_performance/MPPerformance';
import MpsPerformanceSectionComponent from 'components/Mps_performance/MpsPerformanceSectionComponent';
import {
  mpsDataNetionalRank,
  mpsDataStateRank,
} from 'helpers/performanceConstants';
import { useEffect, useMemo, useState } from 'react';

const sections = [
  { id: 'top-performer', title: 'Top Performer' },
  { id: 'bottom-performer', title: 'Bottom Performer' },
  { id: 'non-performer', title: 'Non Performer' },
];

const performanceTitles = [
  'Attendance',
  'Questions',
  'Debates',
  'Private Member Bill',
];

const sortByPerformance = (data, type) => {
  const sorted = [...data];
  if (type === 'top-performer') return sorted.sort((a, b) => b.performance - a.performance);
  return sorted.sort((a, b) => a.performance - b.performance);
};

function MpsPerformancePageComponent({ handleDetailsClick, handleOpenSharePopup }) {
  const [isStateRank, setIsStateRank] = useState(false);
  const [activeSections, setActiveSections] = useState({
    Attendance: sections[0].id,
    Questions: sections[0].id,
    Debates: sections[0].id,
    'Private Member Bill': sections[0].id,
  });

  const mpsData = useMemo(() => (isStateRank ? mpsDataStateRank : mpsDataNetionalRank), [isStateRank]);

  const performanceData = useMemo(() => {
    return Object.fromEntries(
      Object.entries(activeSections).map(([key, sectionId]) => [key, sortByPerformance(mpsData, sectionId)])
    );
  }, [mpsData, activeSections]);

  const handleSectionChange = (section, sectionId) => {
    setActiveSections((prev) => ({ ...prev, [section]: sectionId }));
  };

  return (
    <Box sx={{ py: 4, backgroundColor: '#EEF3F7', color: '#00000080' }}>
      {/* Rank Toggle */}
      <Box
        sx={{
          position: 'sticky',
          top: 10,
          zIndex: 100,
          display: 'flex',
          justifyContent: 'space-around',
          gap: 2,
          maxWidth: { md: '400px', xs: '100%' },
          margin: '0rem 2rem',
          float: { md: 'right', xs: 'none' },
          mb: 2,
          background: '#fff',
          p: 2,
          borderRadius: 2,
        }}
      >
        <Button
          variant={!isStateRank ? 'contained' : 'outlined'}
          sx={{
            color: !isStateRank ? '#fff' : 'gray',
            borderColor: 'gray',
            background: !isStateRank
              ? 'linear-gradient(#ffdb00, orange, #dc752c)'
              : 'transparent',
          }}
          onClick={() => setIsStateRank(false)}
        >
          National Rank
        </Button>
        <Button
          variant={isStateRank ? 'contained' : 'outlined'}
          sx={{
            color: isStateRank ? '#fff' : 'gray',
            borderColor: 'gray',
            background: isStateRank
              ? 'linear-gradient(#ffdb00, orange, #dc752c)'
              : 'transparent',
          }}
          onClick={() => setIsStateRank(true)}
        >
          State Rank
        </Button>
      </Box>

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
          <Box display={{ xs: 'none', md: 'flex' }} style={{ height: '1rem', width: '1rem', background: '#f1807c' }} />
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
        mpsData={mpsData}
      />
      <AdvertiseSection />

      {/* Top Performer Section */}
      <MPPerformance
        title="Top Performer MPs Rating and Ranking"
        detailsPage="top-performer-mps"
        handleDetailsClick={handleDetailsClick}
        handleOpenSharePopup={handleOpenSharePopup}
        mpsData={mpsData}
      />
      <AdvertiseSection />

      {/* Performance Sections */}
      {performanceTitles.map((title, idx) => (
        <Box key={idx}>
          <MpsPerformanceSectionComponent
            title={`MPs Performance In ${title}`}
            handleOpenSharePopup={handleOpenSharePopup}
            mpsData={performanceData[title]}
            sections={sections}
            activeSection={activeSections[title]}
            handleStepperChange={(sectionId) => handleSectionChange(title, sectionId)}
          />
          <AdvertiseSection />
        </Box>
      ))}
    </Box>
  );
}

export default MpsPerformancePageComponent;