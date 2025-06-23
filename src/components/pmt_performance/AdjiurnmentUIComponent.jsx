import { Box, Container, Typography } from '@mui/material';
import Divider from 'components/common/Divider';
import GrayDot from 'components/common/GrayDot';
import FilterController from 'components/common/modals/FilterController';
import Text from 'components/common/Text';
import LineCharts from 'components/LineCharts';
import { attendance_details } from 'helpers/performanceConstants';
import { getDateInMonthNameFormate } from 'helpers/utills/utilityFunctions';

const AgendaList = ({ data = [] }) => {
  return (
    <Box maxWidth="lg" mx="auto" sx={{opacity:'0.7'}} px={2} py={4}>
      {data?.map((day, index) => (
        <Box key={index} mb={6}>
          <Typography
            variant="subtitle2"
            sx={{
              color: '#F15A29',
              fontWeight: '600',
              textTransform: 'uppercase',
              mb: 2,
            }}
          >
            {day.date}
          </Typography>

          {day.items.map((item, idx) => (
            <Box key={idx} mb={4}>
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, color: 'text.primary', mb: 0.5 }}
              >
                ADJOURNMENT - {item.adjournment}
                <Typography
                  component="span"
                  variant="caption"
                  sx={{ fontWeight: 400, color: 'text.secondary', ml: 2 }}
                >
                  TIME - {item.time}
                </Typography>
              </Typography>

              <Typography variant="body2" color="text.secondary">
                <Box
                  component="span"
                  sx={{ fontWeight: 600, textTransform: 'uppercase', mr: 1 }}
                >
                  Subject:
                </Box>
                {item.subject}
              </Typography>
            </Box>
          ))}

          {index < data.length - 1 && <Divider sx={{ mt: 3 }} />}
        </Box>
      ))}
    </Box>
  );
};

function AdjiurnmentUIComponent({
//   title = 'Adjunment In Lok sabha',
//   subtitle = 'Till 20 March 2024',
  dataList = [],
  heroData,
}) {
  return (
    <Container sx={{ fontFamily: 'Sora, sans-serif' }}>
      <Box
        sx={{
          display: { md: 'flex', xs: 'block' },
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: { xs: 'right', md: 'left' },
          pt: 4,
        }}
      >
        <Box>
          <Text
            sx={{
              fontSize: '1.3rem',
              color: '#434343',
              letterSpacing: '-0.3px',
              fontWeight: 500,
              textAlign: { xs: 'center', md: 'left' },
            }}
            font={'Sora'}
            text={`${heroData.title}`}
            // text={`${heroData.title}  In Lok sabha`}
          />
          <Text
            sx={{
              fontSize: '0.8rem',
              color: '#434343',
              mt: 1,
              fontWeight: 500,
              textAlign: { xs: 'center', md: 'left' },
            }}
            font={'Sora'}
            text={heroData.subtitle}
          />
        </Box>
        <Box
          sx={{
            position: { xs: 'absolute', md: 'static' },
            right: 11,
            top: 11,
          }}
        >
          <FilterController />
        </Box>
      </Box>
      {/* Overview Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          //   flexWrap: 'wrap',
          fontFamily: "'Saira', sans-serif",
        }}
      >
        <Box>
          <Box
            sx={{
              alignItems: 'center',
              mb: 1,
              borderBottom: '1px solid #ccc',
              p: 3,
              backgroundColor: '#fff',
              borderRadius: 4,
              minWidth: '150px',
            }}
          >
            <h3
              style={{
                fontSize: '32px',
                color: '#F15A29',
                opacity: '0.6',
                textAlign: 'center',
                margin: '0 0',
              }}
            >
             {heroData.numCount}
            </h3>
            <hr />
            <Typography variant="subtitle2" textAlign={'center'}> {heroData.cardTitle}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            padding: '1rem',
          }}
        >
          {attendance_details?.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '10px 10px',
                width: '14rem',
              }}
            >
              <GrayDot />
              <Box>
                <Text
                  sx={{
                    color: '#00000080',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                  }}
                  text={`${item?.title}`}
                />
                <Box
                  sx={{
                    display: 'flex',
                    gap: '5px',
                    alignItems: 'end',
                    marginTop: '0.3rem',
                  }}
                >
                  <Text
                    sx={{
                      // color: '#434343',
                      fontSize: '1rem',
                      fontWeight: 600,
                      lineHeight: 1,
                    }}
                    text={`${item?.count ?? ''}`}
                  />
                  {item?.date && (
                    <Text
                      sx={{
                        color: '#00000080',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        textWrap: 'nowrap',
                      }}
                      text={getDateInMonthNameFormate(item?.date)}
                    />
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box>
          <LineCharts
            data={[10, 4, 6, 5, 14, 15]}
            labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
            width={400}
          />
        </Box>
      </Box>
      <Divider sx={{ my: 3 }} />
      <AgendaList data={dataList} />
    </Container>
  );
}

export default AdjiurnmentUIComponent;
