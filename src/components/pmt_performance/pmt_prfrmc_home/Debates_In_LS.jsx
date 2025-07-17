import { Box, Grid } from '@mui/material';
import GrayDot from 'components/common/GrayDot';
import ProgressMeter from 'components/common/ProgressMeter';
import SectionHeading from 'components/common/SectionHeading';
import Text from 'components/common/Text';
import { extractPercentage, getDateInMonthNameFormate } from 'helpers/utills/utilityFunctions';
// import { formattedDate } from 'helpers/performanceConstants';

const QuestionTextGroup = ({ title, value, date, index }) => {
  return (
    <Box
      key={index}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
        borderRight: [2, 5, 7, 9].includes(index)
          ? 'none'
          : '2px solid #E0E0E0',
        padding: '1rem',
        width: [6,8].includes(index) ? '40%' : '30%',
        // maxWidth: '21rem',
        textWrap: 'wrap',
      }}
    >
      <GrayDot />
      <Box>
        <Text
          sx={{
            fontSize: '0.8rem',
            fontWeight: 600,
          }}
          text={title}
        />
        <Box
          sx={{
            display: 'flex',
            gap: '5px',
            alignItems: 'center',
            marginTop: '0.3rem',
          }}
        >
          <Text
            sx={{
              fontSize: '1rem',
              fontWeight: 600,
              lineHeight: 1,
              textTransform:"uppercase",
            }}
            text={value}
          />
          <Text
            sx={{
              fontSize: '0.8rem',
              fontWeight: 500,
            }}
            text={getDateInMonthNameFormate(date)}
          />
        </Box>
      </Box>
    </Box>
  );
};
const DebateTextGroup = ({ index, title, percentage, mobTextWrap }) => {
  return (
    <div
      key={index}
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: mobTextWrap ? 'start' : 'center',
        fontSize: '1rem',
        maxWidth: mobTextWrap ? '10rem' : '23%',
        width: '48%',
        // width: mobTextWrap ? '10rem' : '23%',
      }}
    >
      <GrayDot />
      <div>
        <span
          style={{
            color: '#FF936F',
            fontWeight: '600',
            fontFamily: '"Sora", sans-serif',
            wordWrap: 'break-word',
          }}
        >
          <span style={{ fontWeight: '800', fontSize: '1rem' }}>
            {percentage}
          </span>{' '}
        </span>{' '}
        <br />
        <span style={{ fontSize: '12px',}}>{title}</span>
      </div>
    </div>
  );
};

