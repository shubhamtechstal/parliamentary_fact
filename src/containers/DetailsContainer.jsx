import React, { useEffect, useState } from 'react';
import { Box, Container, Divider } from '@mui/material';
import Text from 'components/common/Text';
import SubHeadingNewCard from 'components/common/cards/SubHeadingNewCard';
import '../App.css';
import SideNewCards from 'components/common/cards/SideNewCards';
import { dashboardNewsApiAction } from 'stores/redux/apiSlices/DashboardNewsSlice/dashboardNewsApiSlice';
import { useLocation, useParams } from 'react-router-dom';
import { appConstants } from 'helpers/constants/appConstants';
import '../components/common/cards/NewsCard.css';
import DetailNewsIconBox from 'components/DetailNews/DetailNewsIconBox';
import parse from 'html-react-parser';

export default function DetailsContainer() {
  const imageUrl = appConstants.BACKEND_IMAGE_URL;

  const [isExpanded, setIsExpanded] = useState(false);

  const location = useLocation();

  const { id } = location.state || {};

  const { data: headerNewsDataApi } = dashboardNewsApiAction.getNewsById({
    id: id,
  });

  const { data: dashboardNewsDataApi } =
    dashboardNewsApiAction.getDashboardNews({
      category: headerNewsDataApi?.news[0]?.category,
    });

  const { data: trendingNews } = dashboardNewsApiAction.getDashboardNews();

  const toggleReadMore = () => {
    setIsExpanded(true);
  };

  useEffect(()=>{
    setIsExpanded(false)
    window.scroll(0, 0);
  },[id]);
  // console.log(headerNewsDataApi.news[0].news_description,'headerNewsDataApi');
  return (
    <Container
      sx={{
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
        className="DetailsContainer"
      >
        <Text
          sx={{
            fontWeight: '700',
            marginTop: '1rem',
            fontSize: '1.5rem',
          }}
          text={headerNewsDataApi?.news[0]?.news_description[0]?.title}
        />
        <img
          src={`${imageUrl}${headerNewsDataApi?.news[0]?.news_description[0]?.image}`}
          style={{ height: 'auto', width: '100%' }}
        />

        <DetailNewsIconBox />
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
              <img
                style={{ width: '100%', height: '100%' }}
                src="/advertise.jpg"
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            overflowY: 'hidden',
            height: isExpanded ? 'fit-content' : '100px',
          }}
        >
          <Text
            className="news_desc"
            sx={{
              color: '#767676',
              display: '-webkit-box',
              WebkitLineClamp: isExpanded ? 'none' : 3,
              WebkitBoxOrient: 'vertical',
              overflow: isExpanded ? 'visible' : 'hidden',
              textOverflow: isExpanded ? 'unset' : 'ellipsis',
            }}
            text={parse(
              headerNewsDataApi?.news[0]?.news_description[0]?.description ??
                ' '
            )}
          />
          {!isExpanded && (
            <span className="read-more-button" onClick={toggleReadMore} style={{marginBottom:'2rem'}}>
              Read more
              <span className="arrow-icon">→</span>
            </span>
          )}
          {headerNewsDataApi?.news[0]?.news_description?.map(
            (val, index) =>
              index > 0 && (
                <>
                  <Text
                    sx={{
                      fontWeight: '600',
                      marginTop: '1rem',
                      fontSize: '16px',
                      marginBottom:'20px'
                    }}
                    text={val?.title}
                  />

                  <img
                    src={`${imageUrl}${val?.image}`}
                    style={{ height: 'auto', width: '100%',marginBottom:'20px' }}
                  />
                  <Text
                    className="news_desc"
                    sx={{
                      color: '#767676',
                      display: '-webkit-box',
                      WebkitLineClamp: isExpanded ? 'none' : 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: isExpanded ? 'visible' : 'hidden',
                      textOverflow: isExpanded ? 'unset' : 'ellipsis',
                    }}
                    text={parse(val?.description ?? ' ')}
                  />
                </>
              )
          )}
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
              <img
                style={{ width: '100%', height: '100%' }}
                src="/advertise.jpg"
              />
            </Box>
          </Box>
        </Box>
        <Box>
          <Text text={'Related News'} sx={{ fontWeight: '700' }} />
          <Box sx={{ marginTop: '1rem' }}>
            {dashboardNewsDataApi?.reviews?.slice(0, 6).map((val) => (
              <Box sx={{ marginTop: '1rem' }}>
                <SubHeadingNewCard data={val} />
                <Divider sx={{ margin: '1rem' }} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          className="sideNewCardsWidth"
          sx={{ position: 'sticky', top: '1rem' }}
        >
          <Text
            text={'Trending News'}
            sx={{ fontWeight: 700, margin: '1rem 0rem' }}
          />

          {trendingNews?.reviews?.slice(0, 5).map((val) => (
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
            text={'Trending News'}
            sx={{ fontWeight: 700, margin: '1rem 0rem' }}
          />

          {trendingNews?.reviews?.slice(5, 11).map((val) => (
            <Box sx={{ marginTop: '1rem' }}>
              <SideNewCards data={val} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
