import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  IconButton,
  CircularProgress,
  Dialog,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const years = [
  { name: '1st year', id: 1 },
  { name: '2nd year', id: 2 },
  { name: '3rd year', id: 3 },
  { name: '4th year', id: 4 },
  { name: '5th year', id: 5 },
];
// const sessionsData = [
//     {
//       "s_id": 12,
//       "session_name": "Winter Session 2024",
//       "year_id": "1"
//     },
//     {
//       "s_id": 13,
//       "session_name": "Budget Session 2025",
//       "year_id": "1"
//     },
//     {
//       "s_id": 15,
//       "session_name": "Monsoon Session 2025",
//       "year_id": "2"
//     },
//     {
//       "s_id": 16,
//       "session_name": "Summer session 2025",
//       "year_id": "3"
//     }
//   ];

const FilterModal = ({
  openModal,
  handleClose,
  sessionsData,
  sessionDatesData,
  sessionsLoading,
  //   filterParams,
  //   onChangeFilter,
  selectedYears,
  selectedSessions,
  selectedDates,
  handleDateChange,
  handleYearChange,
  handleSessionChange,
  handleClearfilter,
  handleApllyfilter,
}) => {
  //   const [selectedYears, setSelectedYears] = useState([]);
  //   const [selectedSessions, setSelectedSessions] = useState([]);

  //   const handleYearChange = (year) => {
  //     setSelectedYears((prev) =>
  //       prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
  //     );
  //     onChangeFilter({ name: 'year_id', value: year });
  //   };

  //   const handleSessionChange = (session) => {
  //     setSelectedSessions((prev) =>
  //       prev.includes(session)
  //         ? prev.filter((s) => s !== session)
  //         : [...prev, session]
  //     );
  //     onChangeFilter({ name: 's_id', value: session });
  //   };

  return (
    <Dialog open={openModal} onClose={() => handleClose}>
      <Box
        sx={{
          bgcolor: 'white',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          overflowY: 'hidden',
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6">Select Filters</Typography>
          <IconButton onClick={handleClose} sx={{ m: '-2rem -1rem 0 0' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ maxHeight: '400px', overflowY: 'auto' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Select Year
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {years?.map((year) => (
              <FormControlLabel
                key={year.id}
                control={
                  <Checkbox
                    checked={selectedYears.includes(year.id)}
                    onChange={() => handleYearChange(year.id)}
                  />
                }
                label={year.name}
              />
            ))}
          </Box>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, mt: 3, mb: 1 }}
          >
            Select Session
          </Typography>
          {sessionsLoading ? (
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
            <Box display="flex" flexWrap="wrap" gap={1}>
              {sessionsData?.length > 0 ? (
                sessionsData?.map((session) => (
                  <FormControlLabel
                    key={session.s_id}
                    control={
                      <Checkbox
                        checked={selectedSessions.includes(session.s_id)}
                        onChange={() => handleSessionChange(session.s_id)}
                      />
                    }
                    label={session.session_name}
                  />
                ))
              ) : (
                <Typography variant="body2" sx={{ color: 'gray' }}>
                  No sessions available
                </Typography>
              )}
            </Box>
          )}

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, mt: 3, mb: 1 }}
          >
            Select Dates
          </Typography>
          {sessionsLoading ? (
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
            <Box display="flex" flexWrap="wrap" gap={1}>
              {sessionDatesData?.length > 0 ? (
                sessionDatesData?.map((date) => (
                  <FormControlLabel
                    fontSize={'0.5rem'}
                    key={date}
                    control={
                      <Checkbox
                        checked={selectedDates.includes(date)}
                        onChange={() => handleDateChange(date)}
                      />
                    }
                    label={date}
                  />
                ))
              ) : (
                <Typography variant="body2" sx={{ color: 'gray' }}>
                  No Dates available
                </Typography>
              )}
            </Box>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            // mt: 1,
            gap: 3,
          }}
        >
          <Button
            variant="contained"
            sx={{ mt: 3, width: '100%', bgcolor: '#BDBDBD', color: 'white' }}
            onClick={handleClearfilter}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            sx={{ mt: 3, width: '100%', color: 'white' }}
            onClick={handleApllyfilter}
          >
            Apply
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default FilterModal;
