import {
  Box,
  Checkbox,
  Chip,
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

function QuestionsDetail_Component() {
  const [filter, setFilter] = useState(false);

  const handleFilterClick = () => {
    setFilter(!filter);
  };
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
        <h3 style={{ textAlign: 'center' }}>{questionsDetailsData.title}</h3>
      </Box>

      {/* ******Desktop**** */}
      <Box
        className="performanceSection"
        sx={{
          position: 'relative',
          marginBottom:'10rem'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <SectionHeading title={questionsDetailsData?.title} />
          <GrayButton
            // className="MobileViewRemove"
            onClick={() => handleFilterClick()}
            startIcon={<FilterAltOutlinedIcon />}
          >
            {filter ? 'Clear' : 'Filter'}
          </GrayButton>
        </Box>
        <Grid
          container
          md={12}
          sx={{
            background: '#E8EDF1',
            padding: '1rem',
            margin: '2rem 0',
            fontSize: '0.8rem',
          }}
        >
          <Grid md={4}>
            <h3>
              {questionsDetailsData.select_year_label} {'>'}{' '}
            </h3>
            <FormGroup aria-label="position" row sx={{ gap: '2rem' }}>
              {questionsDetailsData.year_options.map((item, i) => {
                return (
                  <FormControlLabel
                    value={item.label}
                    control={<Checkbox color="default" />}
                    label={
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ fontSize: '0.8rem' }}
                      >
                        {item.label}
                      </Typography>
                    }
                    labelPlacement="end"
                  />
                );
              })}
            </FormGroup>
          </Grid>
          <Grid md={4}>
            <h3>
              {questionsDetailsData.select_session_1_label} {'>'}{' '}
            </h3>
            <FormGroup aria-label="position" row>
              {questionsDetailsData.session_1_options.map((item, i) => {
                return (
                  <FormControlLabel
                    value={item.label}
                    control={<Checkbox color="default" />}
                    label={
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ fontSize: '0.8rem' }}
                      >
                        {item.label}
                      </Typography>
                    }
                    labelPlacement="end"
                    sx={{ fontSize: '0.8rem', width: '48%' }}
                  />
                );
              })}
            </FormGroup>
          </Grid>
          <Grid md={4}>
            <h3>
              {questionsDetailsData.select_session_2_label} {'>'}{' '}
            </h3>
            <FormGroup aria-label="position" row>
              {questionsDetailsData.session_2_options.map((item, i) => {
                return (
                  <FormControlLabel
                    value={item.label}
                    control={<Checkbox color="default" />}
                    label={
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ fontSize: '0.8rem' }}
                      >
                        {item.label}
                      </Typography>
                    }
                    labelPlacement="end"
                    sx={{ fontSize: '0.8rem', width: '48%' }}
                  />
                );
              })}
            </FormGroup>
          </Grid>
        </Grid>
        <GrayButton>Done</GrayButton>
        {questionsDetailsData?.questions.map((item, i) => {
          return (
            <Box key={'questions' + i} sx={{ fontSize: '0.8rem' }}>
              <h3>{item?.date}</h3>
              <h3>QUESTION NUM : {i+1}</h3>
              <h5>
                SUBJECT :{' '}
                <span style={{ marginLeft: '10px' }}> {item?.subject} </span>
              </h5>
              <div>
                <span>{item?.from_ministry_label}: </span>{' '}
                <Chip sx={{ marginLeft: '10px' }} label={item?.ministry} />{' '}
                <span style={{ marginLeft: '20px' }}>
                  {' '}
                  {item?.answer_by_label}:{' '}
                </span>{' '}
                <Chip
                  sx={{ marginLeft: '10px' }}
                  label={item?.answer_by}
                />{' '}
              </div>
              <p>
                <span>{item?.by_mps_label} </span>
                {item?.mps?.map((mps, i) => {
                  return (
                    <Chip sx={{ marginLeft: '10px' }} key={i} label={mps} />
                  );
                })}
                {item?.content?.map((infoText, i) => {
                  return <p key={i}>{infoText} </p>;
                })}
              </p>
              {i !== (questionsDetailsData?.questions?.length-1) && <hr style={{margin:'2rem 0'}} />}
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default QuestionsDetail_Component;
