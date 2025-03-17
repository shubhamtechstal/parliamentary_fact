import { Box, Grid } from '@mui/material';
import GrayDot from 'components/common/GrayDot';
import ProgressMeter from 'components/common/ProgressMeter';
import SectionHeading from 'components/common/SectionHeading';
import Text from 'components/common/Text';

const QuestionTextGroup = ({ title, value, date, index, mobTextWrap }) => {
  return (
    <Box
      key={index}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
        borderRight: [2, 5, 7, 9].includes(index)
          ? mobTextWrap
            ? '2px solid #E0E0E0'
            : 'none'
          : '2px solid #E0E0E0',
        padding: '1rem',
        minWidth: !mobTextWrap ? '30%' : 'auto',
        textWrap: mobTextWrap || 'wrap',
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
            text={value}
          />
          <Text
            sx={{
              fontSize: '0.9rem',
              fontWeight: 500,
            }}
            text={date}
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
        alignItems: 'center',
        fontSize: '14px',
        width: mobTextWrap ? 'auto' : '23%',
      }}
    >
      <GrayDot />
      <div>
        <span
          style={{
            color: '#FF936F',
            fontWeight: '600',
            fontFamily: '"Sora", sans-serif',
            textWrap: ' ',
            wordWrap: 'break-word',
          }}
        >
          <span style={{ fontWeight: '800', fontSize: '1.5rem' }}>
            {percentage}
          </span>{' '}
          %
        </span>{' '}
        <br />
        <span style={{ textWrap: mobTextWrap || 'wrap' }}>{title}</span>
      </div>
    </div>
  );
};

function Debates_In_LS({ debateListData, BottomRightChip }) {
  return (
    <>
      {/* ****Mobile*** */}
      <Box sx={{ display: { xs: 'block', md: 'none' }, padding: '1rem' }}>
        <h3 style={{ textAlign: 'center' }}>{debateListData.title}</h3>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ProgressMeter
            titleText={debateListData.progressTitle}
            subTiteText={debateListData.progressSubTitle}
            centerDate={debateListData.date}
            percentText={'100.'}
            subPercentText={'20%'}
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
            gap: '2rem',
            overflow: 'auto',
            padding: '0 1rem',
          }}
        >
          {debateListData.listData.map((item, index) => (
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
            // overflow: 'auto',
            gap: '2rem',
            flexWrap:'wrap'
          }}
        >
          {debateListData.listData2.map((item, index) => (
            <QuestionTextGroup index={index} {...item} mobTextWrap={'nowrap'} />
          ))}
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
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <BottomRightChip />
        </Box>
      </Box>

      {/* ****Desktop*** */}
      <Box
        sx={{
          padding: '2rem 10rem',
          position: 'relative',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <SectionHeading title={debateListData.title} />
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
              titleText={debateListData.progressTitle}
              subTiteText={debateListData.progressSubTitle}
              centerDate={debateListData.date}
              percentText={'100.'}
              subPercentText={'20%'}
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
          <Grid xs={12} md={8}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '1rem',
                flexWrap: 'wrap',
                alignItems: 'start',
              }}
            >
              {debateListData.listData.map((item, index) => (
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
              {debateListData.listData2.map((item, index) => (
                <QuestionTextGroup index={index} {...item} />
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <BottomRightChip />
        </Box>
      </Box>
    </>
  );
}

export default Debates_In_LS;
