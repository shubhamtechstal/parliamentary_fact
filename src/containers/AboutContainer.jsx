import { BorderBottom } from '@mui/icons-material';
import { Box, Divider } from '@mui/material';
import Text from 'components/common/Text';
import '../App.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AboutContainer() {
  const navigate = useNavigate();
  const aboutUs = [
    'Parliamentary Fact is located in green full New Delhi, India. We’re a media company specializing in creating strong branding for social and environmentally-conscious companies. We love working with companies that want high quality web and logo identity, from the look and feel of your site, to the colour palette that will be used across all mediums including, web, print, identity, and advertising.',
    'We will create an identity for your company that your demographic can identify with so they feel connected to your purpose in creating a better world. We’ve helped countless businesses from around the globe start their businesses online. We would love to help yours. Contact us any time to see how we can be of service.',
    'Founded in 2013 by Mr Neeraj Gupta. We’re a media company with presence in the Digital Media. We are engaged mainly in the business of evaluating Performance of Parliament & MPs, broadcasting of news etc. Aim of PB Broadcast Media Private Limited is to provide a meaningful platform where people can evaluate Performance and interact with their representatives and been aware with our Democratic & Parliamentary System.',
    'Human being needs five vital elements to live: water, air, earth, fire and sky without these elements human life is not possible. But if we are not aware of the criticality of all these then we are like lifeless objects. Our aim is to make people aware about social evils which can be a threat to human life.',
  ];
