// components/FilterController.js
import React, { useEffect, useState } from 'react';
import FilterModal from './FilterModal';
import GrayButton from '../GrayButton';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSessionsFilterData } from 'stores/redux/apiSlices/commonSlice';

const FilterController = ({
  sessionsData,
  sessionsLoading,
  setAppliedFilter, // <-- NEW PROP
}) => {
  const { sessions, date_range, loading } = useSelector(
    (state) => state?.pmtSessions
  );

  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedSessions, setSelectedSessions] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);
  const [filterParams, setFilterParams] = useState({});

  const dispatch = useDispatch();

  const updateFilterParams = (years, sessions, dates) => {
    const params = {};

    if (years.length > 0) params.year_id = years.join(',');
    if (sessions.length > 0) params.s_id = sessions.join(',');
    if (dates.length > 0) params.date = dates.join(',');

    setFilterParams(params);
    dispatch(fetchSessionsFilterData(params)); // Trigger API call
  };

  const handleYearChange = (year) => {
    const updated = selectedYears.includes(year)
      ? selectedYears.filter((y) => y !== year)
      : [...selectedYears, year];
    setSelectedYears(updated);
    updateFilterParams(updated, selectedSessions, selectedDates);
  };

  const handleSessionChange = (session) => {
    const updated = selectedSessions.includes(session)
      ? selectedSessions.filter((s) => s !== session)
      : [...selectedSessions, session];
    setSelectedSessions(updated);
    updateFilterParams(selectedYears, updated, selectedDates);
  };

  const handleDateChange = (date) => {
    const updated = selectedDates.includes(date)
      ? selectedDates.filter((d) => d !== date)
      : [...selectedDates, date];
    setSelectedDates(updated);
    updateFilterParams(selectedYears, selectedSessions, updated);
  };

  const handleClearfilter = () => {
    setSelectedYears([]);
    setSelectedSessions([]);
    setSelectedDates([]);
    setFilterParams({});
    dispatch(fetchSessionsFilterData({}));
    setAppliedFilter?.({}); // Clear on parent side too
  };

  const handleFilterClick = () => {
    setOpenFilterModal(true);
    // if (!isClearfilter) {
    // } else {
    //   handleClearfilter();
    // }
    // setClearfilter(!isClearfilter);
  };

  const handleApllyfilter = () => {
    setAppliedFilter?.(filterParams);
    setOpenFilterModal(false);
  };

  const onChangeFilter = ({ name, value }) => {
    setFilterParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <GrayButton
        onClick={handleFilterClick}
        startIcon={<FilterAltOutlinedIcon />}
      >
        Filter
      </GrayButton>

      <FilterModal
        openModal={openFilterModal}
        handleClose={() => setOpenFilterModal(false)}
        sessionsData={sessionsData ?? sessions}
        sessionsLoading={sessionsLoading ?? loading}
        onChangeFilter={onChangeFilter}
        filterParams={filterParams}
        sessionDatesData={date_range}
        selectedYears={selectedYears}
        selectedSessions={selectedSessions}
        selectedDates={selectedDates}
        handleYearChange={handleYearChange}
        handleSessionChange={handleSessionChange}
        handleDateChange={handleDateChange}
        handleClearfilter={handleClearfilter}
        handleApllyfilter={handleApllyfilter}
      />
    </>
  );
};

export default FilterController;
