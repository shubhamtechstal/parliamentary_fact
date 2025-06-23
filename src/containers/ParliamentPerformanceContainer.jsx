import { Box, Button, Container, Grid } from '@mui/material';
import QuestionsDetail_Component from 'components/pmt_performance/details/question/QuestionsDetail_Component';
import ParliamentPerformancePageComponent from 'components/pmt_performance/pmt_prfrmc_home/ParliamentPerformancePageComponent';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import LsAttendanceDetails_Component from 'components/pmt_performance/details/attandance/LsAttendanceDetails_Component';
import AdvertisementLayout from 'components/addLayout/AdvertisementLayout';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPerformanceData,
  fetchQuestionDetailsData,
} from 'stores/redux/apiSlices/pmt_PerformanceSlice';
import AutocompleteSearchBox from 'components/common/modals/AutoCompleateSearchBox';
import GrayButton from 'components/common/GrayButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import IconButton from 'components/common/IconButton';
// import Text from 'components/common/Text';
// import PerformanceChips from 'components/pmt_performance/PerformanceChips';
// import { performace_chipList } from 'helpers/performanceConstants';
// import LokSabhaQuestionTopics from 'components/pmt_performance/details/question/QuestionTopics';
// import { RajyaSabhaPerformance } from 'components/pmt_performance/rajya-sabha/RajyaSabhaPerformance';
// import FilterModal from 'components/common/modals/FilterModal';

const ParliamentPerformanceContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [activeSabhaSection, setactiveSabhaSection] = useState('Lok Sabha');
  const navigate = useNavigate();

  const initialSection = searchParams.get('section');
  const [activeSection, setActiveSection] = useState(initialSection);
  const [filterParams, setFilterParams] = useState({});
  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      setActiveSection(section);
    }
    setFilterParams({});
  }, [searchParams, initialSection]);

  // Handle details chip  click
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
    // setSelectedSearchValue(value); // getting full object
    setFilterParams((prev) => ({
      ...prev,
      mp_full_name: value?.full_name,
    }));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPerformanceData());
  }, [dispatch]);
  const {
    attendanceDetails,
    questionsData,
    privateBillCount,
    govtBillCount,
    loksabhaName,
    pageData,
    loading,
    // questionDetails,
    // questionsLoading,
  } = useSelector((state) => state?.pmtPerformance);
  const sectionsComponets = [
    {
      id: 'questions-detail',
      component: (
        <QuestionsDetail_Component
          // questionDetails={questionDetails}
          filterParams={filterParams}
          // isLoading={questionsLoading}
        />
      ),
    },
    {
      id: 'attendance-details',
      component: <LsAttendanceDetails_Component />,
    },
  ];
  const LokeSabhaPerformance_Component = () => {
    return (
      <Box backgroundColor="#f6f6f6">
        {activeSection && (
          <>
            <Box
              sx={{
                display: 'flex',
                // margin: '1rem 3rem 0 2rem',
                justifyContent: 'space-between',
                position: 'relative',
                alignItems: 'center',
              }}
            >
              <Button
                onClick={handleBack}
                variant="outlined"
                sx={{ color: 'black', margin: '1rem 2rem 0' }}
              >
                <KeyboardBackspaceIcon /> back
              </Button>
              {activeSection == 'questions-detail' && (
                <AutocompleteSearchBox onSelectMP={onSelectSearchBox} />
              )}
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
      </Box>
    );
  };
  // const SabhaSectionComponets = [
  //   {
  //     id: 'Lok Sabha',
  //     url: 'lok-sabha-performance',
  //     component: <LokeSabhaPerformance_Component />,
  //   },
  //   {
  //     id: 'Rajya Sabha',
  //     url: 'rajya-sabha-performance',
  //     component: <RajyaSabhaPerformance />,
  //   },
  // ];

  return (
    <>
     <LokeSabhaPerformance_Component />
    </>
  );
};

export default ParliamentPerformanceContainer;