const ourVision = [
  "We are Public Representatives Rating , Ranking based research & Media Platform on Parliamentary System.",
  "5 Mantras of Parliamentary Fact",
 " Awareness on Parliamentary system" ,
"Ensures Accountability of Parliamentarian", 
"Ensure Public Participation in parliamentary reform", 
"To Create a Bridge between Public and Parliamentarian", 
"To Create Healthy Competition among Parliamentarian" ,
]
  const leadership = [
    "Neeraj Gupta is the Founder and Editor in Chief of parliamentary Fact. He has been the editor of the annual report book of Lok Sabha 'Representatives at Work', released by Center for Democracy and Peace, since the last 11 years.The latest edition of the book based on 15th Lok Sabha, published in 2016, was lauded by the then President of India Shri Pranab Mukherjee and Prime Minister of India Shri Narendra Modi.",

    'Neeraj Gupta started his career as a cartoonist with the Hindi daily Nav Bharat in Madhya Pradesh, and has served many media organisation like Channel 7 (IBN 7), Dainik Jagran, besides being a columnist as a Cartoonist in Rediff News. His exhibition ‘Sansad Par Hamla’ in 2006, took a jibe at Parliamentarian behaviour that could well be seen as an attack on Parliament, and became a big hit. Since then he held many other exhibitions based on subject of social and public awareness across the country.',

    "He is also associated with the NGO Mass for Awareness, under which he launched 'Vote for India' in 2013, a campaign for rising awareness of voting rights that reached millions.",

    ' Parliamentaryfact.com is the brainchild of Neeraj Gupta, with which he hopes to enhance the quality of vote in our country. He believes that people should review the performance of their representatives in the Parliament and thereby cast their votes. This could strengthen the roots of democracy and our Parliament. According to him, people, who elect and send their representatives to the Parliament, should be informed about their participation and performance in the Parliament. Their accountability should be checked. The quantity of vote in our country has increased over the years, but the quality needs to revised. And that can be done only when the gap between voters and their representatives will reduce. That will be democracy in true sense.',
  ];

  const researchEndorement = [
    {
      image: '/Assets/about/image5.jfif',
      caption:
        "Report present to Hon'ble Prime Minister of India Mr. Narendra Modi along with Shri Neeraj Gupta, Editor –in-Chief, Parliamentary Business. (Second left)",
    },
    {
      image: '/Assets/about/image4.jfif',
      caption:
        "Report present to then Hon'ble President of India Shri Pranab Mukherjee along with Shri Neeraj Gupta, Editor –in-Chief, Parliamentary Business. (Last Right)",
    },
    {
      image: '/Assets/about/image3.jfif',
      caption:
        "Report present to Hon'ble Vice Prasident of India Shri M. Venkaiah Naidu, along with Shri Neeraj Gupta, Editor –in-Chief, Parliamentary Business. (Right)",
    },
    {
      image: '/Assets/about/image4.jfif',
      caption:
        "Report present to Hon'ble External Affairs Minister of India Smt. Sushma Swaraj, along with Shri Neeraj Gupta, Editor –in-Chief, Parliamentary Business. (Right)",
    },
    {
      image: '/Assets/about/image2.jfif',
      caption:
        "Report present to Hon'ble MOS of the Ministry of Power, Coal and New and Renewable Energy (Independent Charge) Shri Piyush Goyal along with Shri Neeraj Gupta, Editor –in-Chief, Parliamentary Business. (Right)",
    },
    {
      image: '/Assets/about/image1.jfif',
      caption:
        "Research report of five years of 15th LokSabha ‘Representatives at Work‘ released on 7th May 2015 at Parliament House by then Hon'ble Speaker Lok Sabha Smt. Sumitra Mahajan, Dr. Subhash C. Kashyap, Constitutional expert & along with Shri Neeraj Gupta, Editor –in-Chief, Parliamentary Business. (Right)",
    },
  ];
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const [selected, setSelected] = useState('about-us');
  const url = window.location.href;
  const parts = url.split('/');
  let lastComponent = parts[parts.length - 1];
  if (lastComponent === '') {
    lastComponent = parts[parts.length - 2];
  }
  useEffect(() => {
    setSelected(lastComponent);
  }, [lastComponent]);
  return (
    <Box
      className="aboutContainer"
      sx={{ display: 'flex', margin: '2rem', gap: '2rem' }}
    >
      <Box
        className="aboutTabVal"
        sx={{
          alignSelf: 'flex-start',
          position: 'sticky',
          top: '2rem',
          marginLeft: '1rem',
          display: 'flex',
          gap: '1rem',
        }}
      >
        <Box
          onClick={() => {
            navigate('/about-us');
          }}
        >
          <Text
            sx={{
              color: selected === 'about-us' ? '#000' : '#767676',
              fontWeight: selected === 'about-us' ? 'bold' : '',
              cursor: 'pointer',
            }}
            text={'About Us'}
          />
          <Divider sx={{ marginTop: '8px' }} />
        </Box>
        <Box
          onClick={() => {
            navigate('our-vision');
          }}
        >
          <Text
            sx={{
              color: selected === 'our-vision' ? '#000' : '#767676',
              fontWeight: selected === 'our-vision' ? 'bold' : '',
              cursor: 'pointer',
            }}
            text={'Our vision'}
          />
          <Divider sx={{ marginTop: '8px' }} />
        </Box>
        <Box
          onClick={() => {
            navigate('leadership');
          }}
        >
          <Text
            sx={{
              color: selected === 'leadership' ? '#000' : '#767676',
              fontWeight: selected === 'leadership' ? 'bold' : '',
              cursor: 'pointer',
            }}
            text={'Leadership'}
          />
          <Divider sx={{ marginTop: '8px' }} />
        </Box>
        <Box
          onClick={() => {
            navigate('research-endorsement');
          }}
        >
          <Text
            sx={{
              color: selected === 'research-endorsement' ? '#000' : '#767676',
              fontWeight: selected === 'research-endorsement' ? 'bold' : '',
              cursor: 'pointer',
            }}
            text={'Research Endorsement'}
          />
          <Divider sx={{ marginTop: '8px' }} />
        </Box>
      </Box>
      <div style={{ background: 'rgba(0, 0, 0, 0.12)', width: '2px' }}></div>
      {selected === 'about-us' && (
        <Box
          className="aboutContent"
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {aboutUs.map((val, index) => (
            <Text
              sx={{
                color: '#767676',
              }}
              text={val}
            />
          ))}
        </Box>
      )}
      {selected === 'leadership' && (
        <Box
          className="aboutContent"
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {leadership.map((val, index) => (
            <Text
              sx={{
                color: '#767676',
              }}
              text={val}
            />
          ))}
        </Box>
      )}
      {selected === 'research-endorsement' && (
        <Box
          className="aboutContent"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            paddingBottom: '3rem',
          }}
        >
          {researchEndorement.map((val, index) => (
            <Box>
              <img
                style={{
                  width: 'auto',
                  maxWidth:'700px',
                  height: '400px',
                  marginTop: index === 'about-us' ? '' : '1rem',
                }}
                src={val.image}
              />

<Box
  sx={{
    maxWidth:'700px',
    display: 'flex',
    marginTop: '0.5rem',
    marginBottom: '20px',
    fontWeight: '600',
    fontSize: '18px',
  }}
>
  <Text
              sx={{
                color: '#767676',
              }}
              text={val.caption}
            />
</Box>


            </Box>
          ))}
        </Box>
      )}
      {selected === 'our-vision' && (
          <Box
          className="aboutContent"
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {ourVision.map((val, index) => (
            <Text
              sx={{
                color: '#767676',
              }}
              text={val}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
