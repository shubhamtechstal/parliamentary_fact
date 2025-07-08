import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import AdjiurnmentUIComponent from '../AdjiurnmentUIComponent';
import { fetchInteruptionData } from 'stores/redux/apiSlices/pmt_PerformanceSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/common/Loader';

function LokSabhaNotRecorded() {
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
            title: 'Lok Sabha Not Recorded',
            cardTitle: 'Not Recorded',
            subtitle: 'Till Now',
            type: 'not_recorded',
          }}
          showListAsCard={true}
          dataList={interuptionData?.data?.not_recorded || []}
          totalCount={interuptionData?.total_not_recorded_count || ''}
          sectionInfo={interuptionData?.not_recorded_info || []}
        />
      )}
    </Container>
  );
}

export default LokSabhaNotRecorded;
