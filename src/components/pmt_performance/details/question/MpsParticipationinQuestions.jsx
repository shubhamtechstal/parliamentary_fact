import ParticipationUiComponent from 'components/pmt_performance/ParticipationUiComponent'
import React from 'react'
import { fetchAttendanceDetailsData } from 'stores/redux/apiSlices/pmt_PerformanceSlice'
import StateWiseCard from '../attandance/StateWiseCard'
import StateAttendance from 'components/attendence/StateAttendance'

function MpsParticipationinQuestions() {
  return (
    <div>
        <ParticipationUiComponent
         title="Mps Participation in Lok Sabha Questions"
         stateLabel="State Wise Questions"
         partyLabel="Party Wise Questions"
         fetchAction={fetchAttendanceDetailsData}
         dataSelector={(state) => state.pmtPerformance}
         RenderCard={StateAttendance}
         />
    </div>
  )
}

export default MpsParticipationinQuestions