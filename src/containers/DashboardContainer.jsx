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
// import images from 'helpers/images';
// import Stack from 'components/common/Stack';

export default function DashboardContainer() {
  const { data: dashboardNewsDataApi } =
    dashboardNewsApiAction.getDashboardNews();
  // console.log(dashboardNewsDataApi, 'checkdata');
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
          <HeadingNewCards data={dashboardNewsDataApi?.reviews} />
          <Box className="home_page_news_container">
            <Box className="home_page_news_subBox1">
              <Box>
                <Text
                  text={'Virus confronts'}
                  sx={{ fontWeight: 700, margin: '0 0 1rem 0' }}
                ></Text>
              </Box>
              <Box>
                <BigNewCards data={dashboardNewsDataApi?.reviews} />
              </Box>
            </Box>

            <Box className='home_page_news_subBox2'>
              <Box>
                <BottomSubHeadingCards data={dashboardNewsDataApi?.reviews} />
              </Box>
              <Box>
                <BottomSubHeadingCards data={dashboardNewsDataApi?.reviews} />
              </Box>
            </Box>

            <Box className='home_page_news_subBox3'>
              <Text text={'Virus confronts'} sx={{ fontWeight: 700 }} />
              <Box className="SideNewCards">
                {dashboardNewsDataApi?.reviews?.slice(0, 6).map((data) => (
                  <Box key={data.id} sx={{ marginTop: '1rem' }}>
                    <SideNewCards data={dashboardNewsDataApi?.reviews} />
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
        }}
      >
        <Box sx={{ width: '80%' }}>
          <Text text={'Virus confronts'} sx={{ fontWeight: 700 }} />
          <Box className="CenterVirusConfrontSection">
            {dashboardNewsDataApi?.reviews?.slice(0, 5).map((data) => (
              <Box key={data.id} sx={{ marginTop: '1rem' }}>
                <CenterBackgroudNewsCard data={dashboardNewsDataApi?.reviews} />
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
            text={'Virus confronts'}
            sx={{ fontWeight: 700, margin: '0 0 1rem 0rem' }}
          />
          <Box
            className="BigNewsCardSection"
            sx={{ display: 'flex', gap: '1.5rem' }}
          >
            <BigNewCards data={dashboardNewsDataApi?.reviews} />
            <Box
              sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <Box>
                <BottomSubHeadingCards data={dashboardNewsDataApi?.reviews} />
              </Box>
              <Box>
                <BottomSubHeadingCards data={dashboardNewsDataApi?.reviews} />
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
              text={'Virus confronts'}
              sx={{ fontWeight: 700, margin: '1rem 0.5rem' }}
            />
            <Box
              className="BigNewsCardContainer"
              sx={{ display: 'flex', gap: '0.5rem' }}
            >
              <Box className="bottomSubHeadingCardBox">
                {dashboardNewsDataApi?.reviews?.slice(0, 3).map((data) => (
                  <Box
                    key={data.id}
                    sx={{ flex: '1 1 calc(33.33% - 1rem)', margin: '0.5rem' }}
                  >
                    <ShortNewsCard data={dashboardNewsDataApi?.reviews} />
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
                text={'Virus confronts'}
                sx={{ fontWeight: 700, margin: '0.5rem 0' }}
              />
              {dashboardNewsDataApi?.reviews?.slice(0, 3).map((data) => (
                <Box key={data.id} sx={{ margin: '0.5rem' }}>
                  <SubHeadingNewCard data={dashboardNewsDataApi?.reviews} />
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
                  text={'Virus confronts'}
                  sx={{ fontWeight: 700, margin: '10px 0' }}
                />
                <Box className="bottomSubHeadingCardWidth">
                  <BottomSubHeadingCards
                    type={'withbg'}
                    data={dashboardNewsDataApi?.reviews}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ margin: '2.5rem 0' }} />
          <Text
            text={'Virus confronts'}
            sx={{ fontWeight: 700, margin: '1rem 0' }}
          />

          {dashboardNewsDataApi?.reviews?.slice(0, 3).map((data) => (
            <Box key={data.id} sx={{ margin: '0.5rem' }}>
              <SubHeadingNewCard data={dashboardNewsDataApi?.reviews} />
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
              text={'Virus confronts'}
              sx={{ fontWeight: 700, margin: '1rem 0rem' }}
            />
            {dashboardNewsDataApi?.reviews?.slice(0, 5).map((data) => (
              <Box key={data.id} sx={{ marginTop: '1rem' }}>
                <SideNewCards data={dashboardNewsDataApi?.reviews} />
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
            {dashboardNewsDataApi?.reviews?.slice(0, 6).map((data) => (
              <Box key={data.id} sx={{ marginTop: '1rem' }}>
                <SideNewCards data={dashboardNewsDataApi?.reviews} />
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
