import { Box, Button } from '@mui/material';
import QuestionsDetail_Component from 'components/pmt_performance/details/QuestionsDetail_Component';
import LS_attendance from 'components/pmt_performance/LS_attendance';
import ParliamentPerformancePageComponent from 'components/pmt_performance/ParliamentPerformancePageComponent';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import LsAttendanceDetails_Component from 'components/pmt_performance/details/LsAttendanceDetails_Component';

const sections = [
  //   { id: 'page-container' },
  { id: 'attendance-details' },
  { id: 'questions-detail' },
  { id: 'health' },
  { id: 'infrastructure' },
  { id: 'defense' },
];
const ParliamentPerformanceContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  // Read section from URL or default to first section
  const initialSection = searchParams.get('section');
  const [activeSection, setActiveSection] = useState(initialSection);

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
    // const prevIndex = sections.findIndex((s) => s.id === activeSection) - 1;
    // if (prevIndex >= 0) {
    //   const prevSection = sections[prevIndex].id;
    setActiveSection(null);
    navigate('/parliament-performance');
    // } else {
    //   navigate('/'); // Navigate to home or another page if first section
    // }
  };
  const sectionsComponets = [
    { id: 'questions-detail', component: <QuestionsDetail_Component /> },
    {
      id: 'attendance-details',
      component: (
        <LsAttendanceDetails_Component />
      ),
    },
    { id: 'health', component: 'Healthcare_Development' },
    { id: 'infrastructure', component: 'Infrastructure_Growth' },
    { id: 'defense', component: 'Defense_Policies' },
  ];
  return (
    <Box
      style={{
        padding: '1rem 0',
        color: '#00000080',
        backgroundColor: '#EEF3F7',
        fontFamily: '"Sora", sans-serif',
        scrollbarColor: 'transparent transparent',
      }}
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
      {/* <h1>Parliament Performance</h1>
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => handleSectionChange(section.id)}
          style={{
            margin: '5px',
            background: activeSection === section.id ? 'blue' : 'gray',
            color: 'white',
          }}
        >
          {section.id}
        </button>
      ))} 
      <div>
        <h2>{sections.find((s) => s.id === activeSection)?.title}</h2>
        <p>Content for {activeSection} section...</p>
      </div>
       */}

      {activeSection ? (
        sectionsComponets.find((s) => s.id === activeSection)?.component
      ) : (
        <ParliamentPerformancePageComponent
          handleSectionDetailClick={handleSectionChange}
        />
      )}
    </Box>
  );
};

export default ParliamentPerformanceContainer;
