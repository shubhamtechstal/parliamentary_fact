import { Box, Divider, Button } from '@mui/material';
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
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
} from '@mui/x-charts/Gauge';
import { newsLetterApiAction } from 'stores/redux/apiSlices/newsLetterApiSlice';
import { useNavigate } from 'react-router-dom';

export default function DashboardContainer() {
  function formatNumber(num) {
    return num?.toString().padStart(2, '0');
  }
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
    getNewsLetterData();
  }, []);
  const [getNewsLetterData, { data: newsLetterData }] =
    newsLetterApiAction.getNewsLetterData();
  const navigate = useNavigate();
  const date = new Date(newsLetterData?.date_session?.date);
  const options2 = {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formattedDate = date
    .toLocaleDateString('en-GB', options2)
    .replace(',', '');

  return (
    <>
    <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          background: '#f1f2f3',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignSelf: 'center',
            flexDirection: 'column',
            width: { xs: '100%', md: '80%' },
            background: '#fff',
            marginTop: { xs: '0.5rem', md: '1rem' },
            overflow: 'hidden',
            marginBottom: { xs: '0', md: '1rem' },
            padding: { xs: '0.5rem', md: '2rem 0.5rem' },
            borderRadius: '12px',
          }}
        >
          <Text
          font={'Sora'}
          sx={{
            color: 'grey',
            alignSelf: 'flex-end',
            marginRight: '10px',
            fontSize: '0.8rem',
            display: { xs: 'block', md: 'none' },
          }}
          text={formattedDate ?? 'N/A'}
        />
         <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ width: { xs: 'min-content', md: '28%' } }}>
            <Box
              sx={{
                display: 'flex',
                gap: '0.2rem',
                width: { xs: '120px', md: '100%' },
                flexWrap: 'wrap',
              }}
            >
              <Text
                font={'Sora'}
                sx={{ color: 'grey', fontSize: {xs:'1.1rem',md:'1.5rem'}, fontWeight:{ xs:700,md:600},lineHeight:1.2 }}
                text={`TODAY'S`}
              />
              <Text
                font={'Sora'}
                sx={{ color: 'grey', fontSize: {xs:'1.1rem',md:'1.5rem'}, fontWeight:{ xs:700,md:600},lineHeight:1.2 }}
                text={`LOK SABHA `}
              />
              <Text
                font={'Sora'}
                sx={{ color: 'grey', fontSize: {xs:'1.1rem',md:'1.5rem'}, fontWeight:{ xs:700,md:600},lineHeight:1.2 }}
                text={`PERFORMANCE`}
              />
            </Box>
            <Text
              font={'Sora'}
              sx={{
                color: 'grey',
                marginTop:'0.5rem',
                alignSelf: 'flex-end',
                marginRight: '10px',
                fontSize: '0.8rem',
                display: { xs: 'none', md: 'block' },
              }}
              text={formattedDate ?? 'N/A'}
            />
          {/* <Text
            font={'Sora'}
            sx={{
              color: 'grey',
              fontSize: '0.8rem',
              fontWeight: 600,
              marginTop: '10px',
            }}
            text={`Day-${(newsLetterData?.date_session?.day_count ?? "00")?.toString()?.padStart(2, '0') }`}
          /> */}
            <Text
              font={'Sora'}
              sx={{
                color: 'grey',
                fontSize: '0.8rem',
                fontWeight: 600,
                textWrap: 'nowrap',
              }}
              text={newsLetterData?.date_session?.session_name}
            />
            
          </Box>
          <Box sx={{ margin:{ xs:'0 1rem',md:"3rem 1rem 0 1rem"}, width: { xs: '47%', md: 'auto' } }}>
            <GaugeContainer
              width={195}
              height={200}
              startAngle={-130}
              innerRadius={82}
              sx={{ position: 'relative', left: { xs: -12, md: -60 } }}
              endAngle={130}
              value={
                newsLetterData?.loksabha_productivity?.length > 0
                ? Math?.min(
                    newsLetterData?.loksabha_productivity[0]
                      ?.productivity_percentage,
                    100
                  )
                : 0
              }
            >
              <GaugeReferenceArc style={{ fill: '#DCDCDC' }} />{' '}
              {/* Set the color here */}
              <GaugeValueArc style={{ fill: '#FF936F' }} />{' '}
              {/* Set the color here */}
              <text
                x="50%"
                y="48%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fill: '#FF936F',
                  fontSize: '3rem',
                  fontWeight: '800',
                  fontFamily: '"Sora", sans-serif',
                }}
              >
                {`${newsLetterData?.loksabha_productivity?.length > 0 ? newsLetterData?.loksabha_productivity[0]?.productivity_percentage?.toString().split('.')[0] : 0}`}
              </text>
              <text
                x="52%"
                y="68%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fill: '#FF936F',
                  fontSize: '2rem',
                  fontWeight: '500',
                  fontFamily: '"Sora", sans-serif',
                }}
              >
                {`.${newsLetterData?.loksabha_productivity?.length > 0 ? newsLetterData?.loksabha_productivity[0]?.productivity_percentage?.toString().split('.')[1] : 0}%`}
              </text>
              <text
                x="50%"
                y="87%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fill: '#00000080',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  fontFamily: '"Sora", sans-serif',
                }}
              >
                {`Productivity`}
              </text>
              <text
                x="11%"
                y="86%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fill: '#00000080',
                  fontSize: '0.6rem',
                  fontWeight: '500',
                  fontFamily: '"Sora", sans-serif',
                }}
              >
                {`0`}
              </text>
              <text
                x="93%"
                y="86%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fill: '#00000080',
                  fontSize: '0.6rem',
                  fontWeight: '500',
                  fontFamily: '"Sora", sans-serif',
                }}
              >
                {`100+`}
              </text>
            </GaugeContainer>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '0.8rem',
              maxHeight:{xs:'auto',md:'140px'},
              borderBottom:{xs:'none',md:'2px solid #00000010'},
              width: { xs: '100%', md: 'fit-content' },
              marginTop: {xs:'1rem',md:'5rem'},
              padding: '2rem 0',
              textAlign: 'end',
              justifyContent: 'flex-end',
              position: 'relative',
            }}
          >
            
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 0, md: 67 },
                left: { xs: '57%', md: '-90px' },
              }}
            >
              <Text
                font={'Sora'}
                sx={{
                  color: '#fff',
                  background: '#FF936F',
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  width: '80px',
                  borderRadius: '15px',
                  textAlign: 'center',
                  position: 'absolute',
                  top: -22,
                  padding: '0.2rem 0',
                }}
                text={`${newsLetterData?.loksabha_productivity?.length > 0 ? `${Math.floor(newsLetterData?.loksabha_productivity?.[0]?.actual_time / 60).toString().padStart(2, '0')}:${(newsLetterData?.loksabha_productivity?.[0]?.actual_time% 60)?.toString().padStart(2, '0')}` : 0} Hrs`}
              />
              <Text
                font={'Sora'}
                sx={{
                  color: '#fff',
                  background: '#919191',
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  width: '80px',
                  borderRadius: '15px',
                  zIndex: -1,
                  textAlign: 'center',
                  padding: '0.2rem 0',
                }}
                text={'Work done'}
              />
            </Box>
            <Box
              sx={{
                marginTop: '1rem',
                position: 'relative',
                display: { xs: 'block', md: 'flex' },
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                textAlign: { xs: 'end', md: 'start' },
                gap: { xs: 0, md: '1rem' },
              }}
            >
              <Text
              font={'Sora'}
              sx={{
                color: 'grey',
                position:'absolute',
                fontSize: '0.65rem',
                fontWeight: 600,
                top:-150,
                left:-85,
                width:'70px',
                margin: '2rem 0 0 0rem',
                display: { xs: 'block', md: 'none' },
              }}
              text={'NUMBER OF ADJOURNMENT'}
            />
              <Box
                sx={{
                  position: 'absolute',
                  top: -65,
                  left: -80,
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <Box
                  sx={{
                    color: '#fff',
                    //   background: '#cbcbcb',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    borderRadius: '50%',
                    textAlign: 'center',
                    width: '55px',
                    height: '55px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src="Assets/icons/Adjournment-image1.png"
                    alt="adjournment-1"
                    style={{ width: '100%' }}
                  />
                </Box>
                <Text
                  font={'Sora'}
                  sx={{
                    color: '#fff',
                    //   background: '#FF936F',
                    fontSize: '1.5rem',
                    fontWeight: '500',
                    borderRadius: '50%',
                    textAlign: 'center',
                    position: 'absolute',
                    top: 43,
                    backgroundImage:
                      'url(/Assets/icons/Adjournment-image-2.png)', // Ensure the file extension is correct
                    backgroundSize: 'cover', // To make the image cover the entire element
                    backgroundRepeat: 'no-repeat',
                    width: '55px',
                    height: '55px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  text={formatNumber(newsLetterData?.adjourned_count ?? 0)}
                />
              </Box>
              <Box>
                <Text
                  font={'Sora'}
                  sx={{ color: 'grey', fontSize: '0.65rem', fontWeight: '600' }}
                  text={'QUESTION HOUR'}
                />
                <Text
                  font={'Sora'}
                  sx={{
                    color: '#FF936F',
                    fontSize: '1.3rem',
                    fontWeight: '600',
                  }}
                  text={
                    newsLetterData?.productivity?.length > 0
                      ? `${parseFloat(newsLetterData?.productivity[0]?.question_hour_percentage).toFixed(1)}`
                      : '0'
                  }
                ><span style={{fontWeight:400}}>%</span>
                </Text>
              </Box>
              <Box>
                <Text
                  font={'Sora'}
                  sx={{
                    color: 'grey',
                    fontSize: '0.65rem',
                    fontWeight: '600',
                    marginTop: { xs: '0.5rem', md: '0' },
                  }}
                  text={'LEGISLATIVE BUSINESS'}
                />
                <Text
                  font={'Sora'}
                  sx={{
                    color: '#FF936F',
                    fontSize: '1.3rem',
                    fontWeight: '600',
                  }}
                  text={
                    newsLetterData?.productivity?.length > 0
                      ? `${parseFloat(newsLetterData?.productivity[0]?.legislative_business_percentage).toFixed(1)}`
                      : '0'
                  }
                ><span style={{fontWeight:400}}>%</span>
                </Text>
              </Box>
            </Box>
            <Box
              sx={{
                height: '110px',
                width: '2px',
                background: '#FF936F',
                marginTop: '1rem',
                display: { xs: 'block', md: 'none' },
              }}
            ></Box>
            <Box
              sx={{
                justifyContent: 'flex-end',
                textAlign: { xs: 'start', md: 'start' },
                width: { xs: 'min-content', md: 'fit-content' },
                marginTop: '1rem',
                display: { xs: 'block', md: 'flex' },
                flexWrap: 'wrap',
                gap: { xs: 0, md: '1rem' },
              }}
            >
                 <Box>
                <Text
                  font={'Sora'}
                  sx={{ color: 'grey', fontSize: '0.65rem', fontWeight: '600' }}
                  text={'ZERO HOUR'}
                />
                <Text
                  font={'Sora'}
                  sx={{
                    color: '#FF936F',
                    fontSize: '1.3rem',
                    fontWeight: '600',
                  }}
                  text={
                    newsLetterData?.productivity?.length > 0
                      ? `${parseFloat(newsLetterData?.productivity[0]?.zero_hour_percentage).toFixed(1)}`
                      : '0'
                  }
                ><span style={{fontWeight:400}}>%</span>
                </Text>
              </Box>
              <Box>
                <Text
                  font={'Sora'}
                  sx={{
                    color: 'grey',
                    fontSize: '0.65rem',
                    textWrap:'nowrap',
                    fontWeight: '600',
                    marginTop: { xs: '0.5rem', md: '0' },
                  }}
                  text={'OTHER BUSINESS'}
                />
                <Text
                  font={'Sora'}
                  sx={{
                    color: '#FF936F',
                    fontSize: '1.3rem',
                    textWrap:'nowrap',
                    fontWeight: '600',
                  }}
                  text={
                    newsLetterData?.productivity?.length > 0
                      ? `${parseFloat(newsLetterData?.productivity[0]?.other_business_percentage).toFixed(1)}`
                      : '0'
                  }
                >
                  <span style={{fontWeight:400}}>%</span>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <img
            className="parliamentDotImage"
            src="Assets/icons/Parliament-dot-image1.png"
            alt="parliament"
            style={{ position: 'absolute' }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: { xs: '100%', md: '40%' },
            alignSelf: 'flex-end',
            padding: { xs: '0', md: '0 2rem 2rem 2rem' },
            borderBottom:{xs:'none',md:'2px solid #00000010'},
            justifyContent: { xs: 'flex-end', md: 'space-between' },
            gap: '1rem',
          }}
        >
          <Box
            sx={{
              // alignSelf: 'flex-end',
              display: 'flex',
              flexDirection: 'column',
              marginTop: { xs: '1.1rem' },
              paddingLeft: '3rem',
              alignItems: 'center',
              background: { xs: '#fff' },
              height: 'min-content',
              zIndex: 1,
              // width:{xs:'auto',md:'65%'}
            }}
          >
            <Text
              font={'Sora'}
              sx={{ color: '#5c5c5c', fontSize: '1.1rem', fontWeight: '600' }}
              text={'Govt Bill'}
            />
            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
              <Box>
                <Text
                  font={'Sora'}
                  sx={{ color: 'grey', fontSize: '0.65rem', fontWeight: '600' }}
                  text={'INTERDUCE'}
                />
                <Text
                  font={'Sora'}
                  sx={{
                    color: '#FF936F',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                  }}
                  text={formatNumber(
                    newsLetterData?.bill_status_counts?.introduced_bill ?? 0
                  )}
                />
              </Box>
              <Box>
                <Text
                  font={'Sora'}
                  sx={{ color: 'grey', fontSize: '0.65rem', fontWeight: '600' }}
                  text={'DISCUSSED'}
                />
                <Text
                  font={'Sora'}
                  sx={{
                    color: '#FF936F',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                  }}
                  text={formatNumber(
                    newsLetterData?.bill_status_counts?.discussed ?? 0
                  )}
                />
              </Box>
              <Box>
                <Text
                  font={'Sora'}
                  sx={{ color: 'grey', fontSize: '0.65rem', fontWeight: '600' }}
                  text={'PASSED'}
                />
                <Text
                  font={'Sora'}
                  sx={{
                    color: '#FF936F',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                  }}
                  text={formatNumber(
                    newsLetterData?.bill_status_counts?.passed ?? 0
                  )}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              minWidth: '2px',
              height: '100px',
              background: '#00000010',
              display: { xs: 'none', md: 'block' },
            }}
          ></Box>
          <Box sx={{ width: '100px', display: { xs: 'none', md: 'flex' },flexDirection:'column',justifyContent:'center' }}>
            <Text
              font={'Sora'}
              sx={{
                color: 'grey',
                fontSize: '0.65rem',
                fontWeight: 600,
              }}
              text={'NUMBER OF ADJOURNMENT'}
            />
            <Box sx={{ display: 'flex', gap: '5px' }}>
              <Box
                sx={{
                  color: '#fff',
                  //   background: '#cbcbcb',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  borderRadius: '50%',
                  textAlign: 'center',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src="Assets/icons/Adjournment-image1.png"
                  alt="adjournment-1"
                  style={{ width: '100%' }}
                />
              </Box>
              <Text
                font={'Sora'}
                sx={{
                  color: '#fff',
                  //   background: '#FF936F',
                  fontSize: '1.5rem',
                  fontWeight: '500',
                  borderRadius: '50%',
                  textAlign: 'center',
                  backgroundImage: 'url(/Assets/icons/Adjournment-image-2.png)', // Ensure the file extension is correct
                  backgroundSize: 'cover', // To make the image cover the entire element
                  backgroundRepeat: 'no-repeat',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                text={formatNumber(newsLetterData?.adjourned_count ?? 0)}
              />
            </Box>
          </Box>
        </Box>
          <Button
            sx={{
              background: '#A6A6A6',
              alignSelf: 'center',
              color: '#fff',
              fontSize: '10px',
              fontWeight: '600',
              marginTop: '3.5rem',
              width: 'fit-content',
              borderRadius: '18px',
              padding: { xs: '0.4rem 2rem', md: '0.4rem 2rem' },
              '&:hover': {
                background: '#A6A6A6',
                color: '#fff',
              },
            }}
            onClick={() => navigate('/newsletter/loksabha')}
          >
            Click here to view news letter
          </Button>
        </Box>
      </Box>
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
            style={{cursor:'pointer'}}

            src="/Assets/ads/leftSideImage.jpg"
          />
        </Box>

        <Box sx={{ width: '100%' }}>
          <Box>
            <HeadingNewCards data={topLatestNewsApi?.latest_top_news[0]} />
          </Box>

          <Box className="homeNewsContainer" sx={{ padding: '1rem 1rem' }}>
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
                <BigNewCards data={dashboardNewsDataApi?.reviews[0]} />
              </Box>
            </Box>

            <Box className="homePageNewsBox2">
              <Box
                className="mobile-three-card-section"
                sx={{ display: 'flex', gap: '1.5rem' }}
              >
                {dashboardNewsDataApi?.reviews?.slice(1, 3).map((data) => (
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
              <Box
                className="desktop-advertise"
                sx={{ maxWidth: '728px', height: '90px' }}
              >
                <img
                  onClick={() =>
                    window.open(
                      'https://www.theshilp.com/product-details/fortunate-maha-ganesha',
                      '_blank'
                    )
                  }
                  style={{cursor:'pointer'}}

                  className="advertise_img"
                  src="/Assets/ads/728x90ad.jpg"
                />
              </Box>
              <Box
                className="mobile-advertise"
                sx={{ maxWidth: '728px', height: '50px' }}
              >
                <img
                  onClick={() =>
                    window.open(
                      'https://www.theshilp.com/product-details/indian-army-strike-antique-bronze-gold',
                      '_blank'
                    )
                  }
                  style={{cursor:'pointer'}}

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
              paddingLeft: { xs: '1rem', md: 0 },
              paddingRight: { xs: '1rem', md: 0 },
              margin: { md: '0px' },
            }}
          >
            <Box width={{ sm: '100%', xs: '100%', md: '95%' }}>
              <Box sx={{ display: 'flex', gap: '5px', marginTop: '0.5rem' }}>
                <Text
                  text={'||'}
                  sx={{ fontWeight: 500, margin: '0 0 0 0', color: 'red' }}
                ></Text>
                <Text text={`Parliament Session`} sx={{ fontWeight: 700 }} />
              </Box>
              <Box className="CenterVirusConfrontSection">
                {parliamentSessionNews?.reviews?.slice(0, 5).map((data) => (
                  <Box key={data.id} className="mobileCenterBackgroundCard">
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
            <Box
              className="bigNewsSection"
              sx={{ maxWidth: '750px', width: '100%' }}
            >
              <Box sx={{ display: 'flex', gap: '5px', margin: '0 1rem' }}>
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
                sx={{ display: 'flex', gap: '1.5rem', margin: '0 1rem' }}
              >
                <Box sx={{ width: '100%' }}>
                  <BigNewCards data={assemblyNews?.reviews[0]} />
                </Box>
                <Box
                  className="mobile-three-card-section"
                  sx={{ display: 'flex', gap: '1.5rem' }}
                >
                  {assemblyNews?.reviews?.slice(1, 3).map((data) => (
                    <Box>
                      <BottomSubHeadingCards data={data} />
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box
                className="mobileAd"
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
                    sx={{
                      color: '#767676',
                      marginBottom: '5px',
                      fontSize: '10px',
                    }}
                    text={'-Advertisement-'}
                  />
                  <Box
                    className="desktop-advertise"
                    sx={{ maxWidth: '650px', height: '80px' }}
                  >
                    <img
                      onClick={() =>
                        window.open(
                          'https://www.theshilp.com/product-details/fortunate-maha-ganesha',
                          '_blank'
                        )
                      }
                      style={{ height: '100%', width: '100%',cursor:'pointer' }}
                      className="advertise_img"
                      src="/Assets/ads/728x90ad.jpg"
                    />
                  </Box>
                  <Box
                    className="mobile-advertise"
                    sx={{ maxWidth: '650px', height: '50px' }}
                  >
                    <img
                      onClick={() =>
                        window.open(
                          'https://www.theshilp.com/product-details/fortunate-maha-ganesha',
                          '_blank'
                        )
                      }
                      style={{ height: '100%', width: '100%',cursor:'pointer' }}
                      className="advertise_img"
                      src="/Assets/ads/shilp-mobile-ad-300x50-2.jpg"
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                className="historicalMobile"
                sx={{ background: '#f7f7f7', padding: '0.5rem 1rem' }}
              >
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
                        sx={{
                          flex: '1 1 calc(33.33% - 1rem)',
                          margin: { xs: '1rem 0', md: '0.5rem' },
                        }}
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
                    margin: '0 1rem',
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
                    {pioParliamentarainNews?.reviews
                      ?.slice(1, 4)
                      .map((data) => (
                        <Box
                          key={data.id}
                          className="parliamentariancardsection"
                        >
                          <SubHeadingNewCard data={data} />
                        </Box>
                      ))}
                  </Box>
                </Box>
                <Box>
                  <Box
                    sx={{
                      background: '#f7f7f7',
                      padding: { xs: '1rem', md: '1px 10px 10px 10px' },
                    }}
                  >
                    <Box
                      sx={{ display: 'flex', gap: '5px', minWidth: '200px' }}
                    >
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
                      {pioParliamentarainNews?.reviews
                        ?.slice(0, 1)
                        .map((data) => (
                          <Box>
                            <BottomSubHeadingCards
                              type={'withbg'}
                              data={data}
                            />
                          </Box>
                        ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Divider sx={{ margin: '1rem 0' }} />
              <Box sx={{ display: 'flex', gap: '5px', margin: '0 1rem' }}>
                <Text
                  text={'||'}
                  sx={{ fontWeight: 500, margin: '0 0 1rem 0', color: 'red' }}
                ></Text>
                <Text
                  text={'MLA News'}
                  sx={{ fontWeight: 700, margin: '0 0 1rem 0' }}
                />
              </Box>
              <Box
                className="parliamentarian-section mlanewssection"
                sx={{ gap: '0' }}
              >
                {mlaNews?.reviews?.slice(0, 3).map((data) => (
                  <Box key={data.id} sx={{ margin: '0 0.5rem' }}>
                    <SubHeadingNewCard data={data} />
                    <Divider
                      className="MobileViewRemove"
                      sx={{ margin: '1rem' }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>

            <Box className="sideSection">
              <Box
                sx={{
                  margin: '2rem 0',
                  display: 'flex',
                  justifyContent: 'center',
                  width: { xs: '100%', md: '300px' },
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
                  style={{cursor:'pointer'}}

                  className="advertise_img mobileSmallAdImage"
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
                {dashboardNewsDataApi?.reviews?.slice(4, 9).map((data) => (
                  <Box key={data.id} className="mostReadNews">
                    <SideNewCards data={data} />
                  </Box>
                ))}
                <Box
                  className="MobileViewRemove"
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
                    style={{cursor:'pointer'}}

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
                {dashboardNewsDataApi?.reviews?.slice(10, 16).map((data) => (
                  <Box key={data.id}>
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
                     style={{cursor:'pointer'}}

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
          <Box
            className="desktop-advertise"
            sx={{ maxWidth: '728px', height: '90px' }}
          >
            <img
              onClick={() =>
                window.open(
                  'https://www.theshilp.com/product-details/fortunate-maha-ganesha',
                  '_blank'
                )
              }
              style={{cursor:'pointer'}}

              className="advertise_img"
              src="/Assets/ads/728x90ad.jpg"
            />
          </Box>
          <Box
            className="mobile-advertise"
            sx={{ maxWidth: '650px', height: '50px' }}
          >
            <img
              onClick={() =>
                window.open(
                  'https://www.theshilp.com/product-details/fortunate-maha-ganesha',
                  '_blank'
                )
              }
              style={{ height: '100%', width: '100%',cursor:'pointer'}}
              className="advertise_img"
              src="/Assets/ads/shilp-mobile-ad-300x50-2.jpg"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
