import ParticipationUiComponent from 'components/pmt_performance/ParticipationUiComponent'
import { fetchAttendanceDetailsData } from 'stores/redux/apiSlices/pmt_PerformanceSlice'

function MpsParticipationinQuestions() {
  return (
    <div>
        <ParticipationUiComponent
         title="Mps Participation in Lok Sabha Questions"
         pageName="Questions"
         fetchAction={fetchAttendanceDetailsData}
         dataSelector={(state) => state.pmtPerformance}
         />
    </div>
  )
}

export default MpsParticipationinQuestions