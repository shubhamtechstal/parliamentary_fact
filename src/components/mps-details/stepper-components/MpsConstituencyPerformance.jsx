// import IconButton from 'components/common/IconButton';
// import ShareIcon from '@mui/icons-material/Share';
import { Box, Card, useMediaQuery } from '@mui/material';
// import Avatar from 'components/common/Avatar';
// import { Gauge, gaugeClasses } from '@mui/x-charts';
import MpsTopPerformanceCard from 'components/Mps_performance/cards/MpsTopPerformanceCard';
import GrayButton from 'components/common/GrayButton';
import AdvertiseSection from 'components/addLayout/HorizontalAdvertiseSection';
// import GrayButton from 'components/common/GrayButton';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import YearlyStatsCards from '../commonfiles/ConstituencyCardComponent';

function MpsConstituencyPerformance({ constituency_performance }) {
  // const small = useMediaQuery('(max-width:650px)');
  const { title, data = {} } = {
    title: 'Constituency Performance',
    data: constituency_performance,
  };
  const mpNationalDomy = {
    rank: data?.national_rank,
    name: data?.name,
    mp_id: data?.mp_id,
    constituency: data?.constituency,
    performance: data?.national_percentage,
    rankTitle: 'National Rank:',
    image: data?.image,
    partyName: data?.party_short_name,
  };
  const mpStateDomy = {
    rank: data?.state_rank,
    name: data?.name,
    mp_id: data?.mp_id,
    constituency: data?.constituency,
    performance: data?.state_percentage,
    image: data?.image,
    partyName: data?.party_short_name,
    rankTitle: 'State Rank:',
  };
  return (
    <>
      <Box p={'2rem 1rem'} maxWidth={{ md: '80%', sx: '100%' }} margin="auto">
        <span
          style={{
            borderBottom: '2px solid red',
            margin: '0 0',
            fontSize: '18px',
            fontWeight: 'bold',
            color: 'black',
            opacity: '0.6',
            paddingBottom: '5px',
          }}
        >
          {title}
        </span>
        <Box
          sx={{
            display: 'flex',
            gap: { md: '5rem', xs: 1 },
            alignItems: 'center',
            justifyContent: 'start',
            overflow: 'auto',
            py: 5,
            px: 1,
          }}
        >
          <Box>
            <p style={{ margin: '0 0 10px 10px' }}>National Ranking</p>
            <Box minWidth={310} margin={'auto'}>
              <MpsTopPerformanceCard
                mp={mpNationalDomy}
                cardCatagory={title}
                // isLoading={isRankLoading}
              />
            </Box>
          </Box>
          <Box>
            <p style={{ margin: '0 0 10px 10px' }}>State Ranking</p>
            <Box minWidth={310} margin={'auto'}>
              <MpsTopPerformanceCard cardCatagory={title} mp={mpStateDomy} />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            justifyContent: 'right',
            display: 'flex',
            width: '100%',
            mb: 4,
          }}
        >
          <GrayButton bgColor={'#E39A00'}> View More </GrayButton>
        </Box>
      </Box>
      <AdvertiseSection />
      {/* <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { md: 'center', xs: 'start' },
          gap: 3,
          padding: { md: '2rem', xs: '0.5rem' },
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            fontFamily: 'Sora',
            gap: { md: 5, xs: 2 },
            alignItems: 'center',
          }}
        >
          <img
            src="/Assets/icons/bagImage.png"
            width={140}
            alt="performance bag image"
          />
          <Box>
            <Box sx={{ textAlign: 'right' }}>
              <IconButton
                size="small"
                sx={{
                  background:
                    'transparent linear-gradient(180deg, #E1DD31 0%, #FFA200 100%) 0% 0% no-repeat padding-box;',
                  width: '30px',
                }}
              >
                <ShareIcon fontSize="small" />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: { md: 5, sx: 3 },
                pr: 1,
              }}
            >
              <span
                style={{
                  color: '#FF708B',
                  fontWeight: 'bold',
                  fontSize: '20px',
                }}
              >
                8314₹
              </span>
              <p
                style={{
                  borderBottom: '2px solid #c6c1c1',
                  margin: '10px 0',
                  paddingBottom: '10px',
                  color: '#444444',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  textAlign: 'right',
                  minWidth: '120px',
                }}
              >
                Spent
              </p>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
                pr: 1,
              }}
            >
              <span
                style={{
                  color: '#FF708B',
                  fontWeight: 'bold',
                  fontSize: '20px',
                }}
              >
                8314₹
              </span>
              <p
                style={{
                  borderBottom: '2px solid #c6c1c1',
                  margin: '10px 0',
                  paddingBottom: '10px',
                  color: '#444444',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  textAlign: 'right',
                  minWidth: '120px',
                }}
              >
                Unspent
              </p>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
                pr: 1,
              }}
            >
              <span
                style={{
                  color: '#FF708B',
                  fontWeight: 'bold',
                  fontSize: '20px',
                }}
              >
                8314₹
              </span>
              <p
                style={{
                  borderBottom: '2px solid #c6c1c1',
                  margin: '10px 0',
                  paddingBottom: '10px',
                  color: '#444444',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  textAlign: 'right',
                  minWidth: '120px',
                }}
              >
                Recommendation
              </p>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
                pr: 1,
              }}
            >
              <span
                style={{
                  color: '#FF708B',
                  fontWeight: 'bold',
                  fontSize: '20px',
                }}
              >
                8314₹
              </span>
              <p
                style={{
                  textAlign: 'right',
                  margin: '10px 0',
                  color: '#444444',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  minWidth: '120px',
                }}
              >
                Eligibility
              </p>
            </Box>
            <p
              style={{
                textAlign: 'right',
                margin: '10px 0',
                paddingBottom: '10px',
                color: 'gray',
                fontSize: '10px',
                fontWeight: 'bold',
                minWidth: '120px',
              }}
            >
              Updated data: till 23 Sep 2020
            </p>
          </Box>
        </Box>
        <Box>
          <h3 style={{ color: '#444444', textAlign: 'center' }}>
            Fund utilization
          </h3>
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              overflow: 'auto',
              p: 2,
              flexWrap: { xs: 'nowrap', md: 'wrap' },
              justifyContent: { md: 'space-around', xs: 'start' },
              width: { xs: '360px', md: 'auto' },
            }}
          >
            {Array.from({ length: 8 }).map((i) => {
              return (
                <Card
                  key={i}
                  sx={{
                    minWidth: '120px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: '20px',
                    boxShadow: '0px 0px 20px #EB313329',
                    py: 1,
                  }}
                >
                  <h4 style={{ color: 'gray', margin: '0 0' }}>Develop</h4>
                  <Gauge
                    width={90}
                    height={90}
                    value={60}
                    cornerRadius="50%"
                    sx={{
                      [`& .${gaugeClasses.valueText}`]: {
                        fontSize: { md: 20, xs: 18 },
                        fontWeight: 'bold',
                        transform: 'translate(0px, 0px)',
                        color: 'rgb(0 0 0 / 50%)',
                        fontFamily: "'Saira', sans-serif",
                      },
                      [`& .${gaugeClasses.valueArc}`]: {
                        fill: '#E59B00',
                      },
                    }}
                    text={({ value }) => `${value}%`}
                  />
                </Card>
              );
            })}
          </Box>
        </Box>
      </Box> */}

      {/* <Card
        sx={{
          background: '#FFFFFF 0% 0% no-repeat padding-box',
          minHeight: '100px',
          boxShadow: '0px 0px 10px #EB313329',
          borderRadius: '20px',
          m: 2,
          position: 'relative',
          border: '2px solid #70707033',
        }}
      >
        <Box p={2}>
          <GrayButton bgColor={'#E39901'}>1st Year</GrayButton>
          <IconButton
            // onClick={() => handleOpenSharePopup()}
            sx={{ position: 'absolute', right: 0, top: 0 }}
          >
            <MoreVertIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            overflow: 'auto',
            p: 2,
            flexWrap: { xs: 'nowrap', md: 'wrap' },
            justifyContent: 'space-around',
            width: { xs: '100%', md: 'auto' },
          }}
        >
          {Array.from({ length: 4 }).map((i) => {
            return (
              <PercentageCardUi
                carWidth = {'22%'}
                i={i}
                data={{ title: 'Develop', percentage: 60 }}
                isSmall={small}
              />
            );
          })}
        </Box>
        <YearlyStatsCards isSmall = {small} />
        <p style={{ textAlign: 'right', paddingRight: '1rem' }}>
          <span style={{ color: '#FB8179', borderBottom: '2px solid #FB8179' }}>
            Check Month wise
          </span>
        </p>
      </Card> */}
    </>
  );
}

// const PercentageCardUi = ({ carWidth, data, isSmall, i }) => {
//   return (
//     <Card
//       key={i}
//       sx={{
//         minWidth: carWidth ?? '100px',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         boxShadow: '0px 0px 5px #EB313329',
//         borderRadius: '20px',
//         py: 1,
//         border: '2px solid #70707033',
//         fontSize: { xs: '0.6rem', md: '1rem' },
//       }}
//     >
//       <h4 style={{ color: 'gray', margin: '0 0' }}>{data.title}</h4>
//       <Gauge
//         width={isSmall ? 50 : 90}
//         height={isSmall ? 50 : 90}
//         value={data.percentage}
//         cornerRadius="50%"
//         sx={{
//           [`& .${gaugeClasses.valueText}`]: {
//             fontSize: { md: 20, xs: 8 },
//             fontWeight: 'bold',
//             transform: 'translate(0px, 0px)',
//             color: 'rgb(0 0 0 / 50%)',
//             fontFamily: "'Saira', sans-serif",
//           },
//           [`& .${gaugeClasses.valueArc}`]: {
//             fill: '#E59B00',
//           },
//         }}
//         text={({ value }) => `${value}%`}
//       />
//     </Card>
//   );
// };

export default MpsConstituencyPerformance;
