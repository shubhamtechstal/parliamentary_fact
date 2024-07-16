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

  const { data: categorynews } = dashboardNewsApiAction.getDashboardNews({
    category: 'MPs News',
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
          padding: '0rem 1rem',
        }}
      >
        <Box
          className="MobileViewRemove"
          sx={{ width: '8rem', height: '43.5rem', background: '#0d0b52' }}
        ></Box>

        <Box sx={{ width: '100%' }}>
          <Box>
            <HeadingNewCards data={topLatestNewsApi?.latest_top_news[0]} />
          </Box>
          <Box className="homeNewsContainer">
            <Box className="homePageNewsBox1">
              <Box>
                <Text
                  text={'Top News'}
                  sx={{ fontWeight: 700, margin: '0 0 1rem 0' }}
                ></Text>
              </Box>
              <Box>
                <BigNewCards data={topFiveNewsDataApi?.top_news[0]} />
              </Box>
            </Box>

            <Box className="homePageNewsBox2">
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
              >
                {topFiveNewsDataApi?.top_news?.slice(1, 3).map((data) => (
                  <Box>
                    <BottomSubHeadingCards data={data} />
                  </Box>
                ))}
              </Box>
            </Box>

            <Box className="homePageNewsBox3">
              <Text text={'Trending News'} sx={{ fontWeight: 700 }} />
              <Box className="SideNewCards">
                {dashboardNewsDataApi?.reviews?.slice(0, 6).map((data) => (
                  <Box key={data.id} sx={{ marginTop: '1rem' }}>
                    <SideNewCards data={data} />
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
          <Box sx={{ maxWidth: '728px', height: '90px' }}>
            <img className="advertise_img" src="/advertise.jpg" />
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
          margin: { xs: '15px', md: '0px' },
        }}
      >
        <Box width={{ sm: '80%', xs: '100%', md: '80%' }}>
          <Text text={`MP's News`} sx={{ fontWeight: 700 }} />
          <Box className="CenterVirusConfrontSection">
            {categorynews?.reviews?.slice(0, 5).map((data) => (
              <Box key={data.id} sx={{ marginTop: '1rem' }}>
                <CenterBackgroudNewsCard data={data} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        className="BigNewsCardContainer"
        sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}
      >
        <Box sx={{ padding: '1rem', maxWidth: '750px' }}>
          <Text
            text={'Top News'}
            sx={{ fontWeight: 700, margin: '0 0 1rem 0rem' }}
          />
          <Box
            className="BigNewsCardSection"
            sx={{ display: 'flex', gap: '1.5rem' }}
          >
            <BigNewCards data={dashboardNewsDataApi?.reviews[6]} />
            <Box
              sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              {dashboardNewsDataApi?.reviews?.slice(7, 9).map((data) => (
                <Box>
                  <BottomSubHeadingCards data={data} />
                </Box>
              ))}
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
              <Text
                sx={{ color: '#767676', marginBottom: '5px', fontSize: '10px' }}
                text={'-Advertisement-'}
              />
              <Box sx={{ maxWidth: '650px', height: '80px' }}>
                <img className="advertise_img" src="/advertise.jpg" />
              </Box>
            </Box>
          </Box>
          <Box sx={{ background: '#f7f7f7', padding: '0.5rem 1rem' }}>
            <Text
              text={'Trending News'}
              sx={{ fontWeight: 700, margin: '1rem 0.5rem' }}
            />
            <Box
              className="BigNewsCardContainer"
              sx={{ display: 'flex', gap: '0.5rem' }}
            >
              <Box className="bottomSubHeadingCardBox">
                {dashboardNewsDataApi?.reviews?.slice(9, 12).map((data) => (
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
              }}
            >
              <Text
                text={'Trending News'}
                sx={{ fontWeight: 700, margin: '0.5rem 0' }}
              />
              {dashboardNewsDataApi?.reviews?.slice(12, 15).map((data) => (
                <Box key={data.id} sx={{ margin: '0.5rem' }}>
                  <SubHeadingNewCard data={data} />
                </Box>
              ))}
            </Box>
            <Box>
              <Box
                sx={{
                  background: '#f7f7f7',
                  padding: '1px 10px 10px 10px',
                }}
              >
                <Text
                  text={'Trending News'}
                  sx={{ fontWeight: 700, margin: '10px 0' }}
                />
                <Box className="bottomSubHeadingCardWidth">
                  {dashboardNewsDataApi?.reviews?.slice(15, 16).map((data) => (
                    <Box>
                      <BottomSubHeadingCards type={'withbg'} data={data} />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ margin: '2.5rem 0' }} />
          <Text
            text={'Trending News'}
            sx={{ fontWeight: 700, margin: '1rem 0' }}
          />

          {dashboardNewsDataApi?.reviews?.slice(16, 19).map((data) => (
            <Box key={data.id} sx={{ margin: '0.5rem' }}>
              <SubHeadingNewCard data={data} />
              <Divider sx={{ margin: '1rem' }} />
            </Box>
          ))}
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
          <Box className="sideNewCardsWidth">
            <Text
              text={'Trending News'}
              sx={{ fontWeight: 700, margin: '1rem 0rem' }}
            />
            {dashboardNewsDataApi?.reviews?.slice(19, 24).map((data) => (
              <Box key={data.id} sx={{ marginTop: '1rem' }}>
                <SideNewCards data={data} />
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
              text={'Trending News'}
              sx={{ fontWeight: 700, margin: '1rem 0rem' }}
            />
            {dashboardNewsDataApi?.reviews?.slice(24, 30).map((data) => (
              <Box key={data.id} sx={{ marginTop: '1rem' }}>
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
          <Box sx={{ maxWidth: '728px', height: '90px' }}>
            <img className="advertise_img" src="/advertise.jpg" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
