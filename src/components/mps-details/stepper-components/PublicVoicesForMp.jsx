import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import MpsHomeCampaignCard from '../commonfiles/MpsHomeCampaignCard';
import PublicRequestCard from '../commonfiles/PublicRequestCard';
const mpsStapperTitles = [
  { id: 'yahan-kharch-kijiye-sansad-ji', title: "Yahan Kharch Kijiye Sansad Ji" },
  { id: 'sansad-ji-puchiye-mera-sawal', title: "Sansad Ji Puchiye Mera Sawal" },
];
const PublicVoicesForMp = () => {
  let campaignData = [
    {
      sender: 'SURAJ RAJ SINGH',
      mpName: 'Rahul Gupta Neeraj Gupta Neeraj',
      msgText:
        'infinite loop loading animation effect using html css and svg. svg loading animation effect tutorial.',
      likesCount: 900,
      commentsCount: 200,
      folowCount: 200,
    },
  ];
  const mpNationalDomy = {
    rank: '001',
    name: 'Amit Kumar Singh',
    constituency: 'Varanasi',
    performance: '78.2',
    rankTitle: 'National Rank:',
    image: 'https://via.placeholder.com/50',
    partyName: 'BJP',
  };
    const [activeSection, setActiveSection] = useState(mpsStapperTitles[0].id);
    const handleSectionChange = (sectionId) => {
      setActiveSection(sectionId);
    };
  
  return (
    <Box>
      <Box
        sx={{
          overflowX: 'auto',
          display: 'flex',
          flexWrap: 'nowrap',
          textWrap: 'nowrap',
          pt: { md: '0rem', xs: '1rem' },
          pl: {xs :1, md: 3},
        }}
      >
        {mpsStapperTitles?.map((section) => (
          <button
            key={section.id}
            onClick={() => handleSectionChange(section.id)}
            style={{
              margin: '5px',
              borderTop: 'none',
              borderRight: 'none',
              borderLeft: 'none',
              borderBottom:
                activeSection == section.id ? '3px solid #f1807c' : 'none',
              background: 'transparent',
              paddingBottom: '5px',
            }}
          >
            {section.title}
          </button>
        ))}
      </Box>
      <Box
        sx={{
          p: 2,
          maxWidth: 400,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 'auto',
          gap: 5,
        }}
      >
        <img
          src="/Assets/icons/kharchImage.png"
          alt="Yahan kharch kijiye Saansad ji"
          width="200px"
          style={{ margin: 'auto' }}
        />
        <h3
          style={{
            width: '90%',
            textAlign: 'center',
            margin: 'auto',
            fontSize: '14px',
            color: '#000000',
          }}
        >
          Italy Lombardia reports first 2 coronavirus deaths amid jump in
          casesItaly LombardiaItaly Lombardia reports first 2 coronavirus deaths
          amid jump in casesItaly LombardiaItaly Lombardia reports first 2
        </h3>
        <Button
          variant="contained"
          sx={{
            display: 'block',
            mx: 'auto',
            mb: 3,
            borderRadius: 5,
            backgroundColor: '#0d0d6e',
            color: '#fff',
            width: '200px',
          }}
        >
          Click here
        </Button>
      </Box>
      <Box p={2}>
        <h2 style={{ marginBottom: '0' }}>Public Request</h2>
        <p style={{ marginTop: '0', marginBottom: '2rem' }}>Campaign</p>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: {xs:'center',  md : 'flex-start'},
            width: '100%',
            gap: 2,
          }}
        >
          {campaignData?.map((campaignInfo, i) => {
            return (
              <MpsHomeCampaignCard
                key={i}
                cardInfo={campaignInfo}
                mp={mpNationalDomy}
                isPublicRequest={true}
              />
            );
          })}
          <PublicRequestCard
            message={
              'infinite loop loading animation effect using html css and svg. svg loading animation effect tutorial.'
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PublicVoicesForMp;
