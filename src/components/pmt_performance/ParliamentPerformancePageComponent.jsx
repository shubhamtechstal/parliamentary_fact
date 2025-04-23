import { Box, Chip, CircularProgress } from '@mui/material';
import AdvertiseSection from 'components/addLayout/HorizontalAdvertiseSection';
import Text from 'components/common/Text';
import Debates_In_LS from 'components/pmt_performance/Debates_In_LS';
import LS_attendance from 'components/pmt_performance/LS_attendance';
import LS_productivity from 'components/pmt_performance/LS_productivity';
import LS_QuestionsComponent from 'components/pmt_performance/LS_questions';
import MpFundSection from 'components/pmt_performance/MpFundSection';
import {
  debateListData,
  MpFundsectionData,
  performace_chipList,
  productivity_bottomCardsdata,
  // productivity_schedule,
  questionsListData,
} from 'helpers/performanceConstants';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPerformanceData } from 'stores/redux/apiSlices/pmt_PerformanceSlice';
import PerformanceChips from './PerformanceChips';

const Productivity_bottomCards = ({
  cardData = productivity_bottomCardsdata,
  BottomRightChip,
}) => {
  return (
    <Box
      className="performanceSection"
      sx={{
        position: 'relative',
        // padding: '2rem 10rem',
        display: { xs: 'none', md: 'block' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '3rem',
          gap: '1rem',
          overflow: 'auto',
        }}
      >
        {cardData?.map((data, i) => {
          return (
            <div>
              <Box
                sx={{
                  padding: '10px',
                  borderRadius: '1rem',
                  backgroundColor: '#fff',
                  // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'start',
                  alignItems: 'left',
                  minWidth: '180px',
                }}
              >
                <img
                  src="Assets/icons/statueImg.png"
                  alt="statueImg"
                  height={50}
                />
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'left',
                  }}
                >
                  <Text
                    text={data.title}
                    sx={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                    }}
                  />
                  <Text
                    text={data.value}
                    sx={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                    }}
                  />
                </Box>
              </Box>
              <Text
                text={'Know More >>'}
                sx={{
                  // color: '#FF936F',
                  fontSize: '10px',
                  textAlign: 'center',
                  fontWeight: 600,
                  marginTop: '10px',
                }}
              />
            </div>
          );
        })}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <BottomRightChip
          chipLabal={'MPs Participation in Lok Sabha Productivity'}
        />
      </Box>
    </Box>
  );
};

function ParliamentPerformancePageComponent(props) {
  const {
    handleSectionDetailClick,
    attendanceDetails,
    questionsData,
    privateBillCount,
    govtBillCount,
    loksabhaName,
    pageData,
    loading,
  } = props;
  const BottomRightChip = ({ chipLabal, sectionDetailName }) => {
    return (
      <Chip
        label={chipLabal ?? 'MPs Participation in Lok Sabha Attendance'}
        Filled
        onClick={() =>
          sectionDetailName
            ? handleSectionDetailClick(sectionDetailName)
            : () => {}
        }
        sx={{
          marginTop: '2rem',
          color: 'white',
          background: 'gray',
          fontWeight: '500',
        }}
      />
    );
  };

  return loading ? (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <Box>
      <PerformanceChips sections={performace_chipList} />
      <div id="Lok_Sabha_Productivity">
        <LS_productivity
          productivity_schedule={pageData?.schedule_data ?? []}
          productivity_details={pageData?.productivity_details}
          mobCardsData={pageData?.other_performing_data ?? []}
          govtBillCount={govtBillCount}
          pageData={pageData}
          privateBillCount={privateBillCount}
          BottomRightChip={BottomRightChip}
          loksabhaName={loksabhaName}
        />
        <Productivity_bottomCards
          cardData={pageData?.other_performing_data}
          BottomRightChip={BottomRightChip}
        />
      </div>
      {/* <BottomRightChip /> */}
      <AdvertiseSection />
      <div id="Lok_Sabha_Attandance">
        <LS_attendance
          attendance_details={attendanceDetails}
          pageData={pageData}
          BottomRightChip={BottomRightChip}
          className="performanceSection"
        />
      </div>
      <AdvertiseSection />
      <div id="Lok_Sabha_Question">
        <LS_QuestionsComponent
          questionsListData={questionsListData}
          questionsData={questionsData}
          pageData={pageData}
          BottomRightChip={BottomRightChip}
        />
      </div>
      <AdvertiseSection />
      <div id="Lok_Sabha_Debates">
        <Debates_In_LS
          debateListData={debateListData}
          BottomRightChip={BottomRightChip}
          questionsData={questionsData}
        />
      </div>
      <AdvertiseSection />
      <div id="Lok_Sabha_Private_Member_Bills">
        <MpFundSection
          MpFundSection={MpFundsectionData}
          mpsFundData={pageData?.mps_fund_data}
          BottomRightChip={BottomRightChip}
        />
      </div>
    </Box>
  );
}

export default ParliamentPerformancePageComponent;
