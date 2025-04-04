import React, { useEffect, useState } from 'react';
import { Container, Grid, Box, Button } from '@mui/material';
import GrayButton from 'components/common/GrayButton';
import SectionHeading from 'components/common/SectionHeading';
import MpsPerformanceCard from './MpsPerformanceCard';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MpsPerformanceAttandanceCard from './MpsPerformanceAttandanceCard';

const mpData = new Array(10).fill({
  rank: '000',
  name: 'Neeraj Ram Mandola',
  constituency: 'Choudheer Mandola',
  performance: '52.9',
  image: 'https://via.placeholder.com/50', // Replace with actual image URL
});
const sections = [
  { id: 'top-performer', title: 'Top Performer' },
  { id: 'bottom-performer', title: 'Bottom Performer' },
  { id: 'non-performer', title: 'Non Performer' },
];

export default function MpsPerformanceInAttandance({ title }) {
  const [visibleMPs, setVisibleMPs] = useState(6);

  const loadMore = () => {
    setVisibleMPs((prev) => prev + 6);
  };
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    setActiveSection(sections[0].id);
  }, []);

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  console.log('activeSectionactiveSectionactiveSection', activeSection);
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>        
      <Box display={'flex'} justifyContent={'space-between'} alignItems={"center"}>
        <SectionHeading title={title} />
        {/* <a href='/mps-performance-in-attandance' style={{textDecoration:'none', backgroundColor:'#fff', height:"30px", borderRadius:'18px', padding:'2px 30px', fontSize:'0.8rem'}}>Know more</a> */}
        <GrayButton bgColor='#fff' textColor="#00000080">Know More</GrayButton>
        </Box>
      {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleSectionChange(section.id)}
            style={{
              margin: '5px',
              borderBottom:
                activeSection == section.id ? '3px solid #f1807c' : 'none',
              background: 'transparent',
              border: 'none',paddingBottom:'5px'
            }}
          >
            {section.title}
          </button>
        )
      )}

      <div>
        <h2>{sections.find((s) => s.id === activeSection)?.title}</h2>
        <p>Content for {activeSection} section...</p>
      </div>

      <Grid container spacing={2}sx={{ py: 4 }}>
        {mpData.slice(0, visibleMPs).map((mp, index) => (
          <MpsPerformanceAttandanceCard mp={mp} index={index} />
        ))}
      </Grid>
      <Grid container spacing={2}>
        {mpData.slice(0, visibleMPs).map((mp, index) => (
          <MpsPerformanceCard mp={mp} index={index} />
        ))}
      </Grid>
    </Container>
  );
}
