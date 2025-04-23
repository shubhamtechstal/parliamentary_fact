import {
  Box,
  Button,
  Checkbox,
  Chip,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Grid,
  Skeleton,
  Typography,
} from '@mui/material';
import SectionHeading from 'components/common/SectionHeading';
import { questionsDetailsData } from 'helpers/performanceConstants';
import { useEffect, useState } from 'react';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import GrayButton from 'components/common/GrayButton';
import FilterController from 'components/common/modals/FilterController';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from 'components/common/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useDispatch } from 'react-redux';
import { fetchQuestionDetailsData } from 'stores/redux/apiSlices/pmt_PerformanceSlice';

const questionSkeleton = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        display={{ xs: 'block', md: 'flex' }}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Skeleton variant="text" width={100} height={40} />
        <Skeleton variant="text" width={150} height={30} />
      </Box>
      <Skeleton variant="text" width={120} height={30} />
      <Skeleton variant="text" width={100} height={20} />
      <Skeleton variant="text" width={'70%'} height={40} />
      <Skeleton variant="text" width={'70%'} height={70} />
      <Skeleton variant="text" width={'100%'} height={40} />
    </Box>
  );
};
function QuestionsDetail_Component({
  questionDetails=[],
  filterParams,
  isLoading,
}) {
  const [expandedItems, setExpandedItems] = useState({});
  const [loadMoreQuestions, setloadMoreQuestions] = useState(10);
  const [showMoreLoder, setShowMoreLoder] = useState(false);
  const handleLoadMoreQns = () => {
    setShowMoreLoder(true);
    setTimeout(() => {
      setloadMoreQuestions((prev) => prev + 20); // state for Load 10 more questions
      setShowMoreLoder(false);
    }, 500);
  };
  const onExpandQnDetail = (questionId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [questionId]: !prev[questionId], //  state for Toggle visibility for clicked question
    }));
  };

  const dispatch = useDispatch();
  const [appliedFilterFromPoup, setAppliedFilterFromPoup] = useState({});
  useEffect(() => {
    dispatch(
      fetchQuestionDetailsData({ ...filterParams, ...appliedFilterFromPoup })
    );
  }, [dispatch, filterParams, appliedFilterFromPoup]);
  return (
    <>
      <Box
        className="performanceSection"
        sx={{
          position: 'relative',
          marginBottom: '1rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            fontSize: { xs: '0.8rem', md: '1.2rem' },
          }}
        >
          <SectionHeading title={questionsDetailsData?.title} />
          <FilterController
            setAppliedFilter={(e) => setAppliedFilterFromPoup(e)}
          />
        </Box>
        {isLoading ? (
          questionSkeleton()
        ) : (
          <>
            {questionDetails?.length > 0 ? (
              questionDetails?.slice(0, loadMoreQuestions)?.map((item, i) => {
                const isExpanded =
                  expandedItems[item?.question_number] ?? false;
                return (
                  <Box key={'questions' + i} sx={{ fontSize: '0.8rem' }}>
                    <Box
                      display={{ xs: 'block', md: 'flex' }}
                      alignItems={'center'}
                      justifyContent={'space-between'}
                    >
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
                      {item?.minister_name && (
                        <p style={{ margin: '0 0' }}>
                          <span> ANSWER BY: </span>{' '}
                          <Chip
                            sx={{ m: 1, height: '25px', fontSize: '0.7rem' }}
                            label={item?.minister_name}
                          />{' '}
                        </p>
                      )}
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
                        // pb={2}
                        margin={'0px 0 1rem 0'}
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
              })
            ) : (
              <h3>
                {filterParams?.mp_full_name
                  ? ` No questions asked by ${filterParams?.mp_full_name}.`
                  : `Question not found`}
              </h3>
            )}
            {showMoreLoder && questionSkeleton()}

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: { xs: 'center', md: 'flex-end' },
                marginBottom: '2rem',
                alignItems: 'center',
                gap: { md: '1em', xs: '0.5rem' },
                fontSize: '0.8rem',
              }}
            >
              <p style={{ margin: '0 0' }}>
                Totle Asked Questions :{' '}
                <b> {questionDetails?.length ? questionDetails?.length : 0} </b>{' '}
              </p>
              <p style={{ margin: '0 0' }}>
                {' '}
                ( Showing :{' '}
                <b>
                  {' '}
                  {questionDetails?.length > loadMoreQuestions
                    ? loadMoreQuestions
                    : questionDetails?.length
                      ? questionDetails?.length
                      : 0}{' '}
                </b>{' '}
                ){' '}
              </p>
              {loadMoreQuestions < questionDetails?.length && (
                <GrayButton
                  onClick={() => handleLoadMoreQns()}
                  text={'Load Next 20 Qns'}
                  sx={{
                    width: '20%',
                    height: '2.5rem',
                    fontSize: '1rem',
                    borderRadius: '0.5rem',
                  }}
                />
              )}
            </Box>
          </>
        )}
      </Box>
    </>
  );
}

export default QuestionsDetail_Component;
