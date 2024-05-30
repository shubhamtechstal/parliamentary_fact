import { Box, Divider } from '@mui/material';
import Text from 'components/common/Text';
import BigNewCards from 'components/common/cards/BigNewCards';
import BottomSubHeadingCards from 'components/common/cards/BottomSubHeadingCards';
import HeadingNewCards from 'components/common/cards/HeadingNewCards';
import SideNewCards from 'components/common/cards/SideNewCards';
import SubHeadingNewCard from 'components/common/cards/SubHeadingNewCard';
import DownloadAppSection from 'components/homePage/DownloadAppSection';
import React from 'react';

export default function DashboardContainer() {
  const cardsData = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <DownloadAppSection />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0.5rem 1rem',
        }}
      >
        <Box
          sx={{ width: '8rem', height: '43.5rem', background: '#0d0b52' }}
        ></Box>
        <Box>
          <Box
            sx={{
              background: '#f7f7f7',
              height: '18rem',
              width: '100%',
              padding: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <HeadingNewCards />
            <Box
              sx={{ height: '250px', width: '250px', background: '#abb8c3' }}
            ></Box>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ padding: '1rem', maxWidth: '750px' }}>
              <Text
                text={'Virus confronts'}
                sx={{ fontWeight: 700, margin: '0 0 1rem 1rem' }}
              />
              <Box sx={{display:'flex',gap:'1rem'}}>
            <BigNewCards/>
            <Box>
            <Box>
              <BottomSubHeadingCards/>
            </Box>
            <Box>
              <BottomSubHeadingCards/>
            </Box>
            </Box>
              </Box>
            </Box>
            <Box sx={{ maxWidth: '250px' }}>
              <Text
                text={'Virus confronts'}
                sx={{ fontWeight: 700, margin: '1rem 1rem' }}
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
          sx={{ width: '8rem', height: '43.5rem', background: '#0d0b52' }}
        ></Box>
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
       <Box sx={{maxWidth:'70%'}}>
       <img style={{width:'100%'}} src="/advertise.jpg" />
        </Box>
      </Box>
                    <Box sx={{background:'#f7f7f7',display:'flex',justifyContent:'center'}}>
                      <Box>
              <Text
                text={'Virus confronts'}
                sx={{ fontWeight: 700, margin: '1rem' }}
              />
              <Box sx={{display:'flex'}}>
              <Box sx={{maxWidth:'240px'}}>
              <BottomSubHeadingCards/>
              </Box>
              <Box sx={{maxWidth:'240px'}}>
              <BottomSubHeadingCards/>
              </Box>
              <Box sx={{maxWidth:'240px'}}>
              <BottomSubHeadingCards/>
              </Box>
              <Box sx={{maxWidth:'240px'}}>
              <BottomSubHeadingCards/>
              </Box>
              <Box sx={{maxWidth:'240px'}}>
              <BottomSubHeadingCards/>
              </Box>
              </Box>
              </Box>
              </Box>

<Box sx={{display:'flex',justifyContent:'center'}}>
<Box sx={{ padding: '1rem', maxWidth: '750px' }}>
              <Text
                text={'Virus confronts'}
                sx={{ fontWeight: 700, margin: '0 0 1rem 1rem' }}
              />
              <Box sx={{display:'flex',gap:'1rem'}}>
            <BigNewCards/>
            <Box>
            <Box>
              <BottomSubHeadingCards/>
            </Box>
            <Box>
              <BottomSubHeadingCards/>
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
       <Box sx={{maxWidth:'70%'}}>
       <img style={{width:'100%'}} src="/advertise.jpg" />
        </Box>
      </Box>
                    <Box sx={{background:'#f7f7f7'}}>
              <Text
                text={'Virus confronts'}
                sx={{ fontWeight: 700, margin: '1rem' }}
              />
              <Box sx={{display:'flex',gap:'0.5rem'}}>
              <Box sx={{maxWidth:'250px',margin:'0.5rem'}}>
              <BottomSubHeadingCards/>
              </Box>
              <Box sx={{maxWidth:'250px',margin:'0.5rem'}}>
              <BottomSubHeadingCards/>
              </Box>
              <Box sx={{maxWidth:'250px',margin:'0.5rem'}}>
              <BottomSubHeadingCards/>
              </Box>
              </Box>
              </Box>
              <Text
                text={'Virus confronts'}
                sx={{ fontWeight: 700, margin: '1rem' }}
              />
              <Box sx={{display:'flex',gap:'1rem'}}>
                <Box sx={{display:'flex',flexDirection:'column',gap:'1rem'}}>
              <SubHeadingNewCard textWidth={'300px'}/>
              <SubHeadingNewCard textWidth={'300px'}/>
              <SubHeadingNewCard textWidth={'300px'}/>
              </Box>
            <Box>
            <Box sx={{maxWidth:'200px'}}>
              <BottomSubHeadingCards/>
            </Box>
            </Box>
              </Box>
              <Divider sx={{margin:'1rem 0'}}/>
              <Text
                text={'Virus confronts'}
                sx={{ fontWeight: 700, margin: '1rem' }}
              />
              {cardsData.map((val,index) => (
               (index<3 && <>
                  <SubHeadingNewCard key={val} />
                  <Divider sx={{ margin: '1rem' }} />
                {index===2 && <Box
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
       <Box sx={{maxWidth:'70%'}}>
       <img style={{width:'100%'}} src="/advertise.jpg" />
        </Box>
      </Box>} 
                </>)
              ))}
            </Box>
            
            <Box>
            <Box
                sx={{
                    margin:'2rem 0',
                  height: '200px',
                  width: '260px',
                  borderTop: '25px solid #f7f7f7',
                  borderBottom: '7px solid #f7f7f7',
                  borderLeft: '7px solid #f7f7f7',
                  borderRight: '7px solid #f7f7f7',
                }}
              ></Box>
              <Box sx={{ maxWidth: '250px' }}>
              <Text
                text={'Virus confronts'}
                sx={{ fontWeight: 700, margin: '1rem 1rem' }}
              />
              {cardsData.map((val) => (
                <Box sx={{ marginTop: '1rem' }}>
                  <SideNewCards key={val} />
                </Box>
              ))}
              <Box
                sx={{
                    margin:'2rem 0',
                  height: '200px',
                  width: '260px',
                  borderTop: '25px solid #f7f7f7',
                  borderBottom: '7px solid #f7f7f7',
                  borderLeft: '7px solid #f7f7f7',
                  borderRight: '7px solid #f7f7f7',
                }}
              ></Box>
              {cardsData.map((val) => (
                <Box sx={{ marginTop: '1rem' }}>
                  <SideNewCards key={val} />
                </Box>
              ))}
            </Box>
            </Box>
              </Box>
    </>
  );
}
