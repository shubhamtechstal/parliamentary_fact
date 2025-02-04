import {
  Box,
  Button,
  CircularProgress,
  Divider,
  MenuItem,
  TextField,
} from '@mui/material';
import Text from 'components/common/Text';
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc
} from '@mui/x-charts/Gauge';
import '../App.css';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import React, { useEffect, useState } from 'react';
import TopQuestionPerformerCard from 'components/common/cards/TopQuestionPerformerCard';
import { newsLetterApiAction } from 'stores/redux/apiSlices/newsLetterApiSlice';
import { useNavigate } from 'react-router-dom';

export default function NewsLetterContainer() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(false);
  const [datefilter, setDateFilter] = useState(false);
  const [selectedDropDown, setSelectedDropDown] = useState({
    LokSabha: '',
    year: '',
    session: '',
    startDate: '',
    endDate: '',
    dates: [],
  });
  const [selectedDate, setSelectedDate] = useState(0);
  const [formattedDate, setFormatedDate] = useState('');

  const { data: lokSabhaDropDown } =
    newsLetterApiAction.getNewsLetterLokSabhaDropdown();

  const { data: yearDropDown } =
    newsLetterApiAction.getNewsLetterYearDropdown();

  const [getSessionDropdown, { data: getNewsLetterSessionDropdown }] =
    newsLetterApiAction.getNewsLetterSessionDropdown();

  const [getNewsLetterData, { data: newsLetterData, isLoading }] =
    newsLetterApiAction.getNewsLetterData();

  function formatNumber(num) {
    return num?.toString().padStart(2, '0');
  }
  function convertTo12HourFormat(time) {
    const date = new Date(`1970-01-01T${time}`);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  }
  const generateDates = (startDate, endDate, istoday) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Reset current date time to midnight

    const dateArray = [];
    for (
      let current = new Date(start);
      current <= end;
      current.setDate(current.getDate() + 1)
    ) {
      const isWeekend = current.getDay() === 0 || current.getDay() === 6; // Check if Sunday or Saturday
      const isFuture = current > currentDate; // Check if date is greater than today

      // If today is the current iteration date, we should not disable it regardless of istoday
      const isToday = current.toDateString() === currentDate.toDateString();

      // Disable condition: If it's a weekend or a future date and istoday is false, disable it.
      const disable = (isWeekend || isFuture) && !(istoday && isToday);

      dateArray.push({
        actualDate: current.toISOString(),
        date: current.getDate(),
        month: months[current.getMonth()],
        day: daysOfWeek[current.getDay()],
        disable: disable, // Disable based on conditions
      });
    }
    return dateArray;
  };

  const handleChange = (event) => {
    setDateFilter(false);
    const { name, value } = event.target;
    if (name === 'LokSabha') {
      setSelectedDropDown((prevState) => ({
        ...prevState,
        ['year']: '',
        ['session']: '',
        [name]: value,
      }));
    } else {
      setSelectedDropDown((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    if (name === 'year')
      getSessionDropdown({
        loksabha_id: selectedDropDown?.LokSabha,
        year_id: value,
      });
  };

  const options = { day: '2-digit', month: 'short' };
  const handleGoClick = () => {
    setDateFilter(true);
    setSelectedDropDown((prevState) => ({
      ...prevState,
      dates: generateDates(
        selectedDropDown?.session?.start_date,
        selectedDropDown?.session?.end_date,
        newsLetterData?.current_date_available
      ),
    }));
  };
  const handleFilterClick = () => {
    if (filter) {
      setDateFilter(false);
      setSelectedDropDown({
        LokSabha: '',
        year: '',
        session: '',
        startDate: '',
        endDate: '',
        dates: [],
      });
      navigate('/newsletter/loksabha');
    }
    setFilter(!filter);
  };

  useEffect(() => {
    setSelectedDropDown((prevState) => ({
      ...prevState,
      ['startDate']: new Date(selectedDropDown?.session?.start_date),
      ['endDate']: new Date(selectedDropDown?.session?.end_date),
    }));
  }, [selectedDropDown?.session]);

  useEffect(() => {
    setSelectedDate(0);
  }, [selectedDropDown?.dates]);

  useEffect(() => {
    const obj = {};
    if (selectedDropDown?.session?.id) {
      obj['session'] = selectedDropDown.session.id;
      obj['date'] =
        selectedDropDown?.dates[selectedDate]?.actualDate?.split('T')[0];
    }
    const url = window.location.href;
    const parts = url.split('/').filter(Boolean);
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (datePattern.test(parts[parts.length - 1])) {
      obj['date'] = parts[parts.length - 1];
    }
    getNewsLetterData({ ...obj });
  }, [selectedDropDown?.dates, window.location.href]);
  useEffect(() => {
    navigate(selectedDropDown?.dates[selectedDate]?.actualDate?.split('T')[0]);
  }, [selectedDropDown?.dates, selectedDate]);
  useEffect(() => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const date = new Date(newsLetterData?.date_session?.date);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    setFormatedDate(
      `${newsLetterData?.date_session?.day_name ?? ''} ${isNaN(day) ? 'Invalid date' : day} ${month ?? ''} ${isNaN(year) ? '' : year}`
    );
  }, [newsLetterData?.date_session?.date]);

  // const currentDate = new Date();
  // console.log(currentDate.toISOString().split('T')[0], 'currentdate');

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            padding: { xs: '0.5rem', md: '1rem' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#F1F2F3',
          }}
        >
          <Box
            sx={{
              display: { xs: 'flex', md: 'flex' },
              justifyContent: 'space-between',
              width: { xs: '100%', md: '85%' },
              padding: { xs: '0.5rem 0', md: filter ? '1rem 0 0 0' : '1rem 0' },
            }}
          >
            <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <Box
                sx={{ height: '1rem', width: '1rem', background: '#ff000070' }}
                className="MobileViewRemove"
              ></Box>
              <Text
                font={'Sora'}
                className={'MobileViewRemove'}
                sx={{ fontWeight: '600', marginTop: '0.1rem' }}
                text={'PARLIAMENT PERFORMANCE - NEWSLETTER'}
              />
              <Text
                font={'Sora'}
                className={'mobileHeader'}
                sx={{ fontWeight: '600', marginTop: '0.1rem' }}
                text={'PARLIAMENT PERFORMANCE'}
              />
            </Box>
            <Button
              className="MobileViewRemove"
              onClick={() => handleFilterClick()}
              sx={{
                background: '#b5b5b5',
                textTransform: 'none',
                color: '#fff',
                fontWeight: '600',
                fontSize: '12px',
                height: 'min-content',
                borderRadius: '18px',
                padding: '0.2rem 1rem',
                '&:hover': {
                  background: 'grey',
                  color: '#fff',
                },
                '.MuiButton-startIcon': {
                  marginRight: '2px',
                },
                '.MuiButton-startIcon>*:nth-of-type(1)': {
                  fontSize: '14px',
                },
              }}
              startIcon={<FilterAltOutlinedIcon />}
            >
              {filter ? 'Clear Filter' : 'Filter'}
            </Button>
          </Box>
          {filter && (
            <>
              <Box
                sx={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  width: { xs: '100%', md: '85%' },
                  alignItems: 'center',
                }}
              >
                <TextField
                  select
                  name="LokSabha"
                  placeholder="Select Lok Sabha"
                  id="fullWidth"
                  value={
                    lokSabhaDropDown?.loksabhaa_data?.some(
                      (item) => item.id === selectedDropDown.LokSabha
                    )
                      ? selectedDropDown.LokSabha
                      : 'Select Lok Sabha'
                  }
                  onChange={handleChange}
                  sx={{
                    backgroundColor: 'white',
                    // padding: '0 1rem',
                    minWidth: '170px',
                    margin: { xs: '0', md: '1rem 0' },
                    borderRadius: '24px',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border: 'none',
                      },
                      '& .MuiSelect-select': {
                        padding: '0.3rem 2rem',
                        fontWeight: '500',
                        fontSize: '0.8rem',
                      },
                    },
                  }}
                >
                  <MenuItem
                    sx={{
                      fontWeight: '500',
                      textAlign: 'center',
                      fontSize: '0.875rem',
                    }}
                    value="Select Lok Sabha"
                  >
                    Select Lok Sabha
                  </MenuItem>
                  {lokSabhaDropDown?.loksabhaa_data?.map((val) => (
                    <MenuItem
                      sx={{
                        fontWeight: '500',
                        textAlign: 'center',
                        fontSize: '0.875rem',
                      }}
                      key={val?.id}
                      value={val?.id}
                    >
                      {val?.name}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  select
                  name="year"
                  placeholder="Select Year"
                  id="fullWidth"
                  value={
                    yearDropDown?.year_data?.some(
                      (item) => item.id === selectedDropDown.year
                    )
                      ? selectedDropDown.year
                      : 'Select Year'
                  }
                  onChange={handleChange}
                  sx={{
                    backgroundColor: 'white',
                    // padding: '0 1rem',
                    minWidth: '150px',
                    margin: { xs: '0', md: '1rem 0' },
                    borderRadius: '24px',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border: 'none',
                      },
                      '& .MuiSelect-select': {
                        padding: '0.3rem 2rem',
                        fontWeight: '500',
                        fontSize: '0.8rem',
                      },
                    },
                  }}
                >
                  <MenuItem
                    sx={{
                      fontWeight: '500',
                      textAlign: 'center',
                      fontSize: '0.875rem',
                    }}
                    value="Select Year"
                  >
                    Select Year
                  </MenuItem>
                  {(lokSabhaDropDown?.loksabhaa_data?.some(
                    (item) => item.id === selectedDropDown.LokSabha
                  )
                    ? yearDropDown?.year_data
                    : []
                  )?.map((val) => (
                    <MenuItem
                      sx={{
                        fontWeight: '500',
                        textAlign: 'center',
                        fontSize: '0.875rem',
                      }}
                      key={val?.id}
                      value={val?.id}
                    >
                      {val?.year}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  select
                  name="session"
                  placeholder="Select Session"
                  id="fullWidth"
                  value={
                    getNewsLetterSessionDropdown?.data?.some(
                      (item) => item.id === selectedDropDown.session?.id
                    )
                      ? selectedDropDown.session
                      : 'Select Session'
                  }
                  onChange={handleChange}
                  sx={{
                    backgroundColor: 'white',
                    // padding: '0 1rem',
                    minWidth: '220px',
                    margin: { xs: '0', md: '1rem 0' },
                    borderRadius: '24px',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border: 'none',
                      },
                      '& .MuiSelect-select': {
                        padding: '0.3rem 2rem',
                        fontWeight: '500',
                        fontSize: '0.8rem',
                      },
                    },
                  }}
                >
                  <MenuItem
                    sx={{
                      fontWeight: '500',
                      textAlign: 'center',
                      fontSize: '0.875rem',
                    }}
                    value="Select Session"
                  >
                    Select Session
                  </MenuItem>
                  {getNewsLetterSessionDropdown?.data?.map((val) => (
                    <MenuItem
                      sx={{
                        fontWeight: '500',
                        textAlign: 'center',
                        fontSize: '0.875rem',
                      }}
                      key={val?.id}
                      value={val}
                    >
                      {val?.session_name}
                    </MenuItem>
                  ))}
                </TextField>

                <Button
                  className="MobileViewRemove"
                  onClick={() => handleGoClick()}
                  sx={{
                    background: '#b5b5b5',
                    textTransform: 'none',
                    color: '#fff',
                    fontWeight: '600',
                    height: 'min-content',
                    borderRadius: '18px',
                    padding: '0.2rem 1rem',
                    '&:hover': {
                      background: 'grey',
                      color: '#fff',
                    },
                  }}
                >
                  Go
                </Button>
              </Box>
              {datefilter && (
                <>
                  <Box
                    sx={{
                      width: { xs: '100%', md: '85%' },
                      display: 'flex',
                      marginTop: { xs: '0.5rem' },
                      flexDirection: { xs: 'column', md: 'row' },
                      gap: { xs: '0.1rem', md: '0.5rem' },
                    }}
                  >
                    <Text
                      font={'Sora'}
                      sx={{ fontWeight: '600', marginTop: '0.1rem' }}
                      text={
                        selectedDropDown?.session?.session_name ??
                        'please select session '
                      }
                    />
                    <Box
                      sx={{ background: '#000', width: '2px', height: '22px' }}
                      className="MobileViewRemove"
                    ></Box>
                    <Text
                      font={'Sora'}
                      sx={{
                        fontWeight: '500',
                        marginTop: '0.1rem',
                        color: 'grey',
                      }}
                      // text={'25 Nov - 22 Dec 2024'}
                      text={`${selectedDropDown?.startDate?.toLocaleDateString('en-GB', options).replace(',', '')} - ${selectedDropDown?.endDate?.toLocaleDateString('en-GB', options).replace(',', '')} ${selectedDropDown?.endDate?.getFullYear()}`}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: { xs: '100%', md: '85%' },
                      overflowX: 'scroll',
                      margin: '1rem 0',
                      display: 'flex',
                      gap: '1rem',
                      '::-webkit-scrollbar': {
                        display: 'none', // This hides the scrollbar
                      },
                      msOverflowStyle: 'none', // For Internet Explorer
                      scrollbarWidth: 'none', // For Firefox
                    }}
                  >
                    {selectedDropDown?.dates?.map((val, index) => (
                      <Box
                        key={index}
                        onClick={
                          val?.disable ? '' : () => setSelectedDate(index)
                        }
                        sx={{
                          borderRadius: '20px',
                          background:
                            selectedDate === index
                              ? '#FF936F'
                              : val?.disable
                                ? '#D9D9D9'
                                : '#fff',
                          height: '60px',
                          width: '50px',
                          minWidth: '50px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          cursor: val?.disable ? 'not-allowed' : 'pointer',
                          transition: 'background 0.3s',
                        }}
                      >
                        <Text
                          font={'Sora'}
                          sx={{
                            color: selectedDate === index ? '#fff' : 'grey',
                            fontWeight: 600,
                            fontSize: '1.4rem',
                            height: '25px',
                          }}
                          text={val.date}
                        />
                        <Text
                          font={'Sora'}
                          sx={{
                            color: selectedDate === index ? '#fff' : 'grey',
                            fontWeight: 600,
                            fontSize: '0.6rem',
                            borderBottom:
                              selectedDate === index
                                ? '1px solid #FFF'
                                : '1px solid grey',
                            textAlign: 'center',
                            width: '35px',
                          }}
                          text={val.month}
                        />
                        <Text
                          font={'Sora'}
                          sx={{
                            color: selectedDate === index ? '#fff' : 'grey',
                            fontWeight: 600,
                            fontSize: '0.5rem',
                          }}
                          text={val.day}
                        />
                      </Box>
                    ))}
                  </Box>
                </>
              )}
            </>
          )}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '100%', md: '85%' },
              background: '#fff',
              marginTop: { xs: '0.5rem', md: '0' },
              overflow: 'hidden',
              padding: { xs: '1rem', md: '2rem' },
              borderRadius: '12px',
            }}
          >
            <Text
              font={'Sora'}
              sx={{
                color: 'grey',
                alignSelf: 'flex-end',
                marginRight: '10px',
                fontSize: '0.8rem',
                display: { xs: 'block', md: 'none' },
              }}
              text={formattedDate ?? 'N/A'}
            />
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ width: { xs: 'min-content', md: '28%' } }}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '0.2rem',
                    width: { xs: '120px', md: '100%' },
                    flexWrap: 'wrap',
                  }}
                >
                  <Text
                    font={'Sora'}
                    sx={{
                      color: 'grey',
                      fontSize: { xs: '1.1rem', md: '1.5rem' },
                      fontWeight: { xs: 700, md: 600 },
                      lineHeight: 1.2,
                    }}
                    text={`TODAY'S`}
                  />
                  <Text
                    font={'Sora'}
                    sx={{
                      color: 'grey',
                      fontSize: { xs: '1.1rem', md: '1.5rem' },
                      fontWeight: { xs: 700, md: 600 },
                      lineHeight: 1.2,
                    }}
                    text={`LOK SABHA `}
                  />
                  <Text
                    font={'Sora'}
                    sx={{
                      color: 'grey',
                      fontSize: { xs: '1.1rem', md: '1.5rem' },
                      fontWeight: { xs: 700, md: 600 },
                      lineHeight: 1.2,
                    }}
                    text={`PERFORMANCE`}
                  />
                </Box>
                <Text
                  font={'Sora'}
                  sx={{
                    color: 'grey',
                    marginTop: '0.5rem',
                    alignSelf: 'flex-end',
                    marginRight: '10px',
                    fontSize: '0.8rem',
                    display: { xs: 'none', md: 'block' },
                  }}
                  text={formattedDate ?? 'N/A'}
                />
                <Text
                  font={'Sora'}
                  sx={{
                    color: 'grey',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    marginTop: '10px',
                  }}
                  text={`Day-${(newsLetterData?.date_session?.day_count ?? "00")?.toString()?.padStart(2, '0') }`}
                />
                <Text
                  font={'Sora'}
                  sx={{
                    color: 'grey',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textWrap: 'nowrap',
                  }}
                  text={newsLetterData?.date_session?.session_name}
                />
              </Box>
              <Box
                sx={{
                  margin: { xs: '0 1rem 0 0', md: '3rem 1rem 0 1rem' },
                  width: { xs: '47%', md: 'auto' },
                }}
              >
                <GaugeContainer
                  width={195}
                  height={200}
                  startAngle={-130}
                  innerRadius={82}
                  sx={{ position: 'relative', left: { xs: -12, md: -60 } }}
                  endAngle={130}
                  value={
                    newsLetterData?.loksabha_productivity?.length > 0
                      ? Math?.min(
                          newsLetterData?.loksabha_productivity[0]
                            ?.productivity_percentage,
                          100
                        )
                      : 0
                  }
                >
                  <GaugeReferenceArc style={{ fill: '#DCDCDC' }} />{' '}
                  {/* Set the color here */}
                  <GaugeValueArc style={{ fill: '#FF936F' }} />{' '}
                  {/* Set the color here */}
                  <text
                    x="50%"
                    y="48%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{
                      fill: '#FF936F',
                      fontSize: '3rem',
                      fontWeight: '800',
                      fontFamily: '"Sora", sans-serif',
                    }}
                  >
                    {`${newsLetterData?.loksabha_productivity?.length > 0 ? newsLetterData?.loksabha_productivity[0]?.productivity_percentage?.toString().split('.')[0] : 0}`}
                  </text>
                  <text
                    x="52%"
                    y="68%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{
                      fill: '#FF936F',
                      fontSize: '2rem',
                      fontWeight: '500',
                      fontFamily: '"Sora", sans-serif',
                    }}
                  >
                    {`.${newsLetterData?.loksabha_productivity?.length > 0 ? newsLetterData?.loksabha_productivity[0]?.productivity_percentage?.toString().split('.')[1] : 0}%`}
                  </text>
                  <text
                    x="50%"
                    y="87%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{
                      fill: '#00000080',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      fontFamily: '"Sora", sans-serif',
                    }}
                  >
                    {`Productivity`}
                  </text>
                  <text
                    x="11%"
                    y="86%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{
                      fill: '#00000080',
                      fontSize: '0.6rem',
                      fontWeight: '500',
                      fontFamily: '"Sora", sans-serif',
                    }}
                  >
                    {`0`}
                  </text>
                  <text
                    x="93%"
                    y="86%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{
                      fill: '#00000080',
                      fontSize: '0.6rem',
                      fontWeight: '500',
                      fontFamily: '"Sora", sans-serif',
                    }}
                  >
                    {`100+`}
                  </text>
                </GaugeContainer>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  gap: '0.8rem',
                  maxHeight: { xs: 'auto', md: '140px' },
                  borderBottom: { xs: 'none', md: '2px solid #00000010' },
                  width: { xs: '100%', md: 'fit-content' },
                  marginTop: { xs: '1rem', md: '5rem' },
                  padding: '2rem 0',
                  textAlign: 'end',
                  justifyContent: 'flex-end',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: 0, md: 67 },
                    left: { xs: '57%', md: '-90px' },
                  }}
                >
                  <Text
                    font={'Sora'}
                    sx={{
                      color: '#fff',
                      background: '#FF936F',
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      width: '80px',
                      borderRadius: '15px',
                      textAlign: 'center',
                      position: 'absolute',
                      top: -22,
                      padding: '0.2rem 0',
                    }}
                    text={`${newsLetterData?.loksabha_productivity?.length > 0 ? `${Math.floor(newsLetterData?.loksabha_productivity?.[0]?.actual_time / 60).toString().padStart(2, '0')}:${(newsLetterData?.loksabha_productivity?.[0]?.actual_time% 60)?.toString().padStart(2, '0')}` : 0} Hrs`}
                  />
                  <Text
                    font={'Sora'}
                    sx={{
                      color: '#fff',
                      background: '#919191',
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      width: '80px',
                      borderRadius: '15px',
                      zIndex: -1,
                      textAlign: 'center',
                      padding: '0.2rem 0',
                    }}
                    text={'Work done'}
                  />
                </Box>
                <Box
                  sx={{
                    marginTop: '1rem',
                    position: 'relative',
                    display: { xs: 'block', md: 'flex' },
                    flexWrap: 'wrap',
                    justifyContent: 'flex-end',
                    textAlign: { xs: 'end', md: 'start' },
                    gap: { xs: 0, md: '1rem' },
                  }}
                >
                  <Text
                    font={'Sora'}
                    sx={{
                      color: 'grey',
                      position: 'absolute',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      top: -150,
                      left: -85,
                      width: '70px',
                      margin: '2rem 0 0 0rem',
                      display: { xs: 'block', md: 'none' },
                    }}
                    text={'NUMBER OF ADJOURNMENT'}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -65,
                      left: -80,
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    <Box
                      sx={{
                        color: '#fff',
                        //   background: '#cbcbcb',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        borderRadius: '50%',
                        textAlign: 'center',
                        width: '55px',
                        height: '55px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <img
                        src="/Assets/icons/Adjournment-image1.png"
                        alt="adjournment-1"
                        style={{ width: '100%' }}
                      />
                    </Box>
                    <Text
                      font={'Sora'}
                      sx={{
                        color: '#fff',
                        //   background: '#FF936F',
                        fontSize: '1.5rem',
                        fontWeight: '500',
                        borderRadius: '50%',
                        textAlign: 'center',
                        position: 'absolute',
                        top: 43,
                        backgroundImage:
                          'url(/Assets/icons/Adjournment-image-2.png)', // Ensure the file extension is correct
                        backgroundSize: 'cover', // To make the image cover the entire element
                        backgroundRepeat: 'no-repeat',
                        width: '55px',
                        height: '55px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      text={'06'}
                    />
                  </Box>
                  <Box>
                    <Text
                      font={'Sora'}
                      sx={{
                        color: 'grey',
                        fontSize: '0.65rem',
                        fontWeight: '600',
                      }}
                      text={'QUESTION HOUR'}
                    />
                    <Text
                      font={'Sora'}
                      sx={{
                        color: '#FF936F',
                        fontSize: '1.3rem',
                        fontWeight: '600',
                      }}
                      text={
                        newsLetterData?.productivity?.length > 0
                          ? `${parseFloat(newsLetterData?.productivity[0]?.question_hour_percentage).toFixed(1)}`
                          : '0'
                      }
                    >
                      <span style={{ fontWeight: 400 }}>%</span>
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      font={'Sora'}
                      sx={{
                        color: 'grey',
                        fontSize: '0.65rem',
                        fontWeight: '600',
                        marginTop: { xs: '0.5rem', md: '0' },
                      }}
                      text={'LEGISLATIVE BUSINESS'}
                    />
                    <Text
                      font={'Sora'}
                      sx={{
                        color: '#FF936F',
                        fontSize: '1.3rem',
                        fontWeight: '600',
                      }}
                      text={
                        newsLetterData?.productivity?.length > 0
                          ? `${parseFloat(newsLetterData?.productivity[0]?.legislative_business_percentage).toFixed(1)}`
                          : '0'
                      }
                    >
                      <span style={{ fontWeight: 400 }}>%</span>
                    </Text>
                  </Box>
                </Box>
                <Box
                  sx={{
                    height: '110px',
                    width: '2px',
                    background: '#FF936F',
                    marginTop: '1rem',
                    display: { xs: 'block', md: 'none' },
                  }}
                ></Box>
                <Box
                  sx={{
                    justifyContent: 'flex-end',
                    textAlign: { xs: 'start', md: 'start' },
                    width: { xs: 'min-content', md: 'fit-content' },
                    marginTop: '1rem',
                    display: { xs: 'block', md: 'flex' },
                    flexWrap: 'wrap',
                    gap: { xs: 0, md: '1rem' },
                  }}
                >
                  <Box>
                    <Text
                      font={'Sora'}
                      sx={{
                        color: 'grey',
                        fontSize: '0.65rem',
                        fontWeight: '600',
                      }}
                      text={'ZERO HOUR'}
                    />
                    <Text
                      font={'Sora'}
                      sx={{
                        color: '#FF936F',
                        fontSize: '1.3rem',
                        fontWeight: '600',
                      }}
                      text={
                        newsLetterData?.productivity?.length > 0
                          ? `${parseFloat(newsLetterData?.productivity[0]?.zero_hour_percentage).toFixed(1)}`
                          : '0'
                      }
                    >
                      <span style={{ fontWeight: 400 }}>%</span>
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      font={'Sora'}
                      sx={{
                        color: 'grey',
                        fontSize: '0.65rem',
                        textWrap: 'nowrap',
                        fontWeight: '600',
                        marginTop: { xs: '0.5rem', md: '0' },
                      }}
                      text={'OTHER BUSINESS'}
                    />
                    <Text
                      font={'Sora'}
                      sx={{
                        color: '#FF936F',
                        fontSize: '1.3rem',
                        textWrap: 'nowrap',
                        fontWeight: '600',
                      }}
                      text={
                        newsLetterData?.productivity?.length > 0
                          ? `${parseFloat(newsLetterData?.productivity[0]?.other_business_percentage).toFixed(1)}`
                          : '0'
                      }
                    >
                      <span style={{ fontWeight: 400 }}>%</span>
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ position: 'relative' }}>
              <img
                className="parliamentDotImage"
                src="/Assets/icons/Parliament-dot-image1.png"
                alt="parliament"
                style={{ position: 'absolute' }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                width: { xs: '100%', md: '40%' },
                alignSelf: 'flex-end',
                padding: { xs: '0', md: '0 2rem 2rem 2rem' },
                borderBottom: { xs: 'none', md: '2px solid #00000010' },
                justifyContent: { xs: 'flex-end', md: 'space-between' },
                gap: '1rem',
              }}
            >
              <Box
                sx={{
                  // alignSelf: 'flex-end',
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: { xs: '1.1rem' },
                  paddingLeft: '3rem',
                  alignItems: 'center',
                  background: { xs: '#fff' },
                  height: 'min-content',
                  zIndex: 1,
                  // width:{xs:'auto',md:'65%'}
                }}
              >
                <Text
                  font={'Sora'}
                  sx={{
                    color: '#5c5c5c',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                  }}
                  text={'Govt Bill'}
                />
                <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                  <Box>
                    <Text
                      font={'Sora'}
                      sx={{
                        color: 'grey',
                        fontSize: '0.65rem',
                        fontWeight: '600',
                      }}
                      text={'INTERDUCE'}
                    />
                    <Text
                      font={'Sora'}
                      sx={{
                        color: '#FF936F',
                        fontSize: '1.1rem',
                        fontWeight: '700',
                      }}
                      text={formatNumber(
                        newsLetterData?.bill_status_counts?.introduced_bill ?? 0
                      )}
                    />
                  </Box>
                  <Box>
                    <Text
                      font={'Sora'}
                      sx={{
                        color: 'grey',
                        fontSize: '0.65rem',
                        fontWeight: '600',
                      }}
                      text={'DISCUSSED'}
                    />
                    <Text
                      font={'Sora'}
                      sx={{
                        color: '#FF936F',
                        fontSize: '1.1rem',
                        fontWeight: '700',
                      }}
                      text={formatNumber(
                        newsLetterData?.bill_status_counts?.discussed ?? 0
                      )}
                    />
                  </Box>
                  <Box>
                    <Text
                      font={'Sora'}
                      sx={{
                        color: 'grey',
                        fontSize: '0.65rem',
                        fontWeight: '600',
                      }}
                      text={'PASSED'}
                    />
                    <Text
                      font={'Sora'}
                      sx={{
                        color: '#FF936F',
                        fontSize: '1.1rem',
                        fontWeight: '700',
                      }}
                      text={formatNumber(
                        newsLetterData?.bill_status_counts?.passed ?? 0
                      )}
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  minWidth: '2px',
                  height: '100px',
                  background: '#00000010',
                  display: { xs: 'none', md: 'block' },
                }}
              ></Box>
              <Box
                sx={{
                  width: '100px',
                  display: { xs: 'none', md: 'flex' },
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Text
                  font={'Sora'}
                  sx={{
                    color: 'grey',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                  }}
                  text={'NUMBER OF ADJOURNMENT'}
                />
                <Box sx={{ display: 'flex', gap: '5px' }}>
                  <Box
                    sx={{
                      color: '#fff',
                      //   background: '#cbcbcb',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      borderRadius: '50%',
                      textAlign: 'center',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src="/Assets/icons/Adjournment-image1.png"
                      alt="adjournment-1"
                      style={{ width: '100%' }}
                    />
                  </Box>
                  <Text
                    font={'Sora'}
                    sx={{
                      color: '#fff',
                      //   background: '#FF936F',
                      fontSize: '1.5rem',
                      fontWeight: '500',
                      borderRadius: '50%',
                      textAlign: 'center',
                      backgroundImage:
                        'url(/Assets/icons/Adjournment-image-2.png)', // Ensure the file extension is correct
                      backgroundSize: 'cover', // To make the image cover the entire element
                      backgroundRepeat: 'no-repeat',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    text={formatNumber(newsLetterData?.adjourned_count ?? 0)}
                  />
                </Box>
              </Box>
            </Box>
            {/* <Button
          sx={{
            background: '#A6A6A6',
            alignSelf: 'center',
            color: '#fff',
            fontSize: '0.8rem',
            fontWeight: '600',
            marginTop: '3.5rem',
            width: 'fit-content',
            borderRadius: '18px',
            padding: { xs: '0.4rem 2rem', md: '0.4rem 3rem' },
            '&:hover': {
              background: '#A6A6A6',
              color: '#fff',
            },
          }}
        >
          Click here to details
        </Button> */}
            <Box
              sx={{
                display: 'flex',
                marginTop: { xs: '3.5rem', md: '0rem' },
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ width: '30%', margin: { xs: 0, md: 'auto' } }}>
                <Text
                  font={'Sora'}
                  sx={{
                    color: 'grey',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    textWrap: 'nowrap',
                  }}
                  text={`QUESTION IN`}
                />
                <Text
                  font={'Sora'}
                  sx={{
                    color: 'grey',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    textWrap: 'nowrap',
                  }}
                  text={`LOK SABHA `}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  width: { xs: '100%', md: '72%' },
                  borderBottom: { xs: 'none', md: '2px solid #00000010' },
                  paddingBottom: { xs: '0', md: '2rem' },
                  flexWrap: 'wrap',
                  gap: { xs: '0', md: '5rem' },
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box sx={{ position: 'relative', width: '150px' }}>
                  <GaugeContainer
                    width={145}
                    height={150}
                    startAngle={-130}
                    innerRadius={58}
                    sx={{
                      position: 'relative',
                      left: { md: -8, xs: 15 },
                      marginTop: '1rem',
                    }}
                    endAngle={130}
                    value={
                      newsLetterData?.questions_summary?.length > 0
                        ? newsLetterData?.questions_summary
                            ?.mp_participant_percent
                        : 0
                    }
                  >
                    <GaugeReferenceArc /> {/* Set the color here */}
                    <GaugeValueArc style={{ fill: '#FF936F' }} />{' '}
                    {/* Set the color here */}
                    <text
                      x="52%"
                      y="58%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      style={{
                        fill: '#FF936F',
                        fontSize: '1.8rem',
                        fontWeight: '800',
                        fontFamily: '"Sora", sans-serif',
                      }}
                    >
                      {`${( newsLetterData?.questions_summary?.participation_percentage?.toFixed(1)) ?? 0}%`}
                    </text>
                    <text
                      x="50%"
                      y="86%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      style={{
                        fill: '#00000080',
                        fontSize: '0.7rem',
                        fontWeight: '600',
                        fontFamily: '"Sora", sans-serif',
                      }}
                    >
                      {`Member's`}
                    </text>
                    <text
                      x="50%"
                      y="96%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      style={{
                        fill: '#00000080',
                        fontSize: '0.7rem',
                        fontWeight: '600',
                        fontFamily: '"Sora", sans-serif',
                      }}
                    >
                      {`Participation`}
                    </text>
                    <text
                      x="8%"
                      y="86%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      style={{
                        fill: '#00000080',
                        fontSize: '0.6rem',
                        fontWeight: '500',
                        fontFamily: '"Sora", sans-serif',
                      }}
                    >
                      {`0`}
                    </text>
                    <text
                      x="94%"
                      y="86%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      style={{
                        fill: '#00000080',
                        fontSize: '0.6rem',
                        fontWeight: '500',
                        fontFamily: '"Sora", sans-serif',
                      }}
                    >
                      {`100`}
                    </text>
                  </GaugeContainer>
                  <Box
                    sx={{
                      borderRadius: '50%',
                      background: '#FF936F',
                      height: { xs: '60px', md: '80px' },
                      width: { xs: '60px', md: '80px' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      position: 'absolute',
                      right: { xs: -60, md: -58 },
                      top: { xs: 20, md: 30 },
                      alignItems: 'center',
                      marginTop: '1rem',
                    }}
                  >
                    <Text
                      font={'Sora'}
                      sx={{
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: { xs: '1.1rem', md: '1.8rem' },
                        height: '20px',
                        marginTop: { xs: '0', md: '10px' },
                        lineHeight: { xs: 1.5, md: 0.5 },
                      }}
                      text={formatNumber(
                           newsLetterData?.questions_summary
                              ?.total_mps_involved
                          ?? 0
                      )}
                    />
                    <Text
                      font={'Sora'}
                      sx={{
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '0.7rem',
                      }}
                      text={'MPS'}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '0.5rem',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginTop: '1.5rem',
                    width: { md: '60%', xs: '100%' },
                    maxWidth: { md: '65%', xs: '100%' },
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: '10px',
                      background: '#FF936F',
                      height: '65px',
                      width: '60px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      font={'Sora'}
                      sx={{
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '1.7rem',
                        height: '30px',
                      }}
                      text={formatNumber(
                         newsLetterData?.questions_summary
                              ?.max_members_count
                          ?? 0
                      )}
                    />
                    <Text
                      font={'Sora'}
                      sx={{
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '0.7rem',
                      }}
                      text={'MPS'}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '55px',
                    }}
                  >
                    <Text
                      font={'Sora'}
                      sx={{
                        color: 'grey',
                        fontSize: '0.65rem',
                        fontWeight: '600',
                        lineHeight: 1.2,
                      }}
                      text={'Maximum Members Asked Question on'}
                    />
                    <Divider
                      sx={{
                        margin: '0.2rem 0',
                        maxWidth: { md: '60%', xs: '100%' },
                      }}
                    />
                    <Text
                      font={'Sora'}
                      sx={{
                        color: 'grey',
                        fontSize: '0.65rem',
                        fontWeight: '600',
                        lineHeight: 1.2,
                      }}
                      text={
                         newsLetterData?.questions_summary
                              ?.max_members_question_subject
                          ?? 'N/A'
                      }
                    />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                marginTop: { xs: '1rem', md: '0' },
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  width: { xs: '100%', md: '28%' },
                  margin: { xs: '0', md: 'auto' },
                }}
              >
                <Text
                  font={'Sora'}
                  sx={{ color: 'grey', fontSize: '1.1rem', fontWeight: 600 }}
                  text={`TODAYS TOP-3`}
                />
                <Text
                  font={'Sora'}
                  sx={{
                    color: 'grey',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    width: { xs: '100%', md: '150px' },
                  }}
                  text={`PERFORMER MPS IN QUESTION`}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  gap: '0.18rem',
                  marginTop: { xs: '1rem', md: '2rem' },
                  justifyContent: 'space-between',
                  width: { xs: '100%', md: '72%' },
                  borderBottom: { xs: 'none', md: '2px solid #00000010' },
                  paddingBottom: { xs: 'none', md: '2rem' },
                  // marginBottom:{xs:'none',md:'2rem'}
                }}
              >
                {newsLetterData?.top_members
                  ?.slice(0, 3)
                  ?.map((val, index) => (
                    <TopQuestionPerformerCard key={index + val} val={val} />
                  ))}
              </Box>
            </Box>
            {/* <Button
          sx={{
            background: '#A6A6A6',
            alignSelf: 'center',
            color: '#fff',
            fontSize: '0.8rem',
            fontWeight: '600',
            margin: '1rem 0',
            width: 'fit-content',
            borderRadius: '18px',
            padding: { xs: '0.4rem 2rem', md: '0.4rem 3rem' },
            '&:hover': {
              background: '#A6A6A6',
              color: '#fff',
            },
          }}
        >
          Click here to details
        </Button> */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                margin: { xs: '0', md: '2rem 0' },
              }}
            >
              <Box
                sx={{
                  width: { xs: 'fit-content', md: '27%' },
                  marginTop: '1rem',
                  margin: { md: 'auto', xs: '1rem 0 0 0' },
                }}
              >
                <Text
                  font={'Sora'}
                  sx={{ color: 'grey', fontSize: '1.1rem', fontWeight: 700 }}
                  text={`TODAY'S`}
                />
                <Text
                  font={'Sora'}
                  sx={{ color: 'grey', fontSize: '1.1rem', fontWeight: 700 }}
                  text={`HIGHLIGHT`}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  width: { xs: '100%', md: '73%' },
                }}
              >
                {newsLetterData?.day_highlights
                  ?.slice(0, 5)
                  ?.map((val, index) => (
                    <Box
                      sx={{
                        display: 'flex',
                        width: { xs: '100%', md: '150px' },
                      }}
                    >
                      <Box
                        className="mobileHeader"
                        sx={{ padding: '8px 5px ' }}
                      >
                        <Box
                          sx={{
                            width: '15px',
                            height: '15px',
                            background: '#FF936F',
                            borderRadius: '50%',
                          }}
                        ></Box>
                        {index !==
                          newsLetterData?.day_highlights?.length - 1 && (
                          <Box
                            sx={{
                              width: '3px',
                              height: '100%',
                              background: '#FF936F',
                              marginLeft: '6px',
                            }}
                          ></Box>
                        )}
                      </Box>
                      <Box>
                        <Box sx={{ padding: '5px 0 5px 10px' }}>
                          <Text
                            font={'Sora'}
                            // className="MobileViewRemove"
                            sx={{
                              color: '#FF936F',
                              fontSize: '1rem',
                              fontWeight: 600,
                              marginBottom: { xs: '0', md: '1rem' },
                              wordBreak: 'break-word',
                            }}
                            text={`${convertTo12HourFormat(val?.time)}`}
                          />
                          <Text
                            font={'Sora'}
                            sx={{
                              color: 'grey',
                              fontSize: '0.8rem',
                              wordBreak: 'break-word',
                            }}
                            text={`${val?.description}`}
                          />
                          {/* <Text font={"Sora"}
                      sx={{
                        color: 'grey',
                        fontSize: '0.8rem',
                        wordBreak: 'break-word',
                      }}
                      text={`River Restoration Project River Restoration Project`}
                    /> */}
                        </Box>
                      </Box>
                    </Box>
                  ))}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
