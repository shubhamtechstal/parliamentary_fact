import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import MpsPerformancePageComponent from 'components/Mps_performance/MpsPerformancePageComponent';
import PopulerMpsDetailsComponent from 'components/Mps_performance/details/PopulerMPsDetails';
import AdvertisementLayout from 'components/addLayout/AdvertisementLayout';
import ShareModal from 'components/common/modals/ShareModal';
import AutocompleteSearchBox from 'components/common/modals/AutoCompleateSearchBox';
import { Box, CircularProgress, Container } from '@mui/material';
import IconButton from 'components/common/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchMpsPerformanceData } from 'stores/redux/apiSlices/mps_PerformanceSlice';
// import {
//   mpsDataNetionalRank,
//   mpsDataStateRank,
// } from 'helpers/performanceConstants';

const MPsPerformanceContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialSection = searchParams.get('section');
  const [activeSection, setActiveSection] = useState(initialSection);
  const [openShare, setOpenShare] = useState(false);
  const [shareMpInfo, setshareMpInfo] = useState({});
  const [filterParams, setFilterParams] = useState({});
  const onSelectSearchBox = (value) => {
    setFilterParams((prev) => ({
      ...prev,
      mp_full_name: value?.full_name,
    }));
  };

  const handleOpenSharePopup = (mp_Info) => {
    setOpenShare((prev) => !prev);
    setshareMpInfo(mp_Info);
  };

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(
  //     fetchMpsPerformanceData({
  //       datasets: [
  //         'attendance_data',
  //         'question_data',
  //         'mp_fund_data',
  //         'popular_mps',
  //         'mp_debate_data',
  //         'private_bill_data',
  //       ],
  //       limit: 50,
  //     })
  //   );
  //   dispatch(
  //     fetchMpsPerformanceData({ datasets: ['top_performance'], limit: 50 })
  //   );
  // }, [dispatch]);
  // const { partial = {}, loading } = useSelector(
  //   (state) => state?.mpsPerformance
  // );
  // const {
  //   attendance_data,
  //   mp_debate_data,
  //   mp_fund_data,
  //   private_bill_data,
  //   question_data,
  //   top_performance,
  //   popular_mps,
  // } = partial;
  // console.log('mps_attendance_datamps_attendance_data', partial);
  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      setActiveSection(section);
    }
  }, [searchParams, initialSection]);

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    setSearchParams({ section: sectionId });
  };

  const handleBack = () => {
    setActiveSection(null);
    navigate('/mps-performance');
  };

  const sectionsComponets = [
    {
      id: 'popular-mps',
      component: (
        <PopulerMpsDetailsComponent
          datasetsKey={'popular_mps'}
          handleBack={handleBack}
          handleOpenSharePopup={handleOpenSharePopup}
          pageTitle={'Populer Mps Performance'}
        />
      ),
    },
    {
      id: 'top-performer-mps',
      component: (
        <PopulerMpsDetailsComponent
          datasetsKey={'top_performance'}
          handleBack={handleBack}
          handleOpenSharePopup={handleOpenSharePopup}
          pageTitle={'Top performer Mps Rating and Ranking'}
          // onFilterClick={onFilterClick}
        />
      ),
    },
    {
      id: 'mps-attendance',
      component: (
        <PopulerMpsDetailsComponent
          datasetsKey={'attendance_data'}
          handleBack={handleBack}
          handleOpenSharePopup={handleOpenSharePopup}
          pageTitle={'MPs Performance In Attendance'}
          cardName={'Attendance'}
          // onFilterClick={onFilterClick}
        />
      ),
    },
    {
      id: 'mps-questions',
      component: (
        <PopulerMpsDetailsComponent
          datasetsKey={'question_data'}
          handleBack={handleBack}
          handleOpenSharePopup={handleOpenSharePopup}
          pageTitle={'MPs Performance In Questions'}
          cardName={'Questions'}
          // onFilterClick={onFilterClick}
        />
      ),
    },
    {
      id: 'mps-debates',
      component: (
        <PopulerMpsDetailsComponent
          datasetsKey={'mp_debate_data'}
          handleBack={handleBack}
          handleOpenSharePopup={handleOpenSharePopup}
          pageTitle={'MPs Performance In Debates'}
          cardName={'Private Member Bill'}
          // onFilterClick={onFilterClick}
        />
      ),
    },
    {
      id: 'mps-private-member-bill',
      component: (
        <PopulerMpsDetailsComponent
          datasetsKey={'private_bill_data'}
          handleBack={handleBack}
          handleOpenSharePopup={handleOpenSharePopup}
          pageTitle={'MPs Performance In Private Member Bill'}
          cardName={'Private Member Bill'}
          // onFilterClick={onFilterClick}
        />
      ),
    },
  ];
  return (
    <AdvertisementLayout>
      {activeSection && (
        <Container
          sx={{
            display: 'flex',
            justifyContent: { xs: 'start', md: 'space-between' },
            gap: 2,
          }}
        >
          <IconButton onClick={handleBack}>
            <KeyboardBackspaceIcon />
          </IconButton>
          <Box sx={{ width: { xs: '60%', md: 'auto' } }}>
            <AutocompleteSearchBox onSelectMP={onSelectSearchBox} />
          </Box>
        </Container>
      )}
      {activeSection ? (
        sectionsComponets.find((s) => s.id === activeSection)?.component
      ) : 
        <MpsPerformancePageComponent
          handleDetailsClick={handleSectionChange}
          handleOpenSharePopup={handleOpenSharePopup}
          // mps_attendance_data={attendance_data}
          // top_performance={top_performance}
          // popular_mps={popular_mps}
          // mp_debate_data={mp_debate_data}
          // mp_fund_data={mp_fund_data}
          // private_bill_data={private_bill_data}
          // question_data={question_data}
        />
      // ) : (
      //   <Box
      //     sx={{
      //       height: '100vh',
      //       width: '100%',
      //       display: 'flex',
      //       justifyContent: 'center',
      //       alignItems: 'center',
      //     }}
      //   >
      //     <CircularProgress />
      //   </Box>
      // )
      }

      <ShareModal
        open={openShare}
        shareMpInfo={shareMpInfo}
        handleOpenSharePopup={handleOpenSharePopup}
      />
    </AdvertisementLayout>
  );
};

export default MPsPerformanceContainer;
