import { Box, Button, Divider } from '@mui/material';
import StateAttendance from 'components/attendence/StateAttendance';
import Text from 'components/common/Text';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { useEffect, useState } from 'react';
import LS_attendance from 'components/pmt_performance/LS_attendance';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPerformanceData } from 'stores/redux/apiSlices/pmt_PerformanceSlice';
import SectionHeading from 'components/common/SectionHeading';
import GrayButton from 'components/common/GrayButton';

export default function LsAttendanceDetails_Component() {
  const [filter, setFilter] = useState(false);
  const handleFilterClick = () => {
    setFilter(!filter);
  };
  const dispatch = useDispatch();
  const { pageData } = useSelector((state) => state?.pmtPerformance);
  useEffect(() => {
    dispatch(fetchPerformanceData());
  }, [dispatch]);
  return (
    <>
      <Box className="performanceSection">
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
          </Box>
          <GrayButton
            className="MobileViewRemove"
            onClick={() => handleFilterClick()}
            startIcon={<FilterAltOutlinedIcon />}
          >
            {filter ? 'Clear' : 'Filter'}
          </GrayButton>
        </Box>
        <LS_attendance
          attendance_details={pageData?.attendance_details}
          pageData={pageData}
        />
        <Divider sx={{ margin: '1rem' }} />
        <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <SectionHeading title={'State Wise'} />
          {/* <Box
            sx={{ height: '1rem', width: '1rem', background: '#ff000070' }}
            className="MobileViewRemove"
          ></Box>
          <Text
            font={'Sora'}
            sx={{ fontWeight: '600', marginTop: '0.1rem' }}
            text={'State Wise'}
          /> */}
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
            gap: '1rem 0',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <Box sx={{width : {xs :'12rem', md:'25%'}}}>
                <StateAttendance key={index} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
