import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import AdjiurnmentUIComponent from '../AdjiurnmentUIComponent';
import { fetchInteruptionData } from 'stores/redux/apiSlices/pmt_PerformanceSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/common/Loader';

function LokSabhaInTheWell() {
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
            title: 'Lok Sabha IN THE WELL',
            cardTitle: 'IN THE WELL',
            subtitle: 'Till Now',
            type: 'in_the_well',
          }}
          showListAsCard={true}
          dataList={interuptionData?.data?.in_the_wall}
          totalCount={interuptionData?.total_in_the_wall_count || ''}
          sectionInfo={interuptionData?.in_the_wall_info || []}
        />
      )}
    </Container>
  );
}

export default LokSabhaInTheWell;
