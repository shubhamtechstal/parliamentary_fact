import { Box } from '@mui/material';
import BigNewCards from 'components/common/cards/BigNewCards';
import BottomSubHeadingCards from 'components/common/cards/BottomSubHeadingCards';
import CenterBackgroudNewsCard from 'components/common/cards/CenterBackgroundNewsCard';
import SideNewCards from 'components/common/cards/SideNewCards';
import Text from 'components/common/Text';
import React from 'react';
import { dashboardNewsApiAction } from 'stores/redux/apiSlices/DashboardNewsSlice/dashboardNewsApiSlice';

function NewsSectionHome() {
  const { data: dashboardNewsDataApi } =
    dashboardNewsApiAction.getDashboardNews({ limit: 30 });
  const { data: parliamentarianNews } = dashboardNewsApiAction.getDashboardNews(
    {
      category: 'Parliamentarian News',
    }
  );
  return (
    <div>
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
            {dashboardNewsDataApi?.reviews?.slice(1, 3).map((data, ) => (
              <Box key={data.id}>
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
    </div>
  );
}

export default NewsSectionHome;
