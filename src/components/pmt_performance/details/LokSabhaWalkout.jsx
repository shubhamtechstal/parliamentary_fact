import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import AdjiurnmentUIComponent from '../AdjiurnmentUIComponent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchwalkoutData } from 'stores/redux/apiSlices/pmt_PerformanceSlice';
import Loader from 'components/common/Loader';

function LokSabhaWalkout() {
  const dispatch = useDispatch();
  const { walkoutData, walkoutLoading } = useSelector(
    (state) => state.pmtPerformance
  );
  useEffect(() => {
    dispatch(fetchwalkoutData());
  }, [dispatch]);
  console.log('chartDataadjurnmentsData', walkoutData)

  return (
    <Container>
      {walkoutLoading ? (
        <Loader loading position="absolute" />
      ) : (
        <AdjiurnmentUIComponent
          heroData={{
            title: 'Walkout in Lok Sabha',
            cardTitle: 'Walkout',
            subtitle: 'Till Now',
            type: 'walkout', // 👈 Only this decides rendering now
          }}
          dataList={walkoutData?.data}
          totalCount={walkoutData?.total_walkout_count}
          sectionInfo={walkoutData?.walkout_info || []}
          chartData={walkoutData?.session_wise_walkout_percentage || []}
        />
      )}
    </Container>
  );
}

export default LokSabhaWalkout;
