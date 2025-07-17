import { Box } from '@mui/material';
import AdvertiseSection from 'components/addLayout/HorizontalAdvertiseSection';
import GrayButton from 'components/common/GrayButton';
// import GrayDot from 'components/common/GrayDot';
// import ProgressMeter from 'components/common/ProgressMeter';
// import Text from 'components/common/Text';
import MpsTopPerformanceCard from 'components/Mps_performance/cards/MpsTopPerformanceCard';
// import { attendance_details } from 'helpers/performanceConstants';
// import { getDateInMonthNameFormate } from 'helpers/utills/utilityFunctions';

function MpsPmtPerformance({ parliament_performance }) {
  return (
    <Box
      sx={{
        py: { md: '2rem', xs: '1rem' },
      }}
    >
      {parliament_performance?.map((section, i) => {
        const { title, data = {} } = section ?? {};

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
            <Box
              key={i}
              py={5}
              maxWidth={{ md: '80%', sx: '100%' }}
              margin="auto"
            >
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
              {Object.keys(data).length < 1 ? (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '40vh',
                  }}
                >
                  <h1> Not Participated in {title} </h1>
                </div>
              ) : (
                <>
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
                      <p style={{ margin: '0 0 10px 10px' }}>
                        National Ranking
                      </p>
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
                        <MpsTopPerformanceCard
                          cardCatagory={title}
                          mp={mpStateDomy}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      justifyContent: 'right',
                      display: 'flex',
                      width: '100%',
                    }}
                  >
                    <GrayButton bgColor={'#E39A00'}> View More </GrayButton>
                  </Box>
                </>
              )}
            </Box>
            <AdvertiseSection />
          </>
        );
      })}
    </Box>
  );
}

export default MpsPmtPerformance;
