import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import PopulerMpsDetailsComponent from 'components/Mps_performance/details/PopulerMPsDetails';
import AdvertisementLayout from 'components/addLayout/AdvertisementLayout';
import IconButton from 'components/common/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ShareModal from 'components/common/modals/ShareModal';
import AutocompleteSearchBox from 'components/common/modals/AutoCompleateSearchBox';
import MpsConstituencyPageComponent from 'components/mps_constituency/MpsConstituencyPageComponent';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMpsPerformanceData } from 'stores/redux/apiSlices/mps_PerformanceSlice';

const MpsConstituencyContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialSection = searchParams.get('section');
  const [activeSection, setActiveSection] = useState(initialSection);
  const [openShare, setOpenShare] = useState(false);
  const [filterParams, setFilterParams] = useState({});
  const onSelectSearchBox = (value) => {
    setFilterParams((prev) => ({
      ...prev,
      mp_full_name: value?.full_name,
    }));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMpsPerformanceData());
  }, [dispatch]);
  const { mps_attendance_data, mp_fund_data } = useSelector(
    (state) => state?.mpsPerformance
  );

  const handleOpenSharePopup = () => {
    setOpenShare((prev) => !prev);
  };

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
    navigate('/mps-constituency');
  };
  const mpsDataNetionalRank =
    mps_attendance_data?.map((data) => {
      return {
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
      };
    }) ?? [];
  const mpsDataStateRank =
    mps_attendance_data?.map((data) => {
      return {
        rank: data.national_rank,
        name: data.name,
        constituency: data.constituency,
        state: data.state_name,
        performance: data.national_percentage,
        rankTitle: 'State Rank:',
        party: data.party_short_name,
        mp_id: data.mp_id,
        presence: data.attendance_days,
        imageUrl: data.image,
      };
    }) ?? [];

  const sectionsComponets = [
    {
      id: 'popular-mps',
      component: (
        <PopulerMpsDetailsComponent
          handleBack={handleBack}
          handleOpenSharePopup={handleOpenSharePopup}
          mps_data={mps_attendance_data}
          pageTitle={'Populer Mps Performance'}
          mpsDataNetionalRank={mpsDataNetionalRank}
          mpsDataStateRank={mpsDataStateRank}
          // onFilterClick={onFilterClick}
        />
      ),
    },
    {
      id: 'top-performer-mps',
      component: (
        <PopulerMpsDetailsComponent
          handleBack={handleBack}
          handleOpenSharePopup={handleOpenSharePopup}
          mps_data={mps_attendance_data}
          pageTitle={'Populer Mps Performance'}
          mpsDataNetionalRank={mpsDataNetionalRank}
          mpsDataStateRank={mpsDataStateRank}
          // onFilterClick={onFilterClick}
        />
      ),
    },
    { id: 'health', component: 'Healthcare_Development' },
    { id: 'infrastructure', component: 'Infrastructure_Growth' },
    { id: 'defense', component: 'Defense_Policies' },
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
          <Box sx={{ width: { xs: '80%', md: 'auto' } }}>
            <AutocompleteSearchBox onSelectMP={onSelectSearchBox} />
          </Box>
        </Box>
      )}
      {activeSection ? (
        sectionsComponets.find((s) => s.id === activeSection)?.component
      ) : (
        <MpsConstituencyPageComponent
          handleDetailsClick={handleSectionChange}
          handleOpenSharePopup={handleOpenSharePopup}
        />
      )}

      <ShareModal
        open={openShare}
        handleOpenSharePopup={handleOpenSharePopup}
      />
    </AdvertisementLayout>
  );
};

export default MpsConstituencyContainer;
