import { Container } from '@mui/material';
import Divider from 'components/common/Divider';
import ListTableComponent from 'components/pmt_performance/ListTableComponent';
import LS_attendance from 'components/pmt_performance/pmt_prfrmc_home/LS_attendance';
import { attendance_details } from 'helpers/performanceConstants';
const ministries = [
  {
    rank: '001',
    name: 'Ayurveda, Yoga and Naturopathy, Unani, Siddha and Homoeopathy (AYUSH)',
    percentage: '85%',
    questions: '80 / 80',
  },
  {
    rank: '002',
    name: 'Ayurveda, Yoga and Naturopathy, Unani, Siddha and Homoeopathy (AYUSH)',
    percentage: '85%',
    questions: '80 / 80',
  },
  {
    rank: '003',
    name: 'Ayurveda, Yoga and Naturopathy, Unani, Siddha and Homoeopathy (AYUSH)',
    percentage: '85%',
    questions: '80 / 80',
  },
  {
    rank: '004',
    name: 'Ayurveda, Yoga and Naturopathy, Unani, Siddha and Homoeopathy (AYUSH)',
    percentage: '85%',
    questions: '80 / 80',
  },
];
const headers = {
  cal1: 'Ranking',
  cal2: 'Ministry Name',
  cal3: 'Questions %',
  cal4: 'Questions Number',
};
function LokSabhaQuestionToMinistery() {
  return (
    <Container>
        <LS_attendance attendance_details={attendance_details} percentageValue={'73.02%'} />
        <Divider sx={{ my: 2 }} />
      <ListTableComponent headers={headers} ministries={ministries} />
    </Container>
  );
}

export default LokSabhaQuestionToMinistery;
