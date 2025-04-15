import {
  Box,
  Button,
  Checkbox,
  Chip,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from '@mui/material';
import SectionHeading from 'components/common/SectionHeading';
import { questionsDetailsData } from 'helpers/performanceConstants';
import { useState } from 'react';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import GrayButton from 'components/common/GrayButton';
import FilterController from 'components/common/modals/FilterController';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from 'components/common/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function QuestionsDetail_Component({
  questionDetails,
  setAppliedFilter,
  isLoading,
}) {
  const [expandedItems, setExpandedItems] = useState({});
  const [loadMoreQuestions, setloadMoreQuestions] = useState(10);
  const [showMoreLoder, setShowMoreLoder] = useState(false);
  const handleLoadMoreQns = () => {
    setShowMoreLoder(true);
    setTimeout(() => {
    setloadMoreQuestions((prev) => prev + 20); // Load 10 more questions
    setShowMoreLoder(false);
    }, 500); // Simulate loading time
  };
  const onExpandQnDetail = (questionId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [questionId]: !prev[questionId], // Toggle visibility for clicked question
    }));
  };

  return (
    <>
      {/* **********Mobile********** */}
      {/* <Box
        sx={{
          position: 'relative',
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h3 style={{ textAlign: 'center' }}>{questionsDetailsData.title}</h3>
      </Box> */}

      {/* ******Desktop**** */}
      <Box
        className="performanceSection"
        sx={{
          position: 'relative',
          marginBottom: '10rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom:'2rem'
          }}
        >
          <SectionHeading title={questionsDetailsData?.title} />
          <FilterController setAppliedFilter={(e) => setAppliedFilter(e)} />
        </Box>
        {isLoading ? (
          <Box
            sx={{
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            {questionDetails.slice(0, loadMoreQuestions)?.map((item, i) => {
              const isExpanded = expandedItems[item?.question_number] ?? false;
              return (
                <Box key={'questions' + i} sx={{ fontSize: '0.8rem' }}>
                  <Box display={{ xs: 'block', md: 'flex' }} alignItems={'center'} justifyContent={'space-between'}>
                    <h3 style={{ margin: '5px 0' }}>{item?.date}</h3>
                    <p style={{ margin: '5px 0' }}>{item?.session_name}</p>
                  </Box>
                  <h3 style={{ margin: '5px 0' }}>
                    QUESTION NUM : {item?.question_number}
                  </h3>
                  <h4 style={{ margin: '5px 0' }}>
                    SUBJECT :{' '}
                    <span style={{ marginLeft: '10px', fontSize: '0.8rem' }}>
                      {' '}
                      {item?.question_subject}{' '}
                    </span>
                  </h4>
                  <Box
                    display={'flex'}
                    flexDirection={{ xs: 'column', md: 'row' }}
                  >
                    <p style={{ margin: '0 0' }}>
                      {' '}
                      FROM MINISTERY:{' '}
                      <Chip
                        sx={{ m: 1, height: '25px', fontSize: '0.7rem' }}
                        label={`MINISTRY OF ${item?.ministry}`}
                      />
                    </p>
                    <p style={{ margin: '0 0' }}> 
                      <span> ANSWER BY: </span>{' '}
                      <Chip
                        sx={{ m: 1, height: '25px', fontSize: '0.7rem' }}
                        label={item?.minister_name ?? '...testname'}
                      />{' '}
                    </p>
                  </Box>
                  <p style={{ margin: '0 0' }}>
                    <span>BY MPS : </span>
                    {item?.members?.map((mps, i) => {
                      return (
                        <Chip
                          sx={{ m: 1, height: '25px', fontSize: '0.7rem' }}
                          key={i}
                          label={mps}
                        />
                      );
                    })}
                    {isExpanded
                      ? item?.sub_questions?.map((infoText, idx) => (
                          <p key={idx}>{infoText}</p>
                        ))
                      : item?.sub_questions?.map((infoText, idx) => {
                          if (idx == 0)
                            return (
                              <p
                                key={idx}
                                style={{
                                  overflow: 'hidden',
                                  maxWidth: '800px',
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap',
                                }}
                              >
                                {infoText}
                              </p>
                            );
                          return;
                        })}

                    <Box
                      display={'flex'}
                      justifyContent="center"
                      pb={2}
                      margin={'0px 0 2rem 0'}
                      borderBottom={
                        i !== loadMoreQuestions - 1 && '1px solid #00000010'
                      }
                    >
                      {item?.sub_questions?.length > 0 && (
                        <IconButton
                          onClick={() =>
                            onExpandQnDetail(item?.question_number)
                          }
                        >
                          {!isExpanded ? (
                            <ExpandMoreIcon />
                          ) : (
                            <ExpandLessIcon />
                          )}
                        </IconButton>
                      )}
                    </Box>
                  </p>
                </Box>
              );
            })}
            {showMoreLoder && (<Box display={'flex'} justifyContent='center' sx={{ marginBottom: '2rem' }}>
              <CircularProgress />
            </Box>)}
            {loadMoreQuestions < questionDetails.length && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-end' },
                  marginBottom: '2rem',
                }}
              >
                <GrayButton
                  onClick={() => handleLoadMoreQns()}
                  text={'Load More Questions'}
                  sx={{
                    width: '20%',
                    height: '2.5rem',
                    fontSize: '1rem',
                    borderRadius: '0.5rem',
                  }}
                />
              </Box>
            )}
          </>
        )}
      </Box>
    </>
  );
}

export default QuestionsDetail_Component;
