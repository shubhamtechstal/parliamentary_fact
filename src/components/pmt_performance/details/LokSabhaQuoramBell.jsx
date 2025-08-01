import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import AdjiurnmentUIComponent from '../AdjiurnmentUIComponent';
import { fetchInteruptionData } from 'stores/redux/apiSlices/pmt_PerformanceSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/common/Loader';

function LokSabhaQuoramBell() {
  const dispatch = useDispatch();
  const { interuptionData, interuptionLoading } = useSelector(
    (state) => state.pmtPerformance
  );
  useEffect(() => {
    dispatch(fetchInteruptionData());
  }, [dispatch]);
  return (
    <Container>
      {interuptionLoading ? (
        <Loader loading position="absolute" />
      ) : (
        <AdjiurnmentUIComponent
          heroData={{
            title: 'Lok Sabha Quoram Bell',
            cardTitle: 'Quoram Bell',
            subtitle: 'Till Now',
            type: 'quoram_bell',
          }}
          showListAsCard={true}
          dataList={interuptionData?.data?.coram_bell}
          totalCount={interuptionData?.total_coram_bell_count}
          sectionInfo={interuptionData?.coram_bell_info || []}
          chartData={interuptionData?.coram_bell_sessionwise_data || []}
        />
      )}
    </Container>
  );
}

export default LokSabhaQuoramBell;
