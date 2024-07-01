import { Box, Divider } from '@mui/material';
import Text from 'components/common/Text';
import CenterBackgroudNewsCard from 'components/common/cards/CenterBackgroundNewsCard';
import HeadingNewCards from 'components/common/cards/HeadingNewCards';
import SideNewCards from 'components/common/cards/SideNewCards';
import SubHeadingNewCard from 'components/common/cards/SubHeadingNewCard';
import '../App.css';
import { dashboardNewsApiAction } from 'stores/redux/apiSlices/DashboardNewsSlice/dashboardNewsApiSlice';
import { useLocation, useParams } from 'react-router-dom';
import '../components/common/cards/NewsCard.css';
// import DownloadAppSection from 'components/homePage/DownloadAppSection';

export default function CategoriesContainer() {
  // const cardsData = [1, 2, 3, 4, 5, 6];
  const {id} = useParams();
  const location = useLocation();
  const {category} = location.state || {};
  const { data: dashboardNewsDataApi } =
    dashboardNewsApiAction.getDashboardNews();

  const { data: headerNewsDataApi } =
    dashboardNewsApiAction.getDashboardNews({
      category: category,
    });
    // console.log(headerNewsDataApi,'idhhh');

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
        <Box sx={{ width: '100%' }}>
          <Box>
            {headerNewsDataApi?.reviews?.slice(0, 1).map((data) => (
              <Box key={data.id}>
                <HeadingNewCards data={data} />
              </Box>
            ))}
            {/* <HeadingNewCards data={dashboardNewsDataApi?.reviews} /> */}
          </Box>
          <Box
            className="BigNewsCardContainer"
            sx={{ display: 'flex', justifyContent:'space-between' }}
          >
            <Box className='categories_subheading_card'>
              <Text
                text={id}
                sx={{ fontWeight: 700, margin: '0 0 1rem 0rem' }}
              />
              {headerNewsDataApi?.reviews.map((val, index) => (
                <>
                {/* {console.log(val,'checkconsole')} */}
                  <SubHeadingNewCard data={val} />
                  <Divider sx={{ margin: '1rem' }} />
                  {index === 3 && (
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
                          sx={{
                            color: '#767676',
                            marginBottom: '5px',
                            fontSize: '10px',
                          }}
                          text={'-Advertisement-'}
                        />
                        <Box sx={{ maxWidth: '650px', height: '80px' }}>
                          <img
                            style={{ width: '100%', height: '100%' }}
                            src="/advertise.jpg"
                          />
                        </Box>
                      </Box>
                    </Box>
                  )}
                </>
              ))}
              <Box sx={{ background: '#f7f7f7', padding: '1rem' }}>
                <Text
                  text={id}
                  sx={{ fontWeight: 700, margin: '1rem 0.5rem' }}
                />
                <Box
                  className="BigNewsCardContainer"
                  sx={{ display: 'flex', gap: '0.5rem' }}
                >
                  {headerNewsDataApi?.reviews?.slice(0, 3).map((data) => (
                    <Box key={data.id} sx={{ marginTop: '1rem' }}>
                      <CenterBackgroudNewsCard
                        data={data}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box className="categories_subheading_side_card">
              <Text
                text={"Trending News"}
                sx={{ fontWeight: 700, margin: '1rem 0rem' }}
              />
              {dashboardNewsDataApi?.reviews?.slice(0, 6).map((val) => (
                <Box sx={{ marginTop: '1rem' }}>
                  <SideNewCards data={val} />
                </Box>
              ))}
              <Box
                sx={{
                  margin: '2rem 0',
                  height: '200px',
                  width: '260px',
                  borderTop: '25px solid #f7f7f7',
                  borderBottom: '7px solid #f7f7f7',
                  borderLeft: '7px solid #f7f7f7',
                  borderRight: '7px solid #f7f7f7',
                }}
              ></Box>
              <Text
                text={id}
                sx={{ fontWeight: 700, margin: '1rem 0rem' }}
              />
              {dashboardNewsDataApi?.reviews?.slice(6, 12).map((val) => (
                <Box sx={{ marginTop: '1rem' }}>
                  <SideNewCards data={val} />
                </Box>
              ))}
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
            <img
              style={{ width: '100%', height: '100%' }}
              src="/advertise.jpg"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
