import ParticipationUiComponent from 'components/pmt_performance/ParticipationUiComponent'
import { fetchAttendanceDetailsData } from 'stores/redux/apiSlices/pmt_PerformanceSlice';

function LokSabhaDebates() {
  return (
    <div>
        <ParticipationUiComponent
         title="Mps Participation in Lok Sabha Debates"
         pageName={"Debates"}
         fetchAction={fetchAttendanceDetailsData}
         dataSelector={(state) => state.pmtPerformance}
         />
    </div>
  )
}
export default LokSabhaDebates