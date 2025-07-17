import { Box, Grid } from '@mui/material';
import MUIBarChart from 'components/common/charts/MUIBarChart';
import GrayDot from 'components/common/GrayDot';
import ProgressMeter from 'components/common/ProgressMeter';
import SectionHeading from 'components/common/SectionHeading';
import Text from 'components/common/Text';
// import LineCharts from 'components/LineCharts';
import {
  getDateInMonthNameFormate,
  extractPercentage,
} from 'helpers/utills/utilityFunctions';

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
        width: [6, 8].includes(index) ? '40%' : '30%',
        maxWidth: '21rem',
      }}
    >
      {[3, 4, 5, 8, 9].includes(index) ? (
        <GrayDot icon_url={'/Assets/icons/small_arrow_Down.png'} />
      ) : (
        <GrayDot icon_url={'/Assets/icons/small_arrow_Up.png'} />
      )}
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
          {[6, 8].includes(index) ? (
            <>
              <Text
                sx={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  lineHeight: 1,
                  textTransform: 'uppercase',
                }}
                text={getDateInMonthNameFormate(date)}
              />
              <Text
                sx={{
                  fontSize: '0.8rem',
                  fontWeight: 500,
                }}
                text={`MINISTRY OF ${value}`}
              />
            </>
          ) : (
            <>
              <Text
                sx={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  lineHeight: 1,
                  textTransform: 'uppercase',
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
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

function LS_QuestionsComponent({
  questionsListData,
  pageData,
  questionsData,
  BottomRightChip,
  sectionDetailName,
  chipLabal,
  chartData,
}) {
  return (
    <>
      {/* **********Mobile********** */}
      <Box
        className="performanceSection"
        sx={{
          position: 'relative',
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h3 style={{ textAlign: 'center' }}>{questionsListData?.title}</h3>
        <Box
          sx={{
            position: 'relative',
            marginTop: '-2rem',
          }}
        >
          <ProgressMeter
            titleText={questionsListData?.progressTitle}
            subTiteText={questionsListData?.progressSubTitle}
            centerDate={questionsListData?.date}
            percentText={`${extractPercentage(pageData?.questions_percentage?.question_percentage)?.a}`}
            subPercentText={`${extractPercentage(pageData?.questions_percentage?.question_percentage)?.b}`}
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
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem 2%',
          }}
        >
          {questionsData?.slice(0, 6).map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                // padding: '1rem',
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
                minWidth: 'auto',
                //  textWrap:'nowrap',
                width: 'auto',
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
                    text={
                      [0, 2].includes(index)
                        ? `MINISTRY OF ${item.value}`
                        : item.value
                    }
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
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <MUIBarChart data={chartData} barName={'Questions %'} width={300} />
          {/* <LineCharts width={350} data={lineChartData} labels={lineChartLabels}/> */}
        </Box>
        {BottomRightChip && (
          <Box sx={{ position: 'relative', bottom: '1rem' }}>
            <BottomRightChip
              sectionDetailName={sectionDetailName}
              chipLabal={chipLabal}
            />
          </Box>
        )}
      </Box>

      {/* ******Desktop**** */}
      <Box
        className="performanceSection"
        sx={{
          position: 'relative',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <SectionHeading title={questionsListData?.title} />
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
              top: '-3.5rem',
            }}
          >
            <ProgressMeter
              titleText={questionsListData?.progressTitle}
              subTiteText={questionsListData?.progressSubTitle}
              centerDate={questionsListData?.date}
              percentText={`${extractPercentage(pageData?.questions_percentage?.question_percentage)?.a}`}
              subPercentText={`${extractPercentage(pageData?.questions_percentage?.question_percentage)?.b}`}
              // percentText={'100.'}
              // subPercentText={'20%'}
              width={230}
              height={250}
              innerRadius={98}
              percentNumFontSize={'2.5rem'}
              percent_x="37%"
              percent_y="55%"
              dotPercentFontSize={'1.5rem'}
              dotPercent_x="62%"
              dotPercent_y="57%"
            />
          </Grid>
          <Grid
            xs={12}
            md={9}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              // gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            {questionsData?.map((item, index) => (
              <QuestionTextGroup index={index} {...item} />
            ))}
          </Grid>
        </Grid>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', marginTop: '-2rem' }}
        >
          <MUIBarChart data={chartData} barName={'Questions'} width={540} />
          {/* <LineCharts  
            data={lineChartData}
            labels={lineChartLabels}
            width={540} /> */}
        </Box>
        {BottomRightChip && (
          <Box sx={{ position: 'absolute', right: '2rem', bottom: '15%' }}>
            <BottomRightChip
              sectionDetailName={sectionDetailName}
              chipLabal={chipLabal}
            />
          </Box>
        )}
      </Box>
    </>
  );
}

export default LS_QuestionsComponent;
