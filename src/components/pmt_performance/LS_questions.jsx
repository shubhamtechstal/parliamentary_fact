import { Box, Grid } from '@mui/material';
import GrayDot from 'components/common/GrayDot';
import ProgressMeter from 'components/common/ProgressMeter';
import SectionHeading from 'components/common/SectionHeading';
import Text from 'components/common/Text';
import LineCharts from 'components/LineCharts';

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
        minWidth: '30%',
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

function LS_QuestionsComponent({ questionsListData, BottomRightChip }) {
  return (
    <>
      {/* **********Mobile********** */}
      <Box
        sx={{
          position: 'relative',
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h3 style={{ textAlign: 'center' }}>{questionsListData.title}</h3>
        <Box
          sx={{
            position: 'relative',
            marginTop: '-3rem',
          }}
        >
          <ProgressMeter
            titleText={questionsListData.progressTitle}
            subTiteText={questionsListData.progressSubTitle}
            centerDate={questionsListData.date}
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
            alignItems: 'center',
            overflowX: 'scroll',
            gap: '2rem',
            padding: '1rem',
            width: '100%',
          }}
        >
          {questionsListData.listData.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '10px',
                borderRadius: '1rem',
                backgroundColor: '#fff',
              }}
            >
              <GrayDot />
              <Box>
                <Text
                  sx={{
                    color: '#00000080',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textWrap: 'nowrap',
                  }}
                  text={`${item.title}`}
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
                      color: '#434343',
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      lineHeight: 1,
                      textWrap: 'nowrap',
                    }}
                    text={`${item.value}`}
                  />
                  <Text
                    sx={{
                      color: '#00000080',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      textWrap: 'nowrap',
                    }}
                    text={`${item.date}`}
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <LineCharts width={350} />
        </Box>
      </Box>

      {/* ******Desktop**** */}
      <Box
        sx={{
          padding: '2rem 10rem',
          position: 'relative',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <SectionHeading title={questionsListData.title} />
        <Grid
          container
          spacing={2}
          xs={12}
          md={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
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
              top: '-5.5rem',
              // marginTop:'-10rem',
              width: { xs: '47%', md: 'auto' },
            }}
          >
            <ProgressMeter
              titleText={questionsListData.progressTitle}
              subTiteText={questionsListData.progressSubTitle}
              centerDate={questionsListData.date}
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
          <Grid
            xs={12}
            md={8}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              // gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            {questionsListData.listData.map((item, index) => (
              <QuestionTextGroup index={index} {...item} />
            ))}
          </Grid>
        </Grid>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', marginTop: '-2rem' }}
        >
          <LineCharts />
        </Box>
        <Box sx={{ position: 'absolute', right: '10rem', bottom: '15%' }}>
          <BottomRightChip />
        </Box>
      </Box>
    </>
  );
}

export default LS_QuestionsComponent;
