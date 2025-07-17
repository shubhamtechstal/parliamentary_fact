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

// const sortByPerformance = (data, type) => {
//   const sorted = [...data];
//   if (type === 'top-performer')
//     return sorted.sort((a, b) => b.performance - a.performance);
//   else if (type === 'bottom-performer') {
//     const bottomperformer = sorted.filter((a) => Number(a.performance) > 0);
//     return sorted.sort((a, b) => a.performance - b.performance);
//   }
//   return sorted.sort((a, b) => a.performance - b.performance);
// };

function MpsPerformancePageComponent({
  handleDetailsClick,
  handleOpenSharePopup,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopulerMpsData());
    const defaultSections = [
      'topPerformance',
      'Attendance',
      'Questions',
      'Debates',
      'Private Member Bill',
    ];
    const datasetMap = {
      topPerformance: 'top_performance',
      Attendance: 'attendance_data',
      Questions: 'question_data',
      Debates: 'mp_debate_data',
      'Private Member Bill': 'private_bill_data',
    };

    defaultSections.forEach((section) => {
      dispatch(
        fetchMpsPerformanceData({
          datasets: [datasetMap[section]],
          limit: 20,
          key: 'default',
        })
      );
    });
  }, [dispatch]);

  const { popular_mps } = useSelector((state) => state?.populerMps);
  const { partial } = useSelector((state) => state?.mpsPerformance);
  console.log('partial?.top_performance', partial);

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

  const performanceData = useMemo(() => {
    return Object.fromEntries(
      performanceTitles.map((title) => {
        const sectionId = activeSections[title];
        const datasetKey = {
          Attendance: 'attendance_data',
          Questions: 'question_data',
          Debates: 'mp_debate_data',
          'Private Member Bill': 'private_bill_data',
        }[title];

        const sectionData =
          partial?.[datasetKey]?.[
            sectionId === 'top-performer'
              ? 'default'
              : sectionId === 'bottom-performer'
                ? 'bottom'
                : 'non_performer'
          ] || [];

        const ranked = rankView[title]
          ? mpsDataStateRank(sectionData)
          : mpsDataNetionalRank(sectionData);

        return [title, ranked];
        // return [title, sortByPerformance(ranked, sectionId)];
      })
    );
  }, [rankView, activeSections, partial]);

  // const performanceData = useMemo(() => {
  //   return Object.fromEntries(
  //     performanceTitles.map((title) => {
  //       // console.log('titletitle', title);
  //       var data = [];
  //       switch (title) {
  //         case 'Attendance':
  //           data = rankView[title]
  //             ? mpsDataStateRank(attendance_data)
  //             : mpsDataNetionalRank(attendance_data);
  //           break;
  //         case 'Questions':
  //           data = rankView[title]
  //             ? mpsDataStateRank(question_data)
  //             : mpsDataNetionalRank(question_data);
  //           break;
  //         case 'Debates':
  //           data = rankView[title]
  //             ? mpsDataStateRank(mp_debate_data)
  //             : mpsDataNetionalRank(mp_debate_data);
  //           break;
  //         case 'Private Member Bill':
  //           data = rankView[title]
  //             ? mpsDataStateRank(private_bill_data)
  //             : mpsDataNetionalRank(private_bill_data);
  //           break;

  //         default:
  //           data = attendance_data;
  //           break;
  //       }
  //       return [title, sortByPerformance(data, activeSections[title])];
  //     })
  //   );
  // }, [rankView, activeSections, attendance_data]);

  const handleSectionChange = (section, sectionId) => {
    setActiveSections((prev) => ({ ...prev, [section]: sectionId }));

    const datasetMap = {
      Attendance: 'attendance_data',
      Questions: 'question_data',
      Debates: 'mp_debate_data',
      'Private Member Bill': 'private_bill_data',
    };

    const dataset = datasetMap[section];

    const basePayload = {
      datasets: [dataset],
      limit: 20,
      key:
        sectionId === 'top-performer'
          ? 'default'
          : sectionId === 'bottom-performer'
            ? 'bottom'
            : 'non_performer',
    };

    if (sectionId === 'bottom-performer') {
      basePayload.bottom = 1;
    } else if (sectionId === 'non-performer') {
      basePayload.non_percentage = 1;
    }

    dispatch(fetchMpsPerformanceData(basePayload));
  };

  // const handleSectionChange = (section, sectionId) => {
  //   setActiveSections((prev) => ({ ...prev, [section]: sectionId }));
  // };

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
        mps_Data={partial?.top_performance?.default || []}
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
