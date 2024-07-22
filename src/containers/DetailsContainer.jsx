import React, { useEffect, useState } from 'react';
import { Box, Container, Divider } from '@mui/material';
import Text from 'components/common/Text';
import SubHeadingNewCard from 'components/common/cards/SubHeadingNewCard';
import '../App.css';
import SideNewCards from 'components/common/cards/SideNewCards';
import { dashboardNewsApiAction } from 'stores/redux/apiSlices/DashboardNewsSlice/dashboardNewsApiSlice';
import { useLocation } from 'react-router-dom';
import { appConstants } from 'helpers/constants/appConstants';
import '../components/common/cards/NewsCard.css';
import DetailNewsIconBox from 'components/DetailNews/DetailNewsIconBox';
import parse from 'html-react-parser';
import CircularProgress from '@mui/material/CircularProgress';

export default function DetailsContainer() {
  const url = window.location.href;

  const path = url.replace(/^https?:\/\/[^\/]+\/details\//, '');

  const parts = path.split('/');

  const subcategory = decodeURIComponent(parts[0]);
  const remainingUrl = decodeURIComponent(parts.slice(1).join('/'));

  const imageUrl = appConstants.BACKEND_IMAGE_URL;

  const [isExpanded, setIsExpanded] = useState(false);

  const location = useLocation();

  const [loading, setLoading] = useState(true);

  const { id } = location.state || {};

  const { data: trendingNews } = dashboardNewsApiAction.getDashboardNews();

  const { data: headerNewsDataApi } = dashboardNewsApiAction.getNewsById({
    sub_category: subcategory.replace(/-/g, ' '),
    url: remainingUrl,
  });

  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  const { data: dashboardNewsDataApi } =
    dashboardNewsApiAction.getDashboardNews({
      category: headerNewsDataApi?.news[0]?.category,
    });

  const toggleReadMore = () => {
    setIsExpanded(true);
  };

  useEffect(() => {
    setIsExpanded(false);
    window.scroll(0, 0);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [id]);

  const formattedDate = headerNewsDataApi?.news[0]?.date
    ? new Date(headerNewsDataApi?.news[0]?.date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })
    : '';

  return (
    <>
      {loading ? (
        <Box
          sx={{
            height: '40vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
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

              <Text
                sx={{ fontWeight: 700, fontSize: '0.7rem' }}
                text={formattedDate}
              />
              <DetailNewsIconBox
                image={`${imageUrl}${headerNewsDataApi?.news[0]?.news_description[0]?.image}`}
                title={headerNewsDataApi?.news[0]?.news_description[0]?.title}
              />
              {/* <img
            src={`${imageUrl}${headerNewsDataApi?.news[0]?.news_description[0]?.image}`}
            style={{ height: 'auto', width: '100%' }}
          /> */}

              {/* <DetailNewsIconBox /> */}
              {/* <Box
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
          </Box> */}
              <Box
                sx={{
                  overflowY: 'hidden',
                  height: isExpanded ? 'fit-content' : '125px',
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
                    maskImage: !isExpanded
                      ? 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))'
                      : 'none',
                    WebkitMaskImage: !isExpanded
                      ? 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))'
                      : 'none',
                  }}
                  text={parse(
                    headerNewsDataApi?.news[0]?.news_description[0]
                      ?.description ?? ' '
                  )}
                />
                {!isExpanded && (
                  <div
                    className="read-more-container"
                    style={{ height: '100%' }}
                  >
                    <span className="read-more-button" onClick={toggleReadMore}>
                      और देखें
                      {/* <span className="arrow-icon">→</span> */}
                    </span>
                  </div>
                )}

                {/* <img
              src={`${imageUrl}${headerNewsDataApi?.news[0]?.news_description[0]?.image}`}
              style={{ height: '400px', width: '100%' }}
            /> */}

                {headerNewsDataApi?.news[0]?.video ? (
                  <iframe
                    width="100%"
                    height="400px"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    src={headerNewsDataApi?.news[0]?.video}
                  ></iframe>
                ) : (
                  headerNewsDataApi?.news[0]?.news_description[0]?.image && (
                    <img
                      src={`${imageUrl}${headerNewsDataApi?.news[0]?.news_description[0]?.image}`}
                      alt="News"
                      style={{ height: '400px', width: '100%' }}
                    />
                  )
                )}
                <Box sx={{ display: 'flex', gap: '10px' }}>
                  <Text
                    sx={{ fontWeight: 700, fontSize: '0.7rem' }}
                    text={`By : ${headerNewsDataApi?.news[0]?.author ?? ' '}`}
                  />
                  <Text
                    sx={{ fontWeight: 700, fontSize: '0.7rem' }}
                    text={formattedDate}
                  />
                </Box>

                {/* <DetailNewsIconBox /> */}
                {headerNewsDataApi?.news[0]?.news_description?.map(
                  (val, index) =>
                    index > 0 && (
                      <React.Fragment key={index}>
                        <Text
                          sx={{
                            fontWeight: '600',
                            marginTop: '1rem',
                            fontSize: '18px',
                            marginBottom: '20px',
                          }}
                          text={val?.title}
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

                        {val?.image && (
                          <img
                            src={`${imageUrl}${val?.image}`}
                            style={{
                              height: '400px',
                              width: '100%',
                              marginBottom: '20px',
                            }}
                          />
                        )}
                      </React.Fragment>
                    )
                )}
              </Box>
              {/* <Box
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
          </Box> */}
              <Box sx={{ marginTop: '1rem' }}>
                <Text text={'Related News'} sx={{ fontWeight: '700' }} />
                <Box sx={{ marginTop: '1rem' }}>
                  {dashboardNewsDataApi?.reviews?.slice(0, 6).map((val) => (
                    <Box sx={{ marginTop: '1rem' }} key={val.id}>
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
                  <Box sx={{ marginTop: '1rem' }} key={val.id}>
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
                  <Box sx={{ marginTop: '1rem' }} key={val.id}>
                    <SideNewCards data={val} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Container>
        </>
      )}
    </>
  );
}
