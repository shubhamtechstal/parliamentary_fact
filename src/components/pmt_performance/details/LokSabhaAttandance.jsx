// import React from 'react';
import ParticipationUiComponent from '../ParticipationUiComponent';
import { fetchAttendanceDetailsData } from 'stores/redux/apiSlices/pmt_PerformanceSlice';

function LokSabhaAttandance() {
  return (
    <div>
      <ParticipationUiComponent
        title="Mps Participation in Lok Sabha Attendance"
        pageName={'Attendance'}
        fetchAction={fetchAttendanceDetailsData}
        dataSelector={(state) => state.pmtPerformance}
      />
    </div>
  );
}

export default LokSabhaAttandance;
