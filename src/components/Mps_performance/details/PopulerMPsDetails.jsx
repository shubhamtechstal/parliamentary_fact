import { Box } from '@mui/material';
import SectionHeading from 'components/common/SectionHeading';
import { questionsDetailsData } from 'helpers/performanceConstants';
import { useState } from 'react';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import GrayButton from 'components/common/GrayButton';
import RankingTable from 'components/common/modals/RankingTable';

function PopulerMpsDetailsComponent ({onFilterClick}) {
  const [filter, setFilter] = useState(false);

  const handleFilterClick = () => {
    setFilter(!filter);
    onFilterClick();
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
          display: { xs: 'none', md: 'block' }, marginBottom:'10rem'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <SectionHeading title={"MPs Public Rating Top to Bottom"} />
          <GrayButton
            className="MobileViewRemove"
            onClick={() => handleFilterClick()}
            startIcon={<FilterAltOutlinedIcon />}
          >
            {filter ? 'Clear' : 'Filter'}
          </GrayButton>
        </Box>
        {/* <Grid
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
            <FormGroup aria-label="position" row sx={{ gap: '0 1rem ' }}>
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
        <GrayButton>Done</GrayButton> */}

        <RankingTable/>

      </Box>
    </>
  );
}

export default PopulerMpsDetailsComponent;
