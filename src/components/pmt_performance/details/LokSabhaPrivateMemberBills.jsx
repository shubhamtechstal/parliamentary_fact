import ParticipationUiComponent from 'components/pmt_performance/ParticipationUiComponent';
import { fetchAttendanceDetailsData } from 'stores/redux/apiSlices/pmt_PerformanceSlice';
// import StateWiseCard from '../attandance/StateWiseCard'

function LokSabhaPrivateMemberBills() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '40vh',
      }}
    >
      <h1> Coming Soon </h1>
      {/* Commenting this becouse  api is pending for this section */}
      {/* <ParticipationUiComponent
         title="Mps Participation in Lok Sabha Private Member Bills"
         pageName="Private Member Bills"
         fetchAction={fetchAttendanceDetailsData}
         dataSelector={(state) => state.pmtPerformance}
         /> */}
    </div>
  );
}
export default LokSabhaPrivateMemberBills;
