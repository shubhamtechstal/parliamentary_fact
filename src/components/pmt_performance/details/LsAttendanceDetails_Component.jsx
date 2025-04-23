import { Autocomplete, Box, Divider, Skeleton, TextField } from '@mui/material';
import StateAttendance from 'components/attendence/StateAttendance';
import Text from 'components/common/Text';
import { useEffect, useState } from 'react';
import LS_attendance from 'components/pmt_performance/LS_attendance';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAttendanceDetailsData } from 'stores/redux/apiSlices/pmt_PerformanceSlice';
import SectionHeading from 'components/common/SectionHeading';
import GrayButton from 'components/common/GrayButton';
import FilterController from 'components/common/modals/FilterController';
import AdvertiseSection from 'components/addLayout/HorizontalAdvertiseSection';

export default function LsAttendanceDetails_Component() {
  const dispatch = useDispatch();
  const { attendanceDetailsPageData, attendanceLoading } = useSelector(
    (state) => state?.pmtPerformance
  );
  const [appliedFilterFromPoup, setAppliedFilterFromPoup] = useState(null);
  useEffect(() => {
    dispatch(fetchAttendanceDetailsData(appliedFilterFromPoup));
  }, [dispatch, appliedFilterFromPoup]);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedParty, setSelectedParty] = useState(null);
  const [loadParties, setLoadParties] = useState(null);
  const [loadmoreStates, setLoadmoreStates] = useState(null);

  // const stateWiseData = [/* Your full state data here */];
  const partiesList = attendanceDetailsPageData?.partywise_summary?.map(
    (item) => item.title
  );
  const statesList = attendanceDetailsPageData?.statewise_summary?.map(
    (item) => item.title
  );

  const filteredStatesData = selectedState
    ? attendanceDetailsPageData?.statewise_summary?.filter(
        (item) => item.title === selectedState
      )
    : attendanceDetailsPageData?.statewise_summary;
  const filteredPartiesData = selectedParty
    ? attendanceDetailsPageData?.partywise_summary?.filter(
        (item) => item.title === selectedParty
      )
    : attendanceDetailsPageData?.partywise_summary;
  return (
    <>
      <Box className="performanceSection">
        <Box
          sx={{
            display: { md: 'flex', xs: 'block' },
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: { xs: 'right', md: 'left' },
          }}
        >
          <Text
            sx={{
              fontSize: '1.3rem',
              color: '#434343',
              letterSpacing: '-0.3px',
              fontWeight: 500,
              textAlign: { xs: 'center', md: 'left' },
            }}
            font={'Sora'}
            text={'MPS PARTICIPATION IN LOK SABHA ATTENDANCE'}
          />
          <Box  sx={{ position:{ xs : 'absolute', md:'static'}, right: 11, top:11}}>
            <FilterController
              setAppliedFilter={(e) => setAppliedFilterFromPoup(e)}
            />
          </Box>
        </Box>
        <LS_attendance
          attendance_details={attendanceDetailsPageData?.attendance_summary}
          pageData={attendanceDetailsPageData?.attendance_percentage}
          // attendance_percentage={attendance_percentage}
        />
        <Box id="State_Wise">
          <Divider sx={{ margin: '1rem' }} />
          <Box
            sx={{
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <SectionHeading title={'State Wise'} />
            <Autocomplete
              options={statesList}
              value={selectedState}
              onChange={(e, newValue) => setSelectedState(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search State Name"
                  variant="standard"
                />
              )}
              sx={{ width: { md: 300, xs: 200 }, marginBottom: 2 }}
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
              gap: '1rem 0',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {selectedState &&
              filteredStatesData.map((item, index) => (
                <Box
                  sx={{
                    width: { xs: '12rem', md: '20%' },
                    background: '#ab8f8f',
                    color: '#fff',
                    borderRadius: '5px',
                    padding: '1rem',
                  }}
                >
                  <StateAttendance item={item} key={index} textColor="#fff" />
                  <small> Your selected State </small>
                </Box>
              ))}
            {attendanceLoading ? (
              <Box
                sx={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                {Array.from({ length: 12 }).map((_, index) => (
                  <Box
                    sx={{
                      width: { xs: '12rem', md: '20%' },
                      display: 'flex',
                      gap: '1rem',
                    }}
                  >
                    <Skeleton variant="circular" height={80} width={80} />
                    <Skeleton variant="rectangular" height={80} width={5} />
                    <Skeleton variant="rounded" height={80} width={80} />
                  </Box>
                ))}
              </Box>
            ) : (
              (loadmoreStates
                ? attendanceDetailsPageData?.statewise_summary
                : attendanceDetailsPageData?.statewise_summary?.slice(0, 12)
              )?.map((item, index) => (
                <Box sx={{ width: { xs: '12rem', md: '25%' } }}>
                  <StateAttendance item={item} key={index} />
                </Box>
              ))
            )}
          </Box>
          {attendanceDetailsPageData?.statewise_summary?.length > 12 && (
            <Box
              display={'flex'}
              justifyContent={{ xs: 'center', md: 'end' }}
              alignItems={'center'}
              marginTop={2}
            >
              <GrayButton onClick={() => setLoadmoreStates((prev) => !prev)}>
                {loadmoreStates ? 'View Less' : 'View more'}
              </GrayButton>
            </Box>
          )}
        </Box>
      </Box>
      <AdvertiseSection />
      <Box
        className="performanceSection"
        id="Party_Wise"
        sx={{ backgroundColor: '#fff' }}
      >
        <Divider sx={{ margin: '0 0 1rem' }} />
        <Box
          sx={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <SectionHeading title={'Party Wise'} />
          <Autocomplete
            options={partiesList}
            value={selectedParty}
            onChange={(e, newValue) => setSelectedParty(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Party Name"
                variant="standard"
              />
            )}
            sx={{ width: { md: 300, xs: 200 }, marginBottom: 2 }}
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
            gap: '1rem 0',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {selectedParty &&
            filteredPartiesData.map((item, index) => (
              <Box
                sx={{
                  width: { xs: '12rem', md: 'auto' },
                  background: '#ab8f8f',
                  color: '#fff',
                  borderRadius: '5px',
                  padding: '1rem',
                }}
              >
                <StateAttendance item={item} key={index} textColor="#fff" />
                <small> Your selected Paty </small>
              </Box>
            ))}
          {attendanceLoading ? (
            <Box
              sx={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              {Array.from({ length: 12 }).map((_, index) => (
                <Box
                  sx={{
                    width: { xs: '12rem', md: '20%' },
                    display: 'flex',
                    gap: '1rem',
                  }}
                >
                  <Skeleton variant="circular" height={80} width={80} />
                  <Skeleton variant="rectangular" height={80} width={5} />
                  <Skeleton variant="rounded" height={80} width={80} />
                </Box>
              ))}
            </Box>
          ) : (
            (loadParties
              ? attendanceDetailsPageData?.partywise_summary
              : attendanceDetailsPageData?.partywise_summary?.slice(0, 12)
            )?.map((item, index) => (
              <Box key={index} sx={{ width: { xs: '12rem', md: '25%' } }}>
                <StateAttendance key={index} item={item} />
              </Box>
            ))
          )}
        </Box>
        {attendanceDetailsPageData?.partywise_summary?.length > 12 && (
          <Box
            display={'flex'}
            justifyContent={{ xs: 'center', md: 'end' }}
            alignItems={'center'}
            marginTop={2}
          >
            <GrayButton onClick={() => setLoadParties((prev) => !prev)}>
              {' '}
              {loadParties ? 'View less' : 'View more'}
            </GrayButton>
          </Box>
        )}
      </Box>
    </>
  );
}
