import { Box, Divider } from '@mui/material';
import Text from 'components/common/Text';
import BigNewCards from 'components/common/cards/BigNewCards';
import BottomSubHeadingCards from 'components/common/cards/BottomSubHeadingCards';
import HeadingNewCards from 'components/common/cards/HeadingNewCards';
import SideNewCards from 'components/common/cards/SideNewCards';
import SubHeadingNewCard from 'components/common/cards/SubHeadingNewCard';
import './../App.css';
import CenterBackgroudNewsCard from 'components/common/cards/CenterBackgroundNewsCard';
import { dashboardNewsApiAction } from 'stores/redux/apiSlices/DashboardNewsSlice/dashboardNewsApiSlice';
import ShortNewsCard from 'components/common/cards/ShortNewsCard';
import '../components/common/cards/NewsCard.css';
import { useEffect } from 'react';

export default function DashboardContainer() {
  const { data: dashboardNewsDataApi } =
    dashboardNewsApiAction.getDashboardNews({ limit: 30 });

  const { data: topFiveNewsDataApi } = dashboardNewsApiAction.getTopFiveNews();

  const { data: topLatestNewsApi } = dashboardNewsApiAction.getLatestTopNews();

  const { data: pioParliamentarainNews } =
    dashboardNewsApiAction.getDashboardNews({
      category: 'PIO Parliamentarian',
    });
  const { data: parliamentarianNews } = dashboardNewsApiAction.getDashboardNews(
    {
      category: 'Parliamentarian News',
    }
  );
  const { data: parliamentSessionNews } =
    dashboardNewsApiAction.getDashboardNews({
      category: 'Parliament Session',
    });
  const { data: assemblyNews } = dashboardNewsApiAction.getDashboardNews({
    category: 'Assembly News',
  });
  const { data: historicalNews } = dashboardNewsApiAction.getDashboardNews({
    category: 'Historical',
  });
  const { data: mlaNews } = dashboardNewsApiAction.getDashboardNews({
    category: 'MLA News',
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          // padding: '0rem 1rem', 
        }}
      >
        <Box
          className="MobileViewRemove"
          sx={{
            width: '180px',
            height: '37.5rem',
            background: '#0d0b52',
            position: 'sticky',
            top: 0,
          }}
        >
          <img
            onClick={() =>
              window.open(
                'https://www.theshilp.com/product-details/fortunate-maha-ganesha',
                '_blank'
              )
            }
            className="advertise_img"
            src="/Assets/ads/leftSideImage.jpg"
          />
        </Box>

        <Box sx={{ width: '100%' }}>
          <Box>
            <HeadingNewCards data={topLatestNewsApi?.latest_top_news[0]} />
          </Box>
         
          <Box className="homeNewsContainer" sx={{padding: '1rem 1rem',}}>
            <Box className="homePageNewsBox1">
              <Box sx={{ display: 'flex', gap: '5px' }}>
                <Text
                  text={'||'}
                  sx={{ fontWeight: 500, margin: '0 0 1rem 0', color: 'red' }}
                ></Text>
                <Text
                  text={'Latest news'}
                  sx={{ fontWeight: 700, margin: '0 0 1rem 0' }}
                ></Text>
              </Box>
              <Box>
                <BigNewCards data={topFiveNewsDataApi?.top_news[0]} />
              </Box>
            </Box>

            <Box className="homePageNewsBox2">
              <Box className="mobile-three-card-section"
                sx={{ display: 'flex', gap: '1.5rem' }}
              >
                {topFiveNewsDataApi?.top_news?.slice(1, 3).map((data) => (
                  <Box>
                    <BottomSubHeadingCards data={data} />
                  </Box>
                ))}
              </Box>
            </Box>

            <Box className="homePageNewsBox3">
              <Box sx={{ display: 'flex', gap: '5px' }}>
                <Text
                  text={'||'}
                  sx={{ fontWeight: 500, margin: '0 0 1rem 0', color: 'red' }}
                ></Text>
                <Text text={'Parliamentarian News'} sx={{ fontWeight: 700 }} />
              </Box>
              <Box className="SideNewCards">
                {parliamentarianNews?.reviews?.slice(0, 6).map((data) => (
                  <Box key={data.id}>
                    <SideNewCards data={data} />
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
          padding: '1rem 0',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Text
            sx={{ color: '#767676', marginBottom: '5px', fontSize: '10px' }}
            text={'-Advertisement-'}
          />
          <Box className="desktop-advertise" sx={{ maxWidth: '728px', height: '90px' }}>
            <img
              onClick={() =>
                window.open(
                  'https://www.theshilp.com/product-details/fortunate-maha-ganesha',
                  '_blank'
                )
              }
              className="advertise_img"
              src="/Assets/ads/728x90ad.jpg"
            />
          </Box>
          <Box className="mobile-advertise" sx={{ maxWidth: '728px', height: '50px' }}>
            <img
              onClick={() =>
                window.open(
                  'https://www.theshilp.com/product-details/indian-army-strike-antique-bronze-gold',
                  '_blank'
                )
              }
              className="advertise_img"
              src="/Assets/ads/shilp-mobile-ad-300x50.jpg"
            />
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
          paddingLeft:{xs:'1rem',md:0},
          paddingRight:{xs:'1rem',md:0},
          margin: {md: '0px' },
        }}
      >
        <Box width={{ sm: '100%', xs: '100%', md: '95%' }}>
          <Box sx={{ display: 'flex', gap: '5px',marginTop:'0.5rem' }}>
            <Text
              text={'||'}
              sx={{ fontWeight: 500, margin: '0 0 0 0', color: 'red' }}
            ></Text>
            <Text text={`Parliament Session`} sx={{ fontWeight: 700 }} />
          </Box>
          <Box className="CenterVirusConfrontSection">
            {parliamentSessionNews?.reviews?.slice(0, 5).map((data) => (
              <Box key={data.id} 
    className="mobileCenterBackgroundCard"
              >
                <CenterBackgroudNewsCard data={data} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    
      <Box
        className="BigNewsCardContainer"
        sx={{ display: 'flex', justifyContent: 'center', }}
      >
        <Box className="bigNewsSection" sx={{  maxWidth: '750px',width:'100%' }}>
          <Box sx={{ display: 'flex', gap: '5px',margin:'0 1rem'  }}>
            <Text
              text={'||'}
              sx={{ fontWeight: 500, margin: '0 0 1rem 0', color: 'red' }}
            ></Text>
            <Text
              text={'Assembly News'}
              sx={{ fontWeight: 700, margin: '0 0 1rem 0rem' }}
            />
          </Box>
          <Box
            className="BigNewsCardSection"
            sx={{ display: 'flex', gap: '1.5rem',margin:'0 1rem'  }}
          >
            <Box sx={{width:"100%"}}>
            <BigNewCards data={assemblyNews?.reviews[0]} />
            </Box>
            <Box className="mobile-three-card-section"
              sx={{ display: 'flex', gap: '1.5rem' }}
            >
              {assemblyNews?.reviews?.slice(1, 3).map((data) => (
                <Box >
                  <BottomSubHeadingCards data={data} />
                </Box>
              ))}
            </Box>
          </Box>
          <Box className="mobileAd"
            sx={{
             
              height: '130px',
              background: '#f7f7f7',
              
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box>
              <Text
                sx={{ color: '#767676', marginBottom: '5px', fontSize: '10px' }}
                text={'-Advertisement-'}
              />
              <Box className="desktop-advertise" sx={{ maxWidth: '650px', height: '80px' }}>
                <img
                  onClick={() =>
                    window.open(
                      'https://www.theshilp.com/product-details/fortunate-maha-ganesha',
                      '_blank'
                    )
                  }
                  style={{ height: '100%', width: '100%' }}
                  className="advertise_img"
                  src="/Assets/ads/728x90ad.jpg"
                />
              </Box>
              <Box className="mobile-advertise" sx={{ maxWidth: '650px', height: '50px' }}>
                <img
                  onClick={() =>
                    window.open(
                      'https://www.theshilp.com/product-details/fortunate-maha-ganesha',
                      '_blank'
                    )
                  }
                  style={{ height: '100%', width: '100%' }}
                  className="advertise_img"
                  src="/Assets/ads/shilp-mobile-ad-300x50-2.jpg"
                />
              </Box>
            </Box>
          </Box>
          <Box className="historicalMobile" sx={{ background: '#f7f7f7', padding: '0.5rem 1rem' }}>
            <Box sx={{ display: 'flex', gap: '5px' }}>
              <Text
                text={'||'}
                sx={{ fontWeight: 500, marginTop: '1rem', color: 'red' }}
              ></Text>
              <Text
                text={'Historical News'}
                sx={{ fontWeight: 700, marginTop: '1rem' }}
              />
            </Box>
            <Box
              className="BigNewsCardContainer"
              sx={{ display: 'flex', gap: '0.5rem' }}
            >
              <Box className="bottomSubHeadingCardBox">
                {historicalNews?.reviews?.slice(0, 3).map((data) => (
                  <Box
                    key={data.id}
                    sx={{ flex: '1 1 calc(33.33% - 1rem)', margin: '0.5rem' }}
                  >
                    <ShortNewsCard data={data} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <Box
            className="BigNewsCardContainer"
            sx={{ display: 'flex', marginTop: '1rem' }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '500px',
                margin:'0 1rem' 
              }}
            >
              <Box sx={{ display: 'flex', gap: '5px' }}>
                <Text
                  text={'||'}
                  sx={{ fontWeight: 500, margin: '0.5rem 0', color: 'red' }}
                ></Text>
                <Text
                  text={'PIO Parliamentarian'}
                  sx={{ fontWeight: 700, margin: '0.5rem 0' }}
                />
              </Box>
              <Box className="parliamentarian-section">
              {pioParliamentarainNews?.reviews?.slice(1, 4).map((data) => (
                <Box key={data.id} className="parliamentariancardsection">
                  <SubHeadingNewCard data={data} />
                </Box>
              ))}
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  background: '#f7f7f7',
                  padding: '1px 10px 10px 10px',
                }}
              >
                <Box sx={{ display: 'flex', gap: '5px',minWidth:'200px' }}>
                  <Text
                    text={'||'}
                    sx={{ fontWeight: 500, margin: '10px 0', color: 'red' }}
                  ></Text>
                  <Text
                    text={'Top News'}
                    sx={{ fontWeight: 700, margin: '10px 0' }}
                  />
                </Box>
                <Box className="bottomSubHeadingCardWidth">
                  {pioParliamentarainNews?.reviews?.slice(0, 1).map((data) => (
                    <Box>
                      <BottomSubHeadingCards type={'withbg'} data={data} />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ margin: '1rem 0', }} />
          <Box sx={{ display: 'flex', gap: '5px',margin:'0 1rem'  }}>
            <Text
              text={'||'}
              sx={{ fontWeight: 500, margin: '1rem 0', color: 'red' }}
            ></Text>
            <Text
              text={'MLA News'}
              sx={{ fontWeight: 700, margin: '1rem 0' }}
            />
          </Box>
          <Box className="parliamentarian-section mlanewssection" sx={{gap:'0'}}>
          {mlaNews?.reviews?.slice(0, 3).map((data) => (
            <Box key={data.id} sx={{ margin:'0 0.5rem'  }}>
              <SubHeadingNewCard data={data} />
              <Divider className="MobileViewRemove" sx={{ margin: '1rem' }} />
            </Box>
          ))}
          </Box>
        </Box>

        <Box className="sideSection" >
          <Box
            sx={{
              margin: '2rem 0',
              height: '268px',
              width: '300px',
              background: '#f7f7f7',
              outline: '7px solid #f7f7f7',
              paddingTop: '18px',
            }}
          >
            <img
              onClick={() =>
                window.open(
                  'https://www.theshilp.com/product-details/indian-army-strike-antique-bronze-gold',
                  '_blank'
                )
              }
              className="advertise_img"
              src="/Assets/ads/secondAd.jpg"
            />
          </Box>
          <Box className="sideNewCardsWidth sideCardMobileView">
            <Box sx={{ display: 'flex', gap: '5px' }}>
              <Text
                text={'||'}
                sx={{ fontWeight: 500, margin: '1rem 0', color: 'red' }}
              ></Text>
              <Text
                text={'Most Read'}
                sx={{ fontWeight: 700, margin: '1rem 0rem' }}
              />
            </Box>
            {dashboardNewsDataApi?.reviews?.slice(2, 7).map((data) => (
              <Box key={data.id} className="mostReadNews">
                <SideNewCards data={data} />
              </Box>
            ))}
            <Box
              sx={{
                marginTop: '2rem',
                height: '268px',
                width: '300px',
                background: '#f7f7f7',
                outline: '7px solid #f7f7f7',
                paddingTop: '18px',
                // borderTop: '25px solid #f7f7f7',
                // borderBottom: '7px solid #f7f7f7',
                // borderLeft: '7px solid #f7f7f7',
                // borderRight: '7px solid #f7f7f7',
              }}
            >
              <img
                onClick={() =>
                  window.open(
                    'https://www.theshilp.com/product-details/fortunate-maha-ganesha',
                    '_blank'
                  )
                }
                className="advertise_img"
                src="/Assets/ads/shilp-ad-300x250.jpg"
              />
            </Box>
            <Box sx={{ display: 'flex', gap: '5px' }}>
              <Text
                text={'||'}
                sx={{ fontWeight: 500, margin: '1rem 0', color: 'red' }}
              ></Text>
              <Text
                text={'Trending News'}
                sx={{ fontWeight: 700, margin: '1rem 0rem' }}
              />
            </Box>
            {dashboardNewsDataApi?.reviews?.slice(8, 14).map((data) => (
              <Box key={data.id} >
                <SideNewCards data={data} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
        </Box>
        <Box
          className="MobileViewRemove"
          sx={{
            width: '180px',
            height: '37.5rem',
            background: '#0d0b52',
            position: 'sticky',
            top: 0,
          }}
        >
          <img
            onClick={() =>
              window.open(
                'https://www.theshilp.com/product-details/indian-army-strike-antique-bronze-gold',
                '_blank'
              )
            }
            className="advertise_img"
            src="/Assets/ads/rightSideImage.jpg"
          />
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
          padding: '1rem 0',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Text
            sx={{ color: '#767676', marginBottom: '5px', fontSize: '10px' }}
            text={'-Advertisement-'}
          />
          <Box className="desktop-advertise" sx={{ maxWidth: '728px', height: '90px' }}>
            <img
              onClick={() =>
                window.open(
                  'https://www.theshilp.com/product-details/fortunate-maha-ganesha',
                  '_blank'
                )
              }
              className="advertise_img"
              src="/Assets/ads/728x90ad.jpg"
            />
          </Box>
          <Box className="mobile-advertise" sx={{ maxWidth: '650px', height: '50px' }}>
                <img
                  onClick={() =>
                    window.open(
                      'https://www.theshilp.com/product-details/fortunate-maha-ganesha',
                      '_blank'
                    )
                  }
                  style={{ height: '100%', width: '100%' }}
                  className="advertise_img"
                  src="/Assets/ads/shilp-mobile-ad-300x50-2.jpg"
                />
              </Box>
        </Box>
      </Box>
    </>
  );
}
