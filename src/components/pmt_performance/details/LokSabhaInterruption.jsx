import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import AdjiurnmentUIComponent from '../AdjiurnmentUIComponent';
import { fetchInteruptionData } from 'stores/redux/apiSlices/pmt_PerformanceSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/common/Loader';

function LokSabhaInterruption() {
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
            title: 'Lok Sabha Interruptions',
            cardTitle: 'Interruptions',
            subtitle: 'Till Now',
            type: 'interruptions',
          }}
          dataList={interuptionData?.data?.interruptions || []}
          showListAsCard={true}
          totalCount={interuptionData?.total_interruptions_count || ''}
          sectionInfo={interuptionData?.interruptions_info || []}
        />
      )}
    </Container>
  );
}

export default LokSabhaInterruption;
