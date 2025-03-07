import { Box, Chip } from '@mui/material';
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
  productivity_schedule,
  questionsListData,
} from 'helpers/performanceConstants';

const Productivity_bottomCards = ({ cardData, BottomRightChip }) => {
  return (
    <div style={{ position: 'relative', padding: '2rem 10rem' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '3rem',
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
                text={data.linkText}
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
    </div>
  );
};
const BottomRightChip = () => {
  return (
    <Chip
      label={'MPs Participation in Lok Sabha Attendance'}
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
    <Box
      sx={{
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem',
        borderTop: '1px solid #00000080',
        borderBottom: '1px solid #00000080',
      }}
    >
      <img src="/advertise.jpg" />
    </Box>
  );
};
function ParliamentPerformanceContainer() {
  return (
    <Box
      sx={{
        // padding: '2rem 10rem',
        color: '#00000080',
        backgroundColor: '#f4f6f9',
        fontFamily: '"Sora", sans-serif',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent:'space-between', padding: '2rem 10rem' }}>
        {performace_chipList?.map((title, i) => {
          return <Chip key={i} label={title} variant="outlined" />;
        })}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
          padding: '2rem 10rem',
        }}
      >
        <Text
          sx={{
            fontSize: '1.3rem',
            letterSpacing: '-0.3px',
            fontWeight: 600,
          }}
          font={'Sora'}
          text={'Parliament Performance 18th Lok Sabha'}
        />
        <Box
          sx={{
            color: '#00000080',
            borderBottom: '1px solid #D3D3D3',
            display: 'flex',
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
      <LS_productivity productivity_schedule={productivity_schedule} />
      <Productivity_bottomCards
        cardData={productivity_bottomCardsdata}
        BottomRightChip={BottomRightChip}
      />
      {/* <BottomRightChip /> */}
      <AdvertiseSection />
      <LS_attendance BottomRightChip={BottomRightChip} />
      <AdvertiseSection />
      <LS_QuestionsComponent
        questionsListData={questionsListData}
        BottomRightChip={BottomRightChip}
      />
      <AdvertiseSection />
      <Debates_In_LS
        debateListData={debateListData}
        BottomRightChip={BottomRightChip}
      />
      <AdvertiseSection />
      <MpFundSection
        MpFundSection={MpFundsectionData}
        BottomRightChip={BottomRightChip}
      />
    </Box>
  );
}

export default ParliamentPerformanceContainer;
