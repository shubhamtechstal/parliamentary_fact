import { Box, Button, CircularProgress, Container } from '@mui/material';
import AdvertiseSection from 'components/addLayout/HorizontalAdvertiseSection';
import Text from 'components/common/Text';
import MPPerformance from 'components/Mps_performance/MPPerformance';
import MpsPerformanceSectionComponent from 'components/Mps_performance/MpsPerformanceSectionComponent';
import {
  mpsDataNetionalRank,
  mpsDataStateRank,
} from 'helpers/performanceConstants';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMpsPerformanceData,
  fetchPopulerMpsData,
} from 'stores/redux/apiSlices/mps_PerformanceSlice';

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
  if (type === 'top-performer')
    return sorted.sort((a, b) => b.performance - a.performance);
  else if (type === 'bottom-performer') {
    const bottomperformer = sorted.filter((a) => Number(a.performance) > 0);
    return sorted.sort((a, b) => a.performance - b.performance);
  }
  return sorted.sort((a, b) => a.performance - b.performance);
};

function MpsPerformancePageComponent({
  handleDetailsClick,
  handleOpenSharePopup,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopulerMpsData());
    dispatch(fetchMpsPerformanceData({ limit: 20 }));
  }, [dispatch]);
  const { popular_mps } = useSelector((state) => state?.populerMps);
  const {
    attendance_data,
    mp_debate_data,
    private_bill_data,
    question_data,
    top_performance,
    partial,
    loading,
  } = useSelector((state) => state?.mpsPerformance);
  console.log('mps_attendance_datamps_attendance_data', partial);

  const [activeSections, setActiveSections] = useState({
    Attendance: sections[0].id,
    Questions: sections[0].id,
    Debates: sections[0].id,
    'Private Member Bill': sections[0].id,
  });
  const [rankView, setRankView] = useState(
    performanceTitles.reduce((acc, title) => {
      acc[title] = false; // false = national, true = state
      return acc;
    }, {})
  );
  const handleRankViewToggle = (title) => {
    setRankView((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
    setActiveSections((prev) => ({
      ...prev,
      [title]: sections[0].id,
    }));
  };
  // const mpsData = useMemo(
  //   () => (isStateRank ? mpsDataStateRank : mpsDataNetionalRank),
  //   [isStateRank]
  // );
  const performanceData = useMemo(() => {
    return Object.fromEntries(
      performanceTitles.map((title) => {
        // console.log('titletitle', title);
        var data = [];
        switch (title) {
          case 'Attendance':
            data = rankView[title]
              ? mpsDataStateRank(attendance_data)
              : mpsDataNetionalRank(attendance_data);
            break;
          case 'Questions':
            data = rankView[title]
              ? mpsDataStateRank(question_data)
              : mpsDataNetionalRank(question_data);
            break;
          case 'Debates':
            data = rankView[title]
              ? mpsDataStateRank(mp_debate_data)
              : mpsDataNetionalRank(mp_debate_data);
            break;
          case 'Private Member Bill':
            data = rankView[title]
              ? mpsDataStateRank(private_bill_data)
              : mpsDataNetionalRank(private_bill_data);
            break;

          default:
            data = attendance_data;
            break;
        }

        // const data = rankView[title] ? mpsDataStateRank : mpsDataNetionalRank;
        // const data = rankView[title] ? mpsDataStateRank : mpsDataNetionalRank;
        return [title, sortByPerformance(data, activeSections[title])];
      })
    );
  }, [rankView, activeSections, attendance_data]);
  // console.log('performanceData', performanceData, mps_attendance_data)
  // const performanceData = useMemo(() => {
  //   return Object.fromEntries(
  //     Object.entries(activeSections).map(([key, sectionId]) => [
  //       key,
  //       sortByPerformance(mpsData, sectionId),
  //     ])
  //   );
  // }, [mpsData, activeSections]);

  const handleSectionChange = (section, sectionId) => {
    setActiveSections((prev) => ({ ...prev, [section]: sectionId }));
  };

  return loading ? (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
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
        // mpsDataNetionalRank={mpsDataNetionalRank(popular_mps)}
        // mpsDataStateRank={mpsDataStateRank(popular_mps)}
      />
      <AdvertiseSection />

      {/* Top Performer Section */}
      <MPPerformance
        title="Top Performer MPs Rating and Ranking"
        detailsPage="top-performer-mps"
        handleDetailsClick={handleDetailsClick}
        handleOpenSharePopup={handleOpenSharePopup}
        mps_Data={top_performance}
        // mpsDataNetionalRank={mpsDataNetionalRank(top_performance)}
        // mpsDataStateRank={mpsDataStateRank(top_performance)}
      />
      <AdvertiseSection />

      {/* Performance Sections */}
      {performanceTitles.map((title, idx) => (
        <Box key={idx}>
          <MpsPerformanceSectionComponent
            title={`MPs Performance In ${title}`}
            cardCatagory={title}
            handleOpenSharePopup={handleOpenSharePopup}
            mpsData={performanceData[title]}
            sections={sections}
            activeSection={activeSections[title]}
            handleStateRankClick={() => handleRankViewToggle(title)}
            isStateRank={rankView[title]}
            mps_attendance_data={attendance_data}
            handleStepperChange={(sectionId) =>
              handleSectionChange(title, sectionId)
            }
            detailsPage={`mps-${title.replaceAll(' ', '-').toLowerCase()}`}
            handleDetailsClick={handleDetailsClick}
          />
          <AdvertiseSection />
        </Box>
      ))}
    </Box>
  );
}

export default MpsPerformancePageComponent;
