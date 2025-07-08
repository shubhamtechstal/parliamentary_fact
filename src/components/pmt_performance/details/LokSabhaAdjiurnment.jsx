import { Box, Container } from '@mui/material';
import React, { useEffect } from 'react';
import AdjiurnmentUIComponent from '../AdjiurnmentUIComponent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdjurnmentsData } from 'stores/redux/apiSlices/pmt_PerformanceSlice';
import Loader from 'components/common/Loader';
let adjournmentData = [
  {
    adjourned_date: '2025-04-16',
    records: [
      {
        start_time: '18:27:00',
        end_time: '17:27:00',
        subject: 'fdjfdfdf',
        adjourned_date: '2025-04-16',
        session_name: 'Monsoon Session 2025',
        year_name: 'First Year',
        loksabha_name: '18th Loksabha',
      },
    ],
  },
  {
    adjourned_date: '2025-03-13',
    records: [
      {
        start_time: '17:53:00',
        end_time: '17:53:00',
        subject: 'tets',
        adjourned_date: '2025-03-13',
        session_name: 'Budget Session 2025',
        year_name: 'First Year',
        loksabha_name: '18th Loksabha',
      },
    ],
  },
];
// const agendaData = [
//   {
//     date: '25 NOV 2024',
//     items: [
//       {
//         adjournment: '1',
//         time: '11:15 AM',
//         subject:
//           'Local infrastructure, such as roads and water/wastewater networks, form Local Infrastructure, such as roads and water/wastewater networks, form Local infrastructure, such as roads and water/wastewater networks, form',
//       },
//       {
//         adjournment: '2',
//         time: '11:15 AM',
//         subject:
//           'Local infrastructure, such as roads and water/wastewater networks, form Local Infrastructure, such as roads and water/wastewater networks, form Local infrastructure, such as roads and water/wastewater networks, form',
//       },
//       {
//         adjournment: '3',
//         time: '11:15 AM',
//         subject:
//           'Local infrastructure, such as roads and water/wastewater networks, form Local Infrastructure, such as roads and water/wastewater networks, form Local infrastructure, such as roads and water/wastewater networks, form',
//       },
//     ],
//   },
//   {
//     date: '26 NOV 2024',
//     items: [
//       {
//         adjournment: '1',
//         time: '11:15 AM',
//         subject:
//           'Local infrastructure, such as roads and water/wastewater networks, form Local Infrastructure, such as roads and water/wastewater networks, form Local infrastructure, such as roads and water/wastewater networks, form',
//       },
//     ],
//   },
// ];
function LokSabhaAdjiurnment() {
  const dispatch = useDispatch();
  const { adjurnmentsData, adjurnmentLoading } = useSelector(
    (state) => state.pmtPerformance
  );
  useEffect(() => {
    dispatch(fetchAdjurnmentsData());
  }, [dispatch]);
  return (
    <Container>
      {adjurnmentLoading ? (
        <Loader loading position="absolute" />
      ) : (
        <AdjiurnmentUIComponent
          heroData={{
            title: 'Adjunment in Lok Sabha',
            cardTitle: 'Adjunment',
            subtitle: 'Till Now',
            type: 'adjournment', // 👈 Only this decides rendering now
          }}
          dataList={adjurnmentsData?.data}
          totalCount={adjurnmentsData?.total_adjourned_count || ''}
          sectionInfo={adjurnmentsData?.adjourned_info || []}
        />
      )}
    </Container>
  );
}

export default LokSabhaAdjiurnment;
