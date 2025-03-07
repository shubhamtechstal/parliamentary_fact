import { Box, Button, Divider } from '@mui/material';
import StateAttendance from 'components/attendence/StateAttendance';
// import ParliamentPerformanceCard from 'components/common/cards/ParliamentPerformanceCard';
import Text from 'components/common/Text';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { useState } from 'react';
import LS_attendance from 'components/pmt_performance/LS_attendance';

export default function ParliamentAttendanceContainer() {
  const [filter, setFilter] = useState(false);
  const handleFilterClick = () => {
    setFilter(!filter);
  };
  return (
    <>
      {/* <Box sx={{display:'flex'}}>
    <ParliamentPerformanceCard/>
    <StateAttendance/>
    </Box> */}

      <Box sx={{ width: '90%', margin: 'auto', marginTop: '2rem' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Text
              sx={{
                fontSize: '1.3rem',
                color: '#434343',
                letterSpacing: '-0.3px',
                fontWeight: 500,
              }}
              font={'Sora'}
              text={'MPS PARTICIPATION IN LOK SABHA ATTENDANCE'}
            />
            {/* <Text
              sx={{
                fontSize: '1rem',
                marginTop: '1rem',
                color: '#434343',
                letterSpacing: '-0.3px',
                fontWeight: 500,
              }}
              font={'Sora'}
              text={'Lok Sabha Attendance'}
            /> */}
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
            {filter ? 'Clear' : 'Filter'}
          </Button>
        </Box>
        <LS_attendance />
        <Divider sx={{ margin: '1rem' }} />
        <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Box
            sx={{ height: '1rem', width: '1rem', background: '#ff000070' }}
            className="MobileViewRemove"
          ></Box>
          <Text
            font={'Sora'}
            sx={{ fontWeight: '600', marginTop: '0.1rem' }}
            text={'State Wise'}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
            margin: '2rem 1rem',
            alignItems: 'center',
          }}
        >
          <Text
            font={'Sora'}
            sx={{
              fontWeight: '500',
              color: '#00000080',
              marginTop: '0.1rem',
              paddingRight: '1rem',
              borderRight: '2px solid #00000050',
            }}
          >
            Current MPs <br />
            in LS
          </Text>
          <Text
            font={'Sora'}
            sx={{
              fontWeight: '500',
              color: '#00000080',
              marginTop: '0.1rem',
              paddingRight: '1rem',
              borderRight: '2px solid #FF936F',
            }}
          >
            <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>540</span>{' '}
            out of <span style={{ fontSize: '1.5rem' }}>543</span>
          </Text>
          <Text
            font={'Sora'}
            sx={{
              fontWeight: '500',
              color: '#00000080',
              marginTop: '0.1rem',
              paddingRight: '1rem',
              borderRight: '2px solid #00000050',
            }}
          >
            Eligible MPs <br />
            in Performance
          </Text>
          <Text
            font={'Sora'}
            sx={{
              fontWeight: '500',
              color: '#00000080',
              marginTop: '0.1rem',
              paddingRight: '1rem',
            }}
          >
            <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>501</span>{' '}
            out of <span style={{ fontSize: '1.5rem' }}>540</span>
          </Text>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <StateAttendance key={index} />
          ))}
        </Box>
      </Box>
    </>
  );
}
