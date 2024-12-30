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

  // Replace the exact base path pattern in the URL
  const path = url.replace(/^https?:\/\/[^\/]+\/news\/details\//, '');
  
  // Split the remaining path to extract parts
  const parts = path.split('/');
  
  // Extract the category and remaining URL
  const subcategory = decodeURIComponent(parts[0]);
  const remainingUrl = decodeURIComponent(parts.slice(1).join('/'));

  const imageUrl = appConstants.BACKEND_IMAGE_URL;

  const [isExpanded, setIsExpanded] = useState(true);

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
    setIsExpanded(true);
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

  const keywords = headerNewsDataApi?.news[0]?.keywords.split(',');
  useEffect(() => {
    const loadInstagramEmbed = () => {
      if (window.instgrm) {
        // Delay to ensure the embed is in the DOM before processing
        setTimeout(() => {
          window.instgrm.Embeds.process();
        }, 1000 );
      }
    };

    // Check if the Instagram script is already present in the DOM
    const scriptExists = document.querySelector('script[src="https://www.instagram.com/embed.js"]');

    if (!scriptExists) {
      // Create the Instagram embed script if it doesn't exist
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js'; // Explicit https
      script.async = true;
      script.onload = loadInstagramEmbed;
      document.body.appendChild(script);
    } else {
      // Re-process embeds if the script is already loaded
      loadInstagramEmbed();
    }
  }, [])
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
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
            <Box
              sx={{
                // padding: '1rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '1.5rem',
              }}
              className="mobileViewDetails"
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

                <Box sx={{ display: 'flex', gap: '10px' }}>
                  <Text
                    sx={{ fontWeight: 700, fontSize: '0.7rem' }}
                    text={`By : ${headerNewsDataApi?.news[0]?.author ?? 'N/A'}`}
                  />
                  <Text
                    sx={{ fontWeight: 700, fontSize: '0.7rem' }}
                    text={formattedDate}
                  />
                </Box>
                <DetailNewsIconBox
                  description={
                    headerNewsDataApi?.news[0]?.news_description[0]?.description
                  }
                  imageUrl={`${imageUrl.trim()}${encodeURIComponent(headerNewsDataApi?.news[0]?.news_description[0]?.image.trim())}`}
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
                sx={{ color: '#565656', marginBottom: '5px', fontSize: '10px' }}
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
                      color: '#565656',
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
                      <span
                        className="read-more-button"
                        onClick={toggleReadMore}
                      >
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
                        style={{ height: 'auto', width: '100%' }}
                      />
                    )
                  )}
                  <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                    {/* <Text
                          className="news_desc"
                          sx={{
                            color: '#000',
                            fontSize:'0.7rem'
                          }}
                          text={'Image title :'}
                          /> */}
                    <Text
                      className="news_desc"
                      sx={{
                        color: '#565656',
                        display: 'block',
                        fontSize: '0.7rem',
                      }}
                      text={parse(headerNewsDataApi?.news[0]?.caption ?? ' ')}
                    />
                  </Box>
                  <Text
                    className="news_desc"
                    sx={{
                      color: '#565656',
                      display: 'block',
                      marginTop: '1rem',
                    }}
                    text={parse(
                      headerNewsDataApi?.news[0]?.image_description ?? ' '
                    )}
                  />
                  {/* <DetailNewsIconBox /> */}
                  {/* <div dangerouslySetInnerHTML={{ __html: parse(headerNewsDataApi?.news[0]?.news_description[1]
    ?.description?.replace(/<\/?p>/g, '') ?? '') ?? "" }} /> */}
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
                              color: '#565656',
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
                           <Box sx={{display:'flex',justifyContent:'center',}}>
      <Box className="categoriesContainer">
                 {parse(`${val?.embed ?? ''}`)}
                 </Box>
                 </Box>
                        </React.Fragment>
                      )
                  )}
                  <Box
                    className="keywords"
                    sx={{ display: 'flex', gap: '6px' }}
                  >
                    <Text
                      className="news_desc "
                      sx={{
                        display: 'block',
                        color: '#000',
                        minWidth: '90px',
                        marginTop: '0.3rem',
                      }}
                      text={'Keywords : '}
                    />
                    <Box
                      sx={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}
                    >
                      {keywords?.map((val, index) => (
                        <Text
                          className="news_desc"
                          sx={{
                            color: '#565656',
                            display: 'block',
                            border: '1px solid #565656',
                            padding: '0.4rem 0.8rem',
                            borderRadius: '24px',
                            fontSize: '12px',
                            cursor: 'pointer',
                          }}
                          text={val}
                        />
                      ))}
                    </Box>
                  </Box>
                  <Divider sx={{ margin: '1rem 0' }} />
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
                sx={{ color: '#565656', marginBottom: '5px', fontSize: '10px' }}
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
                <Box>
                  <Text text={'Related News'} sx={{ fontWeight: '700' }} />
                  <Box
                    className="categoriesContainer relatedNews"
                    sx={{ marginTop: '1rem' }}
                  >
                    {dashboardNewsDataApi?.reviews?.slice(0, 6).map(
                      (val) =>
                        headerNewsDataApi?.news[0].id !== val.id && (
                          <Box
                            className="categoriesSection"
                            sx={{ marginTop: '1rem', padding: 0 }}
                            key={val.id}
                          >
                            <SubHeadingNewCard data={val} />
                            <Divider
                              className="MobileViewRemove"
                              sx={{ margin: '1rem' }}
                            />
                          </Box>
                        )
                    )}
                  </Box>
                </Box>
              </Box>
              <Box sx={{ width: { xs: 'auto', md: '30%' } }}>
                <Box
                  sx={{
                    margin: '2rem 0',
                    position: 'relative',
                    height: { xs: 'auto', md: '268px' },
                    width: { xs: '105%', md: '300px' },
                    left: { xs: -10, md: 0 },
                    background: '#f7f7f7',
                    display: 'flex',
                    justifyContent: 'center',
                    outline: '7px solid #f7f7f7',
                    paddingTop: '18px',
                  }}
                >
                  <img
                    style={{ height: 'auto', width: '300px' }}
                    x
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
                <Box
                  className="sideNewCardsWidth trendingNewsWidthmobile"
                  sx={{ position: 'sticky', top: '1rem' }}
                >
                  <Text
                    text={'Trending News'}
                    sx={{ fontWeight: 700, margin: '1rem 0rem' }}
                  />

                  {trendingNews?.reviews?.slice(0, 5).map(
                    (val) =>
                      headerNewsDataApi?.news[0].id !== val.id && (
                        <Box sx={{ marginTop: '1rem' }} key={val.id}>
                          <SideNewCards data={val} />
                        </Box>
                      )
                  )}
                  <Box
                    sx={{
                      margin: '2rem 0',
                      position: 'relative',
                      height: { xs: 'auto', md: '268px' },
                      width: { xs: '105%', md: '300px' },
                      display: 'flex',
                      justifyContent: 'center',
                      left: { xs: -10, md: 0 },
                      background: '#f7f7f7',
                      outline: '7px solid #f7f7f7',
                      paddingTop: '18px',
                    }}
                  >
                    <img
                      style={{ height: 'auto', width: '300px' }}
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
                  <Text
                    text={'Latest News'}
                    sx={{ fontWeight: 700, margin: '1rem 0rem' }}
                  />

                  {trendingNews?.reviews?.slice(5, 11).map(
                    (val) =>
                      headerNewsDataApi?.news[0].id !== val.id && (
                        <Box sx={{ marginTop: '1rem' }} key={val.id}>
                          <SideNewCards data={val} />
                        </Box>
                      )
                  )}
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
        </>
      )}
    </>
  );
}
