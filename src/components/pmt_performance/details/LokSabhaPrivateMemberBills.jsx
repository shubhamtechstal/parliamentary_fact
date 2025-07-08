import ParticipationUiComponent from 'components/pmt_performance/ParticipationUiComponent'
import { fetchAttendanceDetailsData } from 'stores/redux/apiSlices/pmt_PerformanceSlice'
// import StateWiseCard from '../attandance/StateWiseCard'

function LokSabhaPrivateMemberBills() {
  return (
    <div>
        <ParticipationUiComponent
         title="Mps Participation in Lok Sabha Private Member Bills"
         pageName="Private Member Bills"
         fetchAction={fetchAttendanceDetailsData}
         dataSelector={(state) => state.pmtPerformance}
         />
    </div>
  )
}
export default LokSabhaPrivateMemberBills