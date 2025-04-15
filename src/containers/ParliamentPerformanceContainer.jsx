import { Box, Button, Grid } from '@mui/material';
import QuestionsDetail_Component from 'components/pmt_performance/details/QuestionsDetail_Component';
import ParliamentPerformancePageComponent from 'components/pmt_performance/ParliamentPerformancePageComponent';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import LsAttendanceDetails_Component from 'components/pmt_performance/details/LsAttendanceDetails_Component';
import AdvertisementLayout from 'components/addLayout/AdvertisementLayout';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPerformanceData,
  fetchQuestionDetailsData,
} from 'stores/redux/apiSlices/pmt_PerformanceSlice';
import AutocompleteSearchBox from 'components/common/modals/AutoCompleateSearchBox';
import GrayButton from 'components/common/GrayButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import IconButton from 'components/common/IconButton';
// import FilterModal from 'components/common/modals/FilterModal';

const ParliamentPerformanceContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  // Read section from URL or default to first section
  const initialSection = searchParams.get('section');
  const [activeSection, setActiveSection] = useState(initialSection);
  const [filterParams, setFilterParams] = useState({});
  const [selectedSearchValue, setSelectedSearchValue] = useState(null); // holds full object
  const [appliedFilterFromPoup, setAppliedFilterFromPoup] = useState(null);
  console.log('appliedFilterFromPoup', appliedFilterFromPoup);

  // const onChangeFilter = ({ name, value }) => {
  //   setFilterParams((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };
  // const handleClearfilter = () => {
  //   setFilterParams({});
  // };
  const handleSetAppliedFilterFromPoup = (filterParams) => {
    setAppliedFilterFromPoup(filterParams);
  };
  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      setActiveSection(section);
    }
  }, [searchParams, initialSection]);

  // Handle button click
  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    setSearchParams({ section: sectionId });
  };

  // Handle Back button
  const handleBack = () => {
    setActiveSection(null);
    navigate('/parliament-performance');
  };

  const onSelectSearchBox = (value) => {
    setSelectedSearchValue(value);
    setFilterParams((prev) => ({
      ...prev,
      mp_full_name: value?.full_name,
    }));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPerformanceData());
    dispatch(
      fetchQuestionDetailsData({ ...filterParams, ...appliedFilterFromPoup })
    );
  }, [dispatch, filterParams, appliedFilterFromPoup]);
  const {
    attendanceDetails,
    questionsData,
    privateBillCount,
    govtBillCount,
    loksabhaName,
    pageData,
    loading,
    error,
    questionDetails,
  } = useSelector((state) => state?.pmtPerformance);
  const sectionsComponets = [
    {
      id: 'questions-detail',
      component: (
        <QuestionsDetail_Component
          questionDetails={questionDetails}
          isLoading={loading}
          selectedSearchValue={selectedSearchValue}
          setAppliedFilter={handleSetAppliedFilterFromPoup}
          //   onFilterClick={onFilterClick}
        />
      ),
    },
    {
      id: 'attendance-details',
      component: (
        <LsAttendanceDetails_Component
          setAppliedFilter={handleSetAppliedFilterFromPoup}
          isLoading={loading}
        />
      ),
    },
  ];
  return (
    <AdvertisementLayout>
      {activeSection && (
        <>
          <Box
            sx={{
              display: 'flex',
              margin: '1rem 3rem 0 2rem',
              justifyContent: 'space-between',
              position: 'relative',
              alignItems: 'center',
            }}
          >
            <IconButton
              onClick={handleBack}
              // sx={{ position: 'absolute', left: '10px', top: '10px' }}
            >
              <KeyboardBackspaceIcon />
            </IconButton>
            <AutocompleteSearchBox onSelectMP={onSelectSearchBox} />
            {/* <GrayButton onClick={handleBack} height="30px" width='200px' variant="outlined">
              Search
            </GrayButton> */}
          </Box>
        </>
      )}

      {activeSection ? (
        sectionsComponets.find((s) => s.id === activeSection)?.component
      ) : (
        <ParliamentPerformancePageComponent
          handleSectionDetailClick={handleSectionChange}
          attendanceDetails={attendanceDetails}
          questionsData={questionsData}
          privateBillCount={privateBillCount}
          govtBillCount={govtBillCount}
          loksabhaName={loksabhaName}
          pageData={pageData}
          loading={loading}
        />
      )}
      {/* <FilterModal openModal={openModal} handleClose={() => setOpenModal(false)} /> */}
    </AdvertisementLayout>
  );
};

export default ParliamentPerformanceContainer;
