import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import MpsPerformancePageComponent from 'components/Mps_performance/MpsPerformancePageComponent';
import PopulerMpsDetailsComponent from 'components/Mps_performance/details/PopulerMPsDetails';
import AdvertisementLayout from 'components/addLayout/AdvertisementLayout';
import ShareModal from 'components/common/modals/ShareModal';
import AutocompleteSearchBox from 'components/common/modals/AutoCompleateSearchBox';
import { Box, CircularProgress } from '@mui/material';
import IconButton from 'components/common/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMpsPerformanceData } from 'stores/redux/apiSlices/mps_PerformanceSlice';

const MPsPerformanceContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialSection = searchParams.get('section');
  const [activeSection, setActiveSection] = useState(initialSection);
  const [openShare, setOpenShare] = useState(false);
  const [shareMpId, setshareMpId] = useState('00');
  const [filterParams, setFilterParams] = useState({});
  const onSelectSearchBox = (value) => {
    setFilterParams((prev) => ({
      ...prev,
      mp_full_name: value?.full_name,
    }));
  };

  const handleOpenSharePopup = (mp_id) => {
    setOpenShare((prev) => !prev);
    setshareMpId(mp_id);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMpsPerformanceData());
  }, [dispatch]);
  const {
    mps_attendance_data,
    mp_debate_data,
    mp_fund_data,
    private_bill_data,
    question_data,
    top_performance,
    popular_mps,
    loading,
  } = useSelector((state) => state?.mpsPerformance);
  console.log(
    'mps_attendance_datamps_attendance_data',
    mps_attendance_data,
    'loading=',
    loading
  );
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
  const mpsDataNetionalRank = (mps__data) => {
    const result = [];
    mps__data?.forEach((data) => {
      result.push({
        rank: data.national_rank,
        name: data.name,
        constituency: data.constituency,
        state: data.state_name,
        performance: data.national_percentage,
        rankTitle: 'National Rank:',
        party: data.party_short_name,
        mp_id: data.mp_id,
        presence: data.attendance_days,
        imageUrl: data.image,
      });
    });
    return result;
  };
  const mpsDataStateRank = (mps__data) => {
    const result = [];
    mps__data?.forEach((data) => {
      result.push({
        rank: data.national_rank,
        mp_id: data.mp_id,
        name: data.name,
        constituency: data.constituency,
        state: data.state_name,
        performance: data.national_percentage,
        rankTitle: 'State Rank:',
        party: data.party_short_name,
        mp_id: data.mp_id,
        presence: data.attendance_days,
        imageUrl: data.image,
      });
    });
    return result;
  };

  // const mpsDataNetionalRank =
  //   mps_attendance_data?.map((data) => {
  //     return {
  //       rank: data.national_rank,
  //       name: data.name,
  //       constituency: data.constituency,
  //       state: data.state_name,
  //       performance: data.national_percentage,
  //       rankTitle: 'National Rank:',
  //       party: data.party_short_name,
  //       mp_id: data.mp_id,
  //       presence: data.attendance_days,
  //       imageUrl: data.image,
  //     };
  //   }) ?? [];

  // const mpsDataStateRank =
  //   mps_attendance_data?.map((data) => {
  //     return {
  //       rank: data.national_rank,
  //       name: data.name,
  //       constituency: data.constituency,
  //       state: data.state_name,
  //       performance: data.national_percentage,
  //       rankTitle: 'State Rank:',
  //       party: data.party_short_name,
  //       mp_id: data.mp_id,
  //       presence: data.attendance_days,
  //       imageUrl: data.image,
  //     };
  //   }) ?? [];

  const sectionsComponets = [
    {
      id: 'popular-mps',
      component: (
        <PopulerMpsDetailsComponent
          handleBack={handleBack}
          handleOpenSharePopup={handleOpenSharePopup}
          pageTitle={'Populer Mps Performance'}
          mpsDataNetionalRank={mpsDataNetionalRank(popular_mps)}
          mpsDataStateRank={mpsDataStateRank}
        />
      ),
    },
    {
      id: 'top-performer-mps',
      component: (
        <PopulerMpsDetailsComponent
          handleBack={handleBack}
          handleOpenSharePopup={handleOpenSharePopup}
          pageTitle={'Top performer Mps Rating and Ranking'}
          mpsDataNetionalRank={mpsDataNetionalRank(top_performance)}
          mpsDataStateRank={mpsDataStateRank}
          // onFilterClick={onFilterClick}
        />
      ),
    },
    {
      id: 'mps-attendance',
      component: (
        <PopulerMpsDetailsComponent
          handleBack={handleBack}
          handleOpenSharePopup={handleOpenSharePopup}
          pageTitle={'MPs Performance In Attendance'}
          mpsDataNetionalRank={mpsDataNetionalRank(mps_attendance_data)}
          mpsDataStateRank={mpsDataStateRank}
          cardName={'Attendance'}
          // onFilterClick={onFilterClick}
        />
      ),
    },
    {
      id: 'mps-questions',
      component: (
        <PopulerMpsDetailsComponent
          handleBack={handleBack}
          handleOpenSharePopup={handleOpenSharePopup}
          pageTitle={'MPs Performance In Questions'}
          mpsDataNetionalRank={mpsDataNetionalRank(question_data)}
          mpsDataStateRank={mpsDataStateRank}
          cardName={'Questions'}
          // onFilterClick={onFilterClick}
        />
      ),
    },
    {
      id: 'mps-debates',
      component: (
        <PopulerMpsDetailsComponent
          handleBack={handleBack}
          handleOpenSharePopup={handleOpenSharePopup}
          pageTitle={'MPs Performance In Debates'}
          mpsDataNetionalRank={mpsDataNetionalRank(mp_debate_data)}
          mpsDataStateRank={mpsDataStateRank}
          cardName={'Private Member Bill'}
          // onFilterClick={onFilterClick}
        />
      ),
    },
    {
      id: 'mps-private-member-bill',
      component: (
        <PopulerMpsDetailsComponent
          handleBack={handleBack}
          handleOpenSharePopup={handleOpenSharePopup}
          pageTitle={'MPs Performance In Private Member Bill'}
          mpsDataNetionalRank={mpsDataNetionalRank(private_bill_data)}
          mpsDataStateRank={mpsDataStateRank}
          cardName={'Private Member Bill'}
          // onFilterClick={onFilterClick}
        />
      ),
    },
  ];
  return (
    <AdvertisementLayout>
      {activeSection && (
        <Box
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
        </Box>
      )}
      {activeSection ? (
        sectionsComponets.find((s) => s.id === activeSection)?.component
      ) : mps_attendance_data?.length > 0 ? (
        <MpsPerformancePageComponent
          handleDetailsClick={handleSectionChange}
          handleOpenSharePopup={handleOpenSharePopup}
          mps_attendance_data={mps_attendance_data}
          top_performance={top_performance}
          popular_mps={popular_mps}
          mp_debate_data={mp_debate_data}
          mp_fund_data={mp_fund_data}
          private_bill_data={private_bill_data}
          question_data={question_data}
        />
      ) : (
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
      )}

      <ShareModal
        open={openShare}
        shareMpId={shareMpId}
        handleOpenSharePopup={handleOpenSharePopup}
      />
    </AdvertisementLayout>
  );
};

export default MPsPerformanceContainer;
