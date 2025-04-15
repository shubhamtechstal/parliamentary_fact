import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import MpsPerformancePageComponent from 'components/Mps_performance/MpsPerformancePageComponent';
import PopulerMpsDetailsComponent from 'components/Mps_performance/details/PopulerMPsDetails';
import AdvertisementLayout from 'components/addLayout/AdvertisementLayout';
import FilterModal from 'components/common/modals/FilterModal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSessionsFilterData } from 'stores/redux/apiSlices/commonSlice';
import ShareModal from 'components/common/modals/ShareModal';
import TopPerformerMpsDetails from 'components/Mps_performance/details/TopPerformerMpsDetails';

const MPsPerformanceContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialSection = searchParams.get('section');
  const [activeSection, setActiveSection] = useState(initialSection);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedSessions, setSelectedSessions] = useState([]);
  const [filterParams, setFilterParams] = useState({
    // year_id: '',
    loksabha_id: '6',
    // session_id: '',
  });
  const handleYearChange = (year) => {
    setSelectedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
    onChangeFilter({ name: 'year_id', value: year });
  };

  const handleSessionChange = (session) => {
    setSelectedSessions((prev) =>
      prev.includes(session)
        ? prev.filter((s) => s !== session)
        : [...prev, session]
    );
    onChangeFilter({ name: 'session_id', value: session });
  };
  const onFilterClick = () => {
    setOpenFilterModal((prev) => !prev);
  };
  const handleClearfilter = () => {
    setSelectedYears([]);
    setSelectedSessions([]);
    setFilterParams({
      // year_id: '',
      loksabha_id: '6',
      // session_id: '',
    });
  };

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
    navigate('/mps-performance');
  };
  const sectionsComponets = [
    {
      id: 'popular-mps',
      component: <PopulerMpsDetailsComponent handleOpenSharePopup={handleOpenSharePopup} onFilterClick={onFilterClick} handleClearfilter={handleClearfilter} />,
    },
    {
      id: 'top-performer-mps',
      component: <TopPerformerMpsDetails handleOpenSharePopup={handleOpenSharePopup} onFilterClick={onFilterClick} handleClearfilter={handleClearfilter}/>,
    },
    { id: 'health', component: 'Healthcare_Development' },
    { id: 'infrastructure', component: 'Infrastructure_Growth' },
    { id: 'defense', component: 'Defense_Policies' },
  ];
  const dispatch = useDispatch();
  const onChangeFilter = ({ name, value }) => {
    setFilterParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const { sessions, loading } = useSelector((state) => state?.pmtSessions);
  useEffect(() => {
    dispatch(fetchSessionsFilterData(filterParams));
  }, [dispatch, filterParams]);
  return (
    <AdvertisementLayout>
      {activeSection && (
        <Button
          onClick={handleBack}
          sx={{ margin: '1rem 2rem 0' }}
          variant="outlined"
        >
          Back
        </Button>
      )}

      {activeSection ? (
        sectionsComponets.find((s) => s.id === activeSection)?.component
      ) : (
        <MpsPerformancePageComponent
          onFilterClick={() => setOpenFilterModal(true)}
          handleDetailsClick={handleSectionChange}
          handleOpenSharePopup={handleOpenSharePopup}
        />
      )}
      <FilterModal
        openModal={openFilterModal}
        handleClose={() => setOpenFilterModal(false)}
        sessionsData={sessions}
        sessionsLoading={loading}
        onChangeFilter={onChangeFilter}
        filterParams={filterParams}
        selectedYears={selectedYears}
        selectedSessions={selectedSessions}
        handleYearChange={handleYearChange}
        handleSessionChange={handleSessionChange}
      />

      <ShareModal open={openShare} handleOpenSharePopup={handleOpenSharePopup} />
    </AdvertisementLayout>
  );
};

export default MPsPerformanceContainer;