function Debates_In_LS({ debateListData, pageData, questionsData, BottomRightChip, debate_data, debates_count }) {
  return (
    <>
      {/* ****Mobile*** */}
      <Box className="performanceSection" sx={{ display: { xs: 'block', md: 'none' } }}>
        <h3 style={{ textAlign: 'center' }}>{debateListData?.title}</h3>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ProgressMeter
            titleText={debateListData?.progressTitle}
            subTiteText={debateListData?.progressSubTitle}
            centerDate={debateListData?.date}
            percentText={`${extractPercentage(pageData?.debate_percentage?.debate_percentage?.toString())?.a}` || '110.'}
            subPercentText={`${extractPercentage(pageData?.debate_percentage?.debate_percentage?.toString())?.b}` || '20%'}
            width={230}
            height={250}
            innerRadius={98}
            percentNumFontSize={'2.5rem'}
            percent_x="40%"
            percent_y="55%"
            dotPercentFontSize={'1.5rem'}
            dotPercent_x="72%"
            dotPercent_y="57%"
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2rem 2%',
            // overflow: 'auto',
            // padding: '0 1rem',
            flexWrap:'wrap',
            justifyContent:'center',
          }}
        >
          {debate_data?.map((item, index) => (
            <DebateTextGroup
              index={index}
              title={item.title}
              percentage={item.value}
              mobTextWrap={'nowrap'}
            />
          ))}
        </Box>
        <hr style={{ margin: '2rem 0' }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap:'wrap',
            gap:'2rem 2%'
          }}
        >
          {questionsData?.slice(0,6).map((item, index) => (
           <Box
           key={index}
           sx={{
             display: 'flex',
             alignItems: 'center',
             gap: '0.8rem',
            maxWidth: '13rem',
            width: '48%',
           }}
         >
           <GrayDot />
           <Box>
             <Text
               sx={{
                 fontSize: '0.8rem',
                 fontWeight: 600,
               }}
               text={item.title}
             />
             <Box
               sx={{
                //  display: 'flex',
                 gap: '5px',
                 alignItems: 'end',
                 marginTop: '0.3rem',
               }}
             >
               <Text
                 sx={{
                   fontSize: '1rem',
                   fontWeight: 600,
                   lineHeight: 1,
                 }}
                 text={item.value}
               />
               <Text
                 sx={{
                   fontSize: '0.9rem',
                   fontWeight: 500,
                 }}
                 text={getDateInMonthNameFormate(item?.date)}
               />
             </Box>
           </Box>
         </Box>
          ))}
          {questionsData?.slice(6).map((item, index) => (
           <Box
           key={index}
           sx={{
             display: 'flex',
             alignItems: 'center',
             gap: '0.8rem',
             padding: '1rem',
             minWidth:  'auto',
            //  textWrap:'nowrap',
             width:'auto'
           }}
         >
           <GrayDot />
           <Box>
             <Text
               sx={{
                 fontSize: '0.8rem',
                 fontWeight: 600,
               }}
               text={item.title}
             />
             <Box
               sx={{
                 display: 'flex',
                 gap: '5px',
                 alignItems: 'end',
                 marginTop: '0.3rem',
               }}
             >
               <Text
                 sx={{
                   fontSize: '1rem',
                   fontWeight: 600,
                   lineHeight: 1,
                 }}
                 text={ [0, 2].includes(index)
                  ? `MINISTRY OF ${item.value}`
                  : item.value}
               />
               <Text
                 sx={{
                   fontSize: '0.9rem',
                   fontWeight: 500,
                 }}
                 text={getDateInMonthNameFormate(item?.date)}
               />
             </Box>
           </Box>
         </Box>
          ))}
          {/* {debateListData?.listData2.map((item, index) => (
            <QuestionTextGroup index={index} {...item} mobTextWrap={'nowrap'} />
          ))} */}
        </Box>
        <Grid
          container
          spacing={2}
          xs={12}
          md={12}
          sx={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'space-evenly',
            marginTop: '1rem',
          }}
        >
          <Grid xs={12} md={8}></Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom:'1rem' }}>
          <BottomRightChip sectionDetailName={'lok-sabha-debates'} chipLabal={'MPs Participation in Lok Sabha Debate'}/>
        </Box>
      </Box>

      {/* ****Desktop*** */}
      <Box className="performanceSection"
        sx={{
          // padding: '2rem 10rem',
          position: 'relative',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <SectionHeading title={debateListData?.title} />
        <Grid
          container
          spacing={2}
          xs={12}
          md={12}
          sx={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'space-evenly',
            marginTop: '1rem',
          }}
        >
          <Grid
            spacing={2}
            xs={12}
            md={3}
            sx={{
              position: 'relative',
              top: '-1rem',
              // marginTop:'-10rem',
              width: { xs: '47%', md: 'auto' },
            }}
          >
            <ProgressMeter
              titleText={debateListData?.progressTitle}
              subTiteText={debateListData?.progressSubTitle}
              centerDate={debateListData?.date}
              percentText={`${extractPercentage(pageData?.debate_percentage?.debate_percentage?.toString())?.a}` || '110.'}
              subPercentText={`${extractPercentage(pageData?.debate_percentage?.debate_percentage?.toString())?.b}` || '20%'}
              width={230}
              height={250}
              innerRadius={98}
              percentNumFontSize={'2.5rem'}
              percent_x="40%"
              percent_y="55%"
              dotPercentFontSize={'1.5rem'}
              dotPercent_x="72%"
              dotPercent_y="57%"
            />
          </Grid>
          <Grid xs={12} md={9}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '1rem',
                flexWrap: 'wrap',
                alignItems: 'start',
              }}
            >
              {debate_data?.map((item, index) => (
                <DebateTextGroup
                  index={index}
                  title={item.title}
                  percentage={item.value}
                />
              ))}
            </Box>
            <hr style={{ margin: '2rem 0' }} />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              {debates_count?.map((item, index) => (
                <QuestionTextGroup index={index} {...item} />
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <BottomRightChip  sectionDetailName={'lok-sabha-debates'} chipLabal={'MPs Participation in Lok Sabha Debate'} />
        </Box>
      </Box>
    </>
  );
}

export default Debates_In_LS;
