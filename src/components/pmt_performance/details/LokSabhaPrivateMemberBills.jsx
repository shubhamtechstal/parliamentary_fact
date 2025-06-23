import ParticipationUiComponent from 'components/pmt_performance/ParticipationUiComponent'
import React from 'react'
import { fetchAttendanceDetailsData } from 'stores/redux/apiSlices/pmt_PerformanceSlice'
// import StateWiseCard from '../attandance/StateWiseCard'
import StateAttendance from 'components/attendence/StateAttendance'

function LokSabhaPrivateMemberBills() {
  return (
    <div>
        <ParticipationUiComponent
         title="Mps Participation in Lok Sabha Private Member Bills"
         stateLabel="State Wise Private Member Bills"
         partyLabel="Party Wise Private Member Bills"
         fetchAction={fetchAttendanceDetailsData}
         dataSelector={(state) => state.pmtPerformance}
         RenderCard={StateAttendance}
         />
    </div>
  )
}
export default LokSabhaPrivateMemberBills