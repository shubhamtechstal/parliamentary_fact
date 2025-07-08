import React, { useState } from 'react';
import MpsDetailHerosection from './HeroSection';
import MpsHomeComponent from './stepper-components/Mps-home';
import MpsPmtPerformance from './stepper-components/MpsPmtPerformance';
import MpsConstituencyPerformance from './stepper-components/MpsConstituencyPerformance';
// import MpsDetailsPublicRating from './stepper-components/MpsDetailsPublicRating';
// import MpsNewsAndVideo from './stepper-components/MpsNews-Video';
// import PublicVoicesForMp from './stepper-components/PublicVoicesForMp';
import MpsProfile from './stepper-components/MpsProfile';
import { Box, Container } from '@mui/material';

const mpsStapperTitles = [
  { id: 'mps-home', title: "MP's Home" },
  { id: 'parliament-performance', title: 'Parliament Performance' },
  { id: 'constituency-performance', title: 'Constituency Performance' },
  // { id: 'public-rating', title: 'Public Rating' },
  // { id: 'news-and-video', title: 'News & Video' },
  // { id: 'public-voice', title: 'Public Voice' },
  { id: 'mps-profile', title: "Mp's Profile" },
];

function MpDetailsPageComponent({ mpDetails }) {
  const {
    home = {},
    parliament_performance = [],
    constituency_performance,
    mp_profile_detail,
  } = mpDetails ?? {};
  const [activeSection, setActiveSection] = useState(mpsStapperTitles[0].id);
  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };
  const sectionComponets = [
    {
      id: 'mps-home',
      component: <MpsHomeComponent mpsHome={home ?? {}} />,
    },
    {
      id: 'parliament-performance',
      component: (
        <MpsPmtPerformance parliament_performance={parliament_performance} />
      ),
    },
    {
      id: 'constituency-performance',
      component: <MpsConstituencyPerformance constituency_performance={constituency_performance}/>,
    },
    // {
    //   id: 'public-rating',
    //   component: <MpsDetailsPublicRating />,
    // },
    // {
    //   id: 'news-and-video',
    //   component: <MpsNewsAndVideo />,
    // },
    // {
    //   id: 'public-voice',
    //   component: <PublicVoicesForMp />,
    // },
    {
      id: 'mps-profile',
      component: (
        <MpsProfile mp_profile_detail={mp_profile_detail} homeInfo={home} />
      ),
    },
  ];
  return (
    <Box>
      <Container
        sx={{
          overflowX: 'auto',
          display: 'flex',
          flexWrap: 'nowrap',
          textWrap: 'nowrap',
          py: '0.8rem',
          gap: '1rem',
        }}
      >
        {mpsStapperTitles?.map((section) => (
          <button
            key={section.id}
            onClick={() => handleSectionChange(section.id)}
            style={{
              // margin: '5px',
              borderTop: 'none',
              borderRight: 'none',
              borderLeft: 'none',
              borderBottom:
                activeSection == section.id ? '3px solid #f1807c' : 'none',
              background: 'transparent',
              paddingBottom: '5px',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            {section.title}
          </button>
        ))}
      </Container>
      <Box
        sx={{
          padding: { md: '2rem', xs: '1rem' },
          background:
            'transparent linear-gradient(14deg, #FFFFFF 0%, #EDF2F6 100%) 0% 0% no-repeat padding-box',
        }}
      >
        {/* MpDetails {id} PageComponent */}
        <MpsDetailHerosection mpBasicInfo={home} />
      </Box>
      <Box
        sx={{
          // padding: { md: '2rem', xs: '1rem' },
          background:
            'transparent linear-gradient(15deg, #FFFFFF 0%, #EDF2F6 100%) 0% 0% no-repeat padding-box',
        }}
      >
          {sectionComponets.find((s) => s.id === activeSection)?.component}
       
      </Box>
    </Box>
  );
}

export default MpDetailsPageComponent;
