import { Container } from '@mui/material';
import React from 'react'
import AdjiurnmentUIComponent from '../AdjiurnmentUIComponent';

const agendaData = [
    {
      date: '25 NOV 2024',
      items: [
        {
          adjournment: '1',
          time: '11:15 AM',
          subject:
            'Local infrastructure, such as roads and water/wastewater networks, form Local Infrastructure, such as roads and water/wastewater networks, form Local infrastructure, such as roads and water/wastewater networks, form',
        },
        {
          adjournment: '2',
          time: '11:15 AM',
          subject:
            'Local infrastructure, such as roads and water/wastewater networks, form Local Infrastructure, such as roads and water/wastewater networks, form Local infrastructure, such as roads and water/wastewater networks, form',
        },
        {
          adjournment: '3',
          time: '11:15 AM',
          subject:
            'Local infrastructure, such as roads and water/wastewater networks, form Local Infrastructure, such as roads and water/wastewater networks, form Local infrastructure, such as roads and water/wastewater networks, form',
        },
      ],
    },
    {
      date: '26 NOV 2024',
      items: [
        {
          adjournment: '1',
          time: '11:15 AM',
          subject:
            'Local infrastructure, such as roads and water/wastewater networks, form Local Infrastructure, such as roads and water/wastewater networks, form Local infrastructure, such as roads and water/wastewater networks, form',
        },
      ],
    },
  ];
function LokSabhaInterruption() {
  return (
    <Container>
       <AdjiurnmentUIComponent
        heroData={{
          title: 'Lok Sabha Interruption',
          cardTitle: 'Interruption',
          subtitle: 'Till 20 March 2024',
          numCount: '490',
        }}
        dataList={agendaData}
      />
    </Container>
  )
}

export default LokSabhaInterruption