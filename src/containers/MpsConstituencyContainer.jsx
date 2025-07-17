import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import MpsListComponent from 'components/Mps_performance/details/MpsListComponent';
import AdvertisementLayout from 'components/addLayout/AdvertisementLayout';
import IconButton from 'components/common/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ShareModal from 'components/common/modals/ShareModal';
import AutocompleteSearchBox from 'components/common/modals/AutoCompleateSearchBox';
import MpsConstituencyPageComponent from 'components/mps_constituency/MpsConstituencyPageComponent';
import { Box, Container } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchMpsPerformanceData } from 'stores/redux/apiSlices/mps_PerformanceSlice';
// import { mpsDataNetionalRank, mpsDataStateRank } from 'helpers/performanceConstants';

const MpsConstituencyContainer = () => {
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
  console.log('filterParams', filterParams);
  const handleOpenSharePopup = (mp_Info) => {
    setOpenShare((prev) => !prev);
    setshareMpInfo(mp_Info);
  };

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      setActiveSection(section);
    }
  }, [searchParams, initialSection]);
  const handleSectionChange = (sectionId, shortBy) => {
    setActiveSection(sectionId);
    if (shortBy) {
      setSearchParams({ section: sectionId, shortBy });
    } else {
      setSearchParams({ section: sectionId });
    }
  };

  const handleBack = () => {
    setActiveSection(null);
    navigate('/mps-constituency');
  };

  const sectionsComponets = [
    {
      id: 'popular-mps',
      component: (
        <MpsListComponent
          handleBack={handleBack}
          handleOpenSharePopup={handleOpenSharePopup}
          // mps_data={popular_mps}
          pageTitle={'Populer Mps Performance In Mp Led Fund'}
          datasetsKey={'constituency_popular_mps'}
          filterParams={filterParams}
        />
      ),
    },
    {
      id: 'top-performer-mps',
      component: (
        <MpsListComponent
          handleBack={handleBack}
          handleOpenSharePopup={handleOpenSharePopup}
          filterParams={filterParams}
          // mps_data={mp_fund_data}
          pageTitle={'Top Performer MPs Rating and Ranking'}
          datasetsKey={'mp_fund_data'}
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
      ) : (
        <MpsConstituencyPageComponent
          handleDetailsClick={handleSectionChange}
          handleOpenSharePopup={handleOpenSharePopup}
        />
      )}

      <ShareModal
        open={openShare}
        shareMpInfo={shareMpInfo}
        handleOpenSharePopup={handleOpenSharePopup}
      />
    </AdvertisementLayout>
  );
};

export default MpsConstituencyContainer;
