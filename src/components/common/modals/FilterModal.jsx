import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const years = ["1st year", "2nd year", "3rd year", "4th year", "5th year"];
const sessions = [
  "Special Session 2019",
  "Winter Session 2019",
  "Monsoon Session 2019",
  "Budget Session 2020",
];

const FilterModal = ({ openModal, handleClose }) => {
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedSessions, setSelectedSessions] = useState([]);

  const handleYearChange = (year) => {
    setSelectedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  const handleSessionChange = (session) => {
    setSelectedSessions((prev) =>
      prev.includes(session) ? prev.filter((s) => s !== session) : [...prev, session]
    );
  };

  return (
    <Modal open={openModal} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          bgcolor: "white",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">Select Filters</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Year Selection */}
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
          Select Year
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={1}>
          {years.map((year) => (
            <FormControlLabel
              key={year}
              control={
                <Checkbox
                  checked={selectedYears.includes(year)}
                  onChange={() => handleYearChange(year)}
                />
              }
              label={year}
            />
          ))}
        </Box>

        {/* Session Selection */}
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
          Select Session
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={1}>
          {sessions.map((session) => (
            <FormControlLabel
              key={session}
              control={
                <Checkbox
                  checked={selectedSessions.includes(session)}
                  onChange={() => handleSessionChange(session)}
                />
              }
              label={session}
            />
          ))}
        </Box>

        {/* Done Button */}
        <Button
          variant="contained"
          sx={{ mt: 3, width: "100%", bgcolor: "#BDBDBD", color: "white" }}
          onClick={handleClose}
        >
          Done
        </Button>
      </Box>
    </Modal>
  );
};

export default FilterModal;
