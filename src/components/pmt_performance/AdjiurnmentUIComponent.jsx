import { Box, Card, Container, Typography } from '@mui/material';
import MUIBarChart from 'components/common/charts/MUIBarChart';
import Divider from 'components/common/Divider';
import GrayButton from 'components/common/GrayButton';
import GrayDot from 'components/common/GrayDot';
import FilterController from 'components/common/modals/FilterController';
import Text from 'components/common/Text';
// import LineCharts from 'components/LineCharts';
// import { attendance_details } from 'helpers/performanceConstants';
import { getDateInMonthNameFormate } from 'helpers/utills/utilityFunctions';
import { useState } from 'react';

export const AgendaList = ({
  data = [],
  type = 'adjournment',
  showListAsCard,
}) => {
  const [visibleCount, setVisibleCount] = useState(5); // initial items to show

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const getDateKey = (day) => {
    return (
      day?.adjourned_date ||
      day?.walkout_date ||
      day?.performing_date ||
      day?.date ||
      ''
    );
  };

  const renderByType = (item, idx) => {
    switch (type) {
      case 'adjournment':
        return (
          <>
            <Typography
              variant="body2"
              fontWeight={500}
              color="text.primary"
              mb={0.5}
            >
              ADJOURNMENT - {idx + 1}
              <Typography
                component="span"
                variant="caption"
                color="text.secondary"
                ml={2}
              >
                TIME - {item.start_time || 'N/A'}
              </Typography>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Subject:</strong> {item.subject || '—'}
            </Typography>
          </>
        );

      case 'walkout':
        return (
          <>
            <Typography
              variant="body2"
              fontWeight={500}
              color="text.primary"
              mb={0.5}
            >
              WALKOUT - {idx + 1}
              <Typography
                component="span"
                variant="caption"
                color="text.secondary"
                ml={2}
              >
                TIME - {item.time || 'N/A'}
              </Typography>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>MP:</strong> {item.mp_name || '—'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Subject:</strong> {item.subject || '—'}
            </Typography>
          </>
        );

      case 'interruptions':
        return (
          <Card
            variant="outlined"
            sx={{
              mb: 2,
              p: 2,
              backgroundColor: '#f9f9f9',
              transition: '0.3s',
              '&:hover': { boxShadow: 3 },
            }}
          >
            <Typography variant="h6" color="#F15A29" gutterBottom>
              🔇 Interruptions: {item?.interruptions?.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              🗓️ <strong>Session:</strong> {item.session_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              📅 <strong>Year:</strong> {item.year_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              🏛️ <strong>Loksabha:</strong> {item.loksabha_name}
            </Typography>
          </Card>
        );

      case 'quoram_bell':
        return (
          <>
            <Card
              variant="outlined"
              sx={{
                mb: 2,
                p: 2,
                backgroundColor: '#f9f9f9',
              }}
            >
              <Typography variant="h6" color="#F15A29" gutterBottom>
                🔔 Quoram Bell: {item.coram_bell}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                🗓️ <strong>Session:</strong> {item.session_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                📅 <strong>Year:</strong> {item.year_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                🏛️ <strong>Loksabha:</strong> {item.loksabha_name}
              </Typography>
            </Card>
          </>
        );

      case 'not_recorded':
        return (
          <Card
            variant="outlined"
            sx={{
              mb: 2,
              p: 2,
              backgroundColor: '#f9f9f9',
              transition: '0.3s',
              '&:hover': { boxShadow: 3 },
            }}
          >
            <Typography variant="h6" color="#F15A29" gutterBottom>
              📋 Not Recorded: {item?.not_recorded?.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              🗓️ <strong>Session:</strong> {item.session_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              📅 <strong>Year:</strong> {item.year_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              🏛️ <strong>Loksabha:</strong> {item.loksabha_name}
            </Typography>
          </Card>
        );

      case 'in_the_well':
        return (
          <Card
            variant="outlined"
            sx={{
              mb: 2,
              p: 2,
              backgroundColor: '#f9f9f9',
              transition: '0.3s',
              '&:hover': { boxShadow: 3 },
            }}
          >
            <Typography variant="h6" color="#F15A29" gutterBottom>
              🧱 In The Well: {item?.in_the_wall?.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              🗓️ <strong>Session:</strong> {item?.session_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              📅 <strong>Year:</strong> {item?.year_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              🏛️ <strong>Loksabha:</strong> {item?.loksabha_name}
            </Typography>
          </Card>
        );

      default:
        return (
          <Typography color="text.secondary">No content available.</Typography>
        );
    }
  };

  // Get only visible items
  const visibleItems = data.slice(0, visibleCount);

  return (
    <Box maxWidth="lg" mx="auto" sx={{ opacity: 0.7 }} px={0} py={4}>
      {visibleItems?.map((day, index) => (
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
            {getDateKey(day)}
          </Typography>
          <Box
            sx={{
              display: showListAsCard ? 'flex' : 'block',
              flexWrap: 'wrap',
              gap: 3,
            }}
          >
            {day?.records?.map((item, idx) => (
              <Box key={idx}>{renderByType(item, idx)}</Box>
            ))}
          </Box>
          {index < visibleItems.length - 1 && <Divider sx={{ mt: 3 }} />}
        </Box>
      ))}
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          gap: { md: 5, xs: 2 },
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Typography variant={'h6'}>
          Total MPs: {data.length} (Showing: {visibleItems.length})
        </Typography>

        {visibleCount < data.length && (
          <GrayButton
            variant="contained"
            onClick={handleLoadMore}
            sx={{
              backgroundColor: '#F15A29',
              color: '#fff',
              '&:hover': { backgroundColor: '#d84b1a' },
            }}
          >
            Load More
          </GrayButton>
        )}
      </Box>
    </Box>
  );
};

function AdjiurnmentUIComponent({
  dataList = [],
  heroData,
  sectionInfo = [],
  totalCount = '0',
  showListAsCard = false,
  chartData,
}) {
  // const lineChartData = chartData?.map(item => Number(item.percentage.replace("%", ""))) || [10, 4, 6, 5, 14, 14, 15];
  // const lineChartLabels = chartData?.map(item => item.session_name) || [10, 4, 6, 5, 14, 14, 15];

  return (
    <Container sx={{ fontFamily: 'Sora, sans-serif' }}>
      <Box
        sx={{
          display: { md: 'flex', xs: 'block' },
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: { xs: 'right', md: 'left' },
          pt: 4,
          mb: { md: '', xs: '1.5rem' },
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
          justifyContent: { md: 'space-between', xs: 'center' },
          alignItems: 'center',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
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
              {totalCount}
            </h3>
            <hr />
            <Typography variant="subtitle2" textAlign={'center'}>
              {' '}
              {heroData.cardTitle}
            </Typography>
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
          {sectionInfo?.map((item, index) => (
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
        <Box display={{ md: 'none', xs: 'block' }}>
        <MUIBarChart data={chartData} barName={heroData.cardTitle} width={300} />
          {/* <LineCharts
            data={lineChartData || [10, 4, 6, 5, 14, 15]}
            labels={lineChartLabels || ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
            width={300}
          /> */}
        </Box>
        <Box display={{ xs: 'none', md: 'block' }}>
        <MUIBarChart data={chartData} barName={heroData.cardTitle} width={400} />
          {/* <LineCharts
            data={lineChartData || [10, 4, 6, 5, 14, 15]}
            labels={lineChartLabels || ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
            width={400}
          /> */}
        </Box>
      </Box>
      <Divider sx={{ my: 3 }} />
      <AgendaList
        data={dataList ?? []}
        type={heroData?.type}
        showListAsCard={showListAsCard}
      />
    </Container>
  );
}

export default AdjiurnmentUIComponent;
