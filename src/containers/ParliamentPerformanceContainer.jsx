import { Box, Chip, CircularProgress } from '@mui/material';
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
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPerformanceData } from 'stores/redux/apiSlices/pmt_PerformanceSlice';

const BottomRightChip = ({chipLabal}) => {
  return (
    <Chip
      label={chipLabal ?? 'MPs Participation in Lok Sabha Attendance'}
      Filled
      sx={{
        marginTop: '2rem',
        color: 'white',
        background: 'gray',
        fontWeight: '500',
      }}
    />
  );
};
const AdvertiseSection = () => {
  return (
    <>
      <Box
        sx={{
          background: 'white',
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          padding: '1rem',
          borderTop: '1px solid #00000080',
          borderBottom: '1px solid #00000080',
        }}
      >
        <img src="/advertise.jpg" />
      </Box>
      <Box
        sx={{
          background: 'white',
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'center',
          padding: '1rem',
          borderTop: '1px solid #00000080',
          borderBottom: '1px solid #00000080',
        }}
      >
        <img style={{ width: '100%' }} src="/advertise.jpg" />
      </Box>
    </>
  );
};
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
                  padding: '5px 10px',
                  borderRadius: '1rem',
                  backgroundColor: '#fff',
                  // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
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
                      fontSize: '0.8rem',
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
                  fontSize: '14px',
                  fontWeight: 600,
                  marginTop: '10px',
                }}
              />
            </div>
          );
        })}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <BottomRightChip />
      </Box>
    </Box>
  );
};

function ParliamentPerformanceContainer() {
  const dispatch = useDispatch();
  const { attendanceDetails, questionsData,privateBillCount,govtBillCount, loksabhaName, pageData, loading, error } =
    useSelector((state) => state?.pmtPerformance);
  useEffect(() => {
    dispatch(fetchPerformanceData());
  }, [dispatch]);
console.log('questions_data', questionsData, privateBillCount,govtBillCount)
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
    <Box
      sx={{
        // padding: '2rem 10rem',
        color: '#00000080',
        backgroundColor: '#f4f6f9',
        fontFamily: '"Sora", sans-serif',
        scrollbarColor: 'transparent transparent',
      }}
    >
      <Box
        className="performanceSection"
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '1rem',
          // padding: { md: '2rem 10rem', xs: '2rem  1rem 10px' },
          overflowX: 'auto',
        }}
      >
        {performace_chipList?.map((title, i) => {
          return <Chip key={i} label={title} variant="outlined" />;
        })}
      </Box>
      <Box
        className="performanceSection"
        sx={{
          display: 'flex',
          gap: { xs: '0.8rem', md: '2rem' },
          flexDirection: { xs: 'column', md: 'row' },
          textAlign: { xs: 'center', md: 'left' },
          justifyContent: 'space-between',
          // marginBottom: '20px',
          // padding: { md: '0rem 10rem', xs: '1rem' },
        }}
      >
        <Text
          sx={{
            fontSize: { xs: '1rem', md: '1.5rem' },
            letterSpacing: '-0.3px',
            fontWeight: 600,
          }}
          font={'Sora'}
          text={`Parliament Performance ${loksabhaName}`}
        />
        <Text
          sx={{
            fontSize: { xs: '1rem', md: '1.5rem' },
            letterSpacing: '-0.3px',
            fontWeight: 400,
            display: { xs: 'block', md: 'none' },
          }}
          font={'Sora'}
          text={'Lok Sabha Productivity'}
        />
        <Text
          sx={{
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
          }}
        >
          <span style={{ fontWeight: '600' }}>Till Now | </span> 23 September
          2020
        </Text>
        <Box
          sx={{
            color: '#00000080',
            borderBottom: '1px solid #D3D3D3',
            display: { md: 'flex', xs: 'none' },
            gap: '5px',
            alignItems: 'center',
            padding: '0 30px 5px',
          }}
        >
          <div
            style={{
              padding: '1px 7px',
              border: '1px solid #00000080',
              borderRadius: '50%',
              fontSize: '10px',
              height: '18px',
              width: '18px',
            }}
          >
            {' '}
            i
          </div>{' '}
          Read before check performance
        </Box>
      </Box>
      <LS_productivity
        productivity_schedule={pageData?.schedule_data ?? []}
        productivity_details={pageData?.productivity_details}
        mobCardsData={pageData?.other_performing_data ?? []}
        govtBillCount={govtBillCount}
        pageData={pageData}
        privateBillCount={privateBillCount}
        BottomRightChip={BottomRightChip}
      />
      <Productivity_bottomCards
        cardData={pageData?.other_performing_data}
        BottomRightChip={BottomRightChip}
      />
      {/* <BottomRightChip /> */}
      <AdvertiseSection />
      <LS_attendance
        attendance_details={attendanceDetails}
        pageData={pageData}
        BottomRightChip={BottomRightChip}
        className="performanceSection"
      />
      <AdvertiseSection />
      <LS_QuestionsComponent
        questionsListData={questionsListData}
        questionsData={questionsData}
        pageData={pageData}
        BottomRightChip={BottomRightChip}
      />
      <AdvertiseSection />
      <Debates_In_LS
        debateListData={debateListData}
        BottomRightChip={BottomRightChip}
        questionsData={questionsData}
      />
      <AdvertiseSection />
      <MpFundSection
        MpFundSection={MpFundsectionData}
        mpsFundData={pageData?.mps_fund_data}
        BottomRightChip={BottomRightChip}
      />
    </Box>
  );
}

export default ParliamentPerformanceContainer;
