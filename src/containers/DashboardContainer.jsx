import { Box, Divider } from '@mui/material';
import Text from 'components/common/Text';
import BigNewCards from 'components/common/cards/BigNewCards';
import BottomSubHeadingCards from 'components/common/cards/BottomSubHeadingCards';
import HeadingNewCards from 'components/common/cards/HeadingNewCards';
import SideNewCards from 'components/common/cards/SideNewCards';
import SubHeadingNewCard from 'components/common/cards/SubHeadingNewCard';
import DownloadAppSection from 'components/homePage/DownloadAppSection';
import React from 'react';
import './../App.css';
import CenterBackgroudNewsCard from 'components/common/cards/CenterBackgroundNewsCard';

export default function DashboardContainer() {
  const cardsData = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {/* <DownloadAppSection /> */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0rem 1rem',
        }}
      >
        <Box
          className="MobileViewRemove"
          sx={{ width: '8rem', height: '43.5rem', background: '#0d0b52' }}
        ></Box>
        <Box sx={{width:'100%',}}>
          <Box
            sx={{
              background: '#f7f7f7',
              // height: '18rem',
              width: '100%',
              padding: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <HeadingNewCards />
            <Box
              className="MobileViewRemove"
              sx={{
                height: '250px',
                maxWidth: '300px',
                width: '100%',
                background: '#abb8c3',
              }}
            ></Box>
          </Box>
          <Box className="BigNewsCardContainer" sx={{ display: 'flex',gap:'1rem' }}>
            <Box sx={{ padding: '1rem', maxWidth: '750px' }}>
              <Text
                text={'Virus confronts'}
                sx={{ fontWeight: 700, margin: '0 0 1rem 0' }}
              />
              <Box
                className="BigNewsCardSection"
                sx={{ display: 'flex', gap: '1.5rem' }}
              >
                <BigNewCards />
                <Box
                  sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                  <Box>
                    <BottomSubHeadingCards />
                  </Box>
                  <Box>
                    <BottomSubHeadingCards />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ maxWidth: '280px', marginRight: '1rem' }}>
              <Text
                text={'Virus confronts'}
                sx={{ fontWeight: 700, margin: '1rem 0rem' }}
              />
              <Box className="SideNewCards">
                {cardsData.map((val) => (
                  <Box sx={{ marginTop: '1rem' }}>
                    <SideNewCards key={val} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          className="MobileViewRemove"
          sx={{ width: '8rem', height: '43.5rem', background: '#0d0b52' }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '130px',
          background: '#f7f7f7',
          marginBottom: '1rem',
          padding:'1rem 0',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
         <Box>
        <Text sx={{color: '#767676',marginBottom:'5px',
    fontSize: '10px'}} text={'-Advertisement-'}/>
        <Box sx={{ maxWidth: '728px', height: '90px' }}>
          <img style={{ width: '100%', height: '100%' }} src="/advertise.jpg" />
        </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: '#f7f7f7',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '1rem 0',
        }}
      >
        <Box sx={{ width: '80%' }}>
          <Text text={'Virus confronts'} sx={{ fontWeight: 700 }} />
          <Box
            className="CenterVirusConfrontSection"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginTop: '1rem',
            }}
          >
            <Box className="bottomSubHeadingCardWidth">
              <CenterBackgroudNewsCard />
            </Box>
            <Box className="bottomSubHeadingCardWidth">
              <CenterBackgroudNewsCard />
            </Box>
            <Box className="bottomSubHeadingCardWidth">
              <CenterBackgroudNewsCard />
            </Box>
            <Box className="bottomSubHeadingCardWidth">
              <CenterBackgroudNewsCard />
            </Box>
            <Box className="bottomSubHeadingCardWidth">
              <CenterBackgroudNewsCard />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        className="BigNewsCardContainer"
        sx={{ display: 'flex', justifyContent: 'center',gap:'1rem' }}
      >
        <Box sx={{ padding: '1rem', maxWidth: '750px' }}>
          <Text
            text={'Virus confronts'}
            sx={{ fontWeight: 700, margin: '0 0 1rem 0rem' }}
          />
          <Box
            className="BigNewsCardSection"
            sx={{ display: 'flex', gap: '1.5rem' }}
          >
            <BigNewCards />
            <Box
              sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <Box>
                <BottomSubHeadingCards />
              </Box>
              <Box>
                <BottomSubHeadingCards />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '130px',
              background: '#f7f7f7',
              marginBottom: '1rem',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
          <Box>
        <Text sx={{color: '#767676',marginBottom:'5px',
    fontSize: '10px'}} text={'-Advertisement-'}/>
        <Box sx={{ maxWidth: '650px', height: '80px' }}>
          <img style={{ width: '100%', height: '100%' }} src="/advertise.jpg" />
        </Box>
        </Box>
          </Box>
          <Box sx={{ background: '#f7f7f7', padding: '0.5rem 1rem' }}>
            <Text
              text={'Virus confronts'}
              sx={{ fontWeight: 700, margin: '1rem 0.5rem' }}
            />
            <Box
              className="BigNewsCardContainer"
              sx={{ display: 'flex', gap: '0.5rem' }}
            >
              <Box
                className="bottomSubHeadingCardWidth"
                sx={{ margin: '0.5rem' }}
              >
                <CenterBackgroudNewsCard />
              </Box>
              <Box
                className="bottomSubHeadingCardWidth"
                sx={{ margin: '0.5rem' }}
              >
                <CenterBackgroudNewsCard />
              </Box>
              <Box
                className="bottomSubHeadingCardWidth"
                sx={{ margin: '0.5rem' }}
              >
                <CenterBackgroudNewsCard />
              </Box>
            </Box>
          </Box>
        
          <Box
            className="BigNewsCardContainer"
            sx={{ display: 'flex', gap: '1rem',marginTop:'1rem' }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Text
            text={'Virus confronts'}
            sx={{ fontWeight: 700, margin: '0.5rem 0' }}
          />
              <SubHeadingNewCard textWidth={'280px'} />
              <SubHeadingNewCard textWidth={'280px'} />
              <SubHeadingNewCard textWidth={'280px'} />
            </Box>
            <Box>
              <Box
                sx={{
                  background: '#f7f7f7',
                  height: '100%',
                  padding: '0.5rem 1rem',
                }}
              >
                <Text
                  text={'Virus confronts'}
                  sx={{ fontWeight: 700, margin: '1rem 0' }}
                />
                <Box className="bottomSubHeadingCardWidth">
                  <BottomSubHeadingCards type={'withbg'} />
                </Box>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ margin: '2.5rem 0' }} />
          <Text
            text={'Virus confronts'}
            sx={{ fontWeight: 700, margin: '1rem 0' }}
          />
          {cardsData.map(
            (val, index) =>
              index < 3 && (
                <>
                  <SubHeadingNewCard key={val} />
                  <Divider sx={{ margin: '1rem' }} />
                </>
              )
          )}
        </Box>

        <Box sx={{ marginBottom: '2rem' }}>
          <Box
            sx={{
              margin: '2rem 0',
              height: '250px',
              width: '300px',
              borderTop: '25px solid #f7f7f7',
              borderBottom: '7px solid #f7f7f7',
              borderLeft: '7px solid #f7f7f7',
              borderRight: '7px solid #f7f7f7',
            }}
          ></Box>
          <Box className = 'sideNewCardsWidth'>
            <Text
              text={'Virus confronts'}
              sx={{ fontWeight: 700, margin: '1rem 0rem' }}
            />
            {cardsData.map((val) => (
              <Box sx={{ marginTop: '1rem' }}>
                <SideNewCards key={val} />
              </Box>
            ))}
            <Box
              sx={{
                margin: '2rem 0',
                height: '250px',
                width: '300px',
                borderTop: '25px solid #f7f7f7',
                borderBottom: '7px solid #f7f7f7',
                borderLeft: '7px solid #f7f7f7',
                borderRight: '7px solid #f7f7f7',
              }}
            ></Box>
             <Text
              text={'Virus confronts'}
              sx={{ fontWeight: 700, margin: '1rem 0rem' }}
            />
            {cardsData.map((val) => (
              <Box sx={{ marginTop: '1rem' }}>
                <SideNewCards key={val} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '130px',
          background: '#f7f7f7',
          marginBottom: '1rem',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          padding:'1rem 0',
          justifyContent: 'center',
        }}
      >
        <Box>
        <Text sx={{color: '#767676',marginBottom:'5px',
    fontSize: '10px'}} text={'-Advertisement-'}/>
        <Box sx={{ maxWidth: '728px', height: '90px' }}>
          <img style={{ width: '100%', height: '100%' }} src="/advertise.jpg" />
        </Box>
        </Box>
      </Box>
    </>
  );
}
