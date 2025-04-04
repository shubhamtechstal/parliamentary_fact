import { Box, Button, Grid } from '@mui/material';
import QuestionsDetail_Component from 'components/pmt_performance/details/QuestionsDetail_Component';
import ParliamentPerformancePageComponent from 'components/pmt_performance/ParliamentPerformancePageComponent';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import LsAttendanceDetails_Component from 'components/pmt_performance/details/LsAttendanceDetails_Component';
import AdvertisementLayout from 'components/addLayout/AdvertisementLayout';
import FilterModal from 'components/common/modals/FilterModal';

const ParliamentPerformanceContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  // Read section from URL or default to first section
  const initialSection = searchParams.get('section');
  const [activeSection, setActiveSection] = useState(initialSection);
  const [openModal, setOpenModal] = useState(false);
  const onFilterClick = () => {
    setOpenModal((prev)=>(!prev));
  }
  // Update state when query param changes
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
  const sectionsComponets = [
    { id: 'questions-detail', component: <QuestionsDetail_Component onFilterClick={onFilterClick}/> },
    {
      id: 'attendance-details',
      component: <LsAttendanceDetails_Component onFilterClick={onFilterClick} />,
    },
    { id: 'health', component: 'Healthcare_Development' },
    { id: 'infrastructure', component: 'Infrastructure_Growth' },
    { id: 'defense', component: 'Defense_Policies' },
  ];
  return (
    <AdvertisementLayout
    //   style={{
    //     // padding: '1rem 0',
    //     color: '#00000080',
    //     backgroundColor: '#EEF3F7',
    //     fontFamily: '"Sora", sans-serif',
    //     scrollbarColor: 'transparent transparent',
    //   }}
    >
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
          <ParliamentPerformancePageComponent
            handleSectionDetailClick={handleSectionChange}
          />
        )}
        <FilterModal openModal={openModal} handleClose={() => setOpenModal(false)} />
    </AdvertisementLayout>
  );
};

export default ParliamentPerformanceContainer;
