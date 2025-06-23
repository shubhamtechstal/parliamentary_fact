import { Box, Chip, Container } from '@mui/material';
import QuestionsDetail_Component from './QuestionsDetail_Component';
import { useSearchParams } from 'react-router-dom';
import Text from 'components/common/Text';
import { useState } from 'react';
import MpsParticipationinQuestions from './MpsParticipationinQuestions';
import LokSabhaQuestionToMinistery from './LokSabhaQuestionToMinistery';
import LokSabhaQuestionTopics from './QuestionTopics';

const stapperTitles = [
  {
    id: 'mps-participation-in-question',
    title: 'MPs Participation in Question',
  },
  { id: 'questions-list', title: 'Lok Sabha Question List' },
  {
    id: 'lok-sabha-question-to-ministery',
    title: 'Lok Sabha Question To Ministery',
  },
  { id: 'lok-sabha-questions-topics', title: 'Lok Sabha Question Topics' },
];

  
const LokSabhaQuestionContainer = ({ question }) => {
  const [searchParams, setSearchParams] = useSearchParams({
    section: 'mps-participation-in-question',
  });
  const [filterParams, setFilterParams] = useState({});
  // useEffect(() => {
  //   const section = searchParams.get('section');
  //   if (section) {
  //     setActiveSection(section);
  //   }
  //   setFilterParams({});
  // }, [searchParams, initialSection]);
  const handleSectionChange = (sectionId) => {
    setSearchParams({ section: sectionId });
  };
  const sectionComponets = [
    {
      id: 'questions-list',
      component: (
        <QuestionsDetail_Component
          filterParams={filterParams}
        />
      ),
    },
    {
      id: 'mps-participation-in-question',
      component: (
        <MpsParticipationinQuestions/>
      ),
    },
    {
      id: 'lok-sabha-question-to-ministery',
      component: (
        <LokSabhaQuestionToMinistery agendaList={[]}/>
      ),
    },
    {
      id: 'lok-sabha-questions-topics',
      component: (
        <LokSabhaQuestionTopics />
      ),
    },
  ];
  return (
    <Box  minHeight={'80vh'}>
      <Container
        sx={{
          margin: 'auto',
          padding: '0 0',
          display: 'flex',
          gap: '20px',
          opacity: 0.8,
        }}
      >
        {/* <Box  sx={{  }}>  */}
        {stapperTitles.map((val, index) => {
          const isActive = searchParams.get('section') === val.id;
          return (
            <div
              style={{
                textDecoration: 'none',
                color: isActive ? '#F44336' : 'inherit',
                borderBottom: isActive
                  ? '4px solid rgb(241, 128, 124)'
                  : 'none',
                padding: '10px 0 6px 0',
              }}
              onClick={() => {
                handleSectionChange(val.id);
              }}
              key={`${index}-${val.id}`}
            >
              <Text
                text={val.title}
                sx={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              />
            </div>
          );
        })}
        {/* </Box> */}
      </Container>
      <Box>
        {
          sectionComponets.find((s) => s.id === searchParams.get('section'))
            ?.component
        }
      </Box>
      {/* <Container></Container> */}
    </Box>
  );
};

export default LokSabhaQuestionContainer;
