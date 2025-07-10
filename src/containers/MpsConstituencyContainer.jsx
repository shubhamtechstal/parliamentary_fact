import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import PopulerMpsDetailsComponent from 'components/Mps_performance/details/PopulerMPsDetails';
import AdvertisementLayout from 'components/addLayout/AdvertisementLayout';
import IconButton from 'components/common/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ShareModal from 'components/common/modals/ShareModal';
import AutocompleteSearchBox from 'components/common/modals/AutoCompleateSearchBox';
import MpsConstituencyPageComponent from 'components/mps_constituency/MpsConstituencyPageComponent';
import { Box, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMpsPerformanceData } from 'stores/redux/apiSlices/mps_PerformanceSlice';
import { mpsDataNetionalRank, mpsDataStateRank } from 'helpers/performanceConstants';

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

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    setSearchParams({ section: sectionId });
  };

  const handleBack = () => {
    setActiveSection(null);
    navigate('/mps-constituency');
  };

  const sectionsComponets = [
    {
      id: 'popular-mps',
      component: (
        <PopulerMpsDetailsComponent
          handleBack={handleBack}
          handleOpenSharePopup={handleOpenSharePopup}
          // mps_data={popular_mps}
          pageTitle={'Populer Mps Performance'}
          datasetsKey={'popular_mps'}
          // mpsDataNetionalRank={mpsDataNetionalRank(popular_mps)}
          // mpsDataStateRank={mpsDataStateRank(popular_mps)}
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
          // mps_data={mp_fund_data}
          pageTitle={'Populer Mps Performance'}
          datasetsKey={'mp_fund_data'}
          // mpsDataNetionalRank={mpsDataNetionalRank(mp_fund_data)}
          // mpsDataStateRank={mpsDataStateRank(mp_fund_data)}
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
          <Box sx={{ width: { xs: '60%', md: 'auto' }, }}>
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
