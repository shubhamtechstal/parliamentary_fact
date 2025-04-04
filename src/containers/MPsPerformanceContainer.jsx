import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import LsAttendanceDetails_Component from 'components/pmt_performance/details/LsAttendanceDetails_Component';
import MpsPerformancePageComponent from 'components/Mps_performance/MpsPerformancePageComponent';
import PopulerMpsDetailsComponent from 'components/Mps_performance/details/PopulerMPsDetails';
import AdvertisementLayout from 'components/addLayout/AdvertisementLayout';
import FilterModal from 'components/common/modals/FilterModal';

const MPsPerformanceContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialSection = searchParams.get('section');
  const [activeSection, setActiveSection] = useState(initialSection);
  const [openModal, setOpenModal] = useState(false);
  const onFilterClick = () => {
    setOpenModal((prev)=>(!prev));
  }
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
    { id: 'populer-mps', component: <PopulerMpsDetailsComponent onFilterClick={onFilterClick} /> },
    {
      id: 'attendance-details',
      component: <LsAttendanceDetails_Component />,
    },
    { id: 'health', component: 'Healthcare_Development' },
    { id: 'infrastructure', component: 'Infrastructure_Growth' },
    { id: 'defense', component: 'Defense_Policies' },
  ];
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
        <MpsPerformancePageComponent  onFilterClick={() => setOpenModal(true)} handleDetailsClick={handleSectionChange} />
      )}
      <FilterModal openModal={openModal} handleClose={() => setOpenModal(false)} />
    </AdvertisementLayout>
  );
};

export default MPsPerformanceContainer;
