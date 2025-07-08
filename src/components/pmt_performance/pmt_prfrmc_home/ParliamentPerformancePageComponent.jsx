import { Box, Chip } from '@mui/material';
import AdvertiseSection from 'components/addLayout/HorizontalAdvertiseSection';
import Loader from 'components/common/Loader';
import Text from 'components/common/Text';
import Debates_In_LS from 'components/pmt_performance/pmt_prfrmc_home/Debates_In_LS';
import LS_attendance from 'components/pmt_performance/pmt_prfrmc_home/LS_attendance';
import LS_productivity from 'components/pmt_performance/pmt_prfrmc_home/LS_productivity';
import LS_QuestionsComponent from 'components/pmt_performance/pmt_prfrmc_home/LS_questions';
import MpFundSection from 'components/pmt_performance/pmt_prfrmc_home/MpFundSection';
import {
  debateListData,
  MpFundsectionData,
  // performace_chipList,
  productivity_bottomCardsdata,
  // productivity_schedule,
  questionsListData,
} from 'helpers/performanceConstants';
import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { fetchPerformanceData } from 'stores/redux/apiSlices/pmt_PerformanceSlice';
// import PerformanceChips from './PerformanceChips';

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
            <Link to={`/parliament-performance/lok-sabha-performance/lok-sabha-${data?.title.replaceAll(" ", "-").toLowerCase()}`} key={i}>
              <Box
                sx={{
                  padding: '10px',
                  borderRadius: '1rem',
                  backgroundColor: '#fff',
                  // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'start',
                  alignItems: 'center',
                  minWidth: '180px',
                }}
              >
                <img
                  src={data?.image ?? "/Assets/icons/statueImg.png"}
                  alt="statueImg"
                  height={30}
                  width={30}
                />
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'left',
                    ml: '10px',
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
            </Link>
          );
        })}
      </Box>
      {!window.location.pathname.includes('lok-sabha-productivity') && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <BottomRightChip
            sectionDetailName={'lok-sabha-productivity'}
            chipLabal={'MPs Participation in Lok Sabha Productivity'}
          />
        </Box>
      )}
    </Box>
  );
};

function ParliamentPerformancePageComponent(props) {
  const {
    // handleSectionDetailClick,
    attendanceDetails,
    questionsData,
    privateBillCount,
    govtBillCount,
    loksabhaName,
    pageData,
    loading,
  } = props;
  const navigate = useNavigate();
  const BottomRightChip = ({ chipLabal, sectionDetailName }) => {
    return (
      <Chip
        label={chipLabal ?? 'MPs Participation in Lok Sabha Attendance'}
        Filled
        onClick={() =>
          sectionDetailName
            ? navigate(
                `/parliament-performance/lok-sabha-performance/${sectionDetailName}`
              )
            : // handleSectionDetailClick(sectionDetailName)
              () => {}
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
  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return loading ? (
    <Box
      sx={{
        height: '70vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Loader loading position='relative' />
    </Box>
  ) : (
    <Box ref={scrollRef}>
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
      {!window.location.pathname.includes('lok-sabha-productivity') && (
        <>
          <AdvertiseSection />
          <div id="Lok_Sabha_Attandance">
            <LS_attendance
              attendance_details={attendanceDetails}
              percentageValue={
                pageData?.attendance_percentage?.attendance_percentage
              }
              titleHeadign={'Lok Sabha Attendance'}
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
              sectionDetailName={'lok-sabha-question'}
              chipLabal={'MPs Participation in Lok Sabha Questions'}
            />
          </div>
          <AdvertiseSection />
          <div id="Lok_Sabha_Debates">
            <Debates_In_LS
              pageData={pageData}
              debate_data={pageData?.debate_data}
              debates_count={pageData?.debates_count}
              debateListData={debateListData}
              BottomRightChip={BottomRightChip}
              questionsData={questionsData}
            />
          </div>
          <AdvertiseSection />
          <div id="Lok_Sabha_Private_member_bill">
            <LS_attendance
              attendance_details={pageData?.private_bills_data}
              percentageValue={
                pageData?.private_bill_performance?.bill_performance_percentage
              }
              BottomRightChip={BottomRightChip}
              sectionDetailName={'lok-sabha-private-member-bills'}
              chipLabal={'MPs Participation in Lok Sabha Pvt. Member Bill'}
              titleHeadign={'Lok Sabha Pvt. Member Bill'}
              className="performanceSection"
              meterTitleText={"Pvt. Member Bill"}
            />
          </div>
          <AdvertiseSection />

          <div id="Lok_Sabha_Private_Member_Bills">
            <MpFundSection
              MpFundSection={MpFundsectionData}
              pageData={pageData}
              mpsFundData={pageData?.mps_fund_data}
              BottomRightChip={BottomRightChip}
            />
          </div>
        </>
      )}
    </Box>
  );
}

export default ParliamentPerformancePageComponent;
