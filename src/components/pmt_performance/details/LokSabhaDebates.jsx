import ParticipationUiComponent from 'components/pmt_performance/ParticipationUiComponent'
import React from 'react'
import { fetchAttendanceDetailsData } from 'stores/redux/apiSlices/pmt_PerformanceSlice'
// import StateWiseCard from '../attandance/StateWiseCard'
import StateAttendance from 'components/attendence/StateAttendance'

function LokSabhaDebates() {
  return (
    <div>
        <ParticipationUiComponent
         title="Mps Participation in Lok Sabha Debates"
         stateLabel="State Wise Debates"
         partyLabel="Party Wise Debates"
         fetchAction={fetchAttendanceDetailsData}
         dataSelector={(state) => state.pmtPerformance}
         RenderCard={StateAttendance}
         />
    </div>
  )
}
export default LokSabhaDebates