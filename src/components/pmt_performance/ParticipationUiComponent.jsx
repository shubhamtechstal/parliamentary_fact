import { Autocomplete, Box, Divider, Skeleton, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SectionHeading from 'components/common/SectionHeading';
import Text from 'components/common/Text';
import GrayButton from 'components/common/GrayButton';
import FilterController from 'components/common/modals/FilterController';
import AdvertiseSection from 'components/addLayout/HorizontalAdvertiseSection';
import LS_attendance from './pmt_prfrmc_home/LS_attendance';

export const MPText = ({ label, value }) => (
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
    {label}
    <br />
    <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>{value}</span>
  </Text>
);

export const CardList = ({
  data = [],
  loading,
  RenderCard,
  loadMore,
  setLoadMore,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '1rem 0',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      {loading
        ? Array.from({ length: 12 }).map((_, index) => (
            <Box
              key={index}
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
          ))
        : (loadMore ? data : data?.slice(0, 12)).map((item, index) => (
            <Box key={index} sx={{ width: { xs: '12rem', md: '25%' } }}>
              <RenderCard item={item} key={index} />
            </Box>
          ))}

      {data?.length > 12 && (
        <Box
          display={'flex'}
          justifyContent={{ xs: 'center', md: 'end' }}
          alignItems={'center'}
          marginTop={2}
          width={'100%'}
        >
          <GrayButton onClick={() => setLoadMore((prev) => !prev)}>
            {loadMore ? 'View Less' : 'View More'}
          </GrayButton>
        </Box>
      )}
    </Box>
  );
};
export default function ParticipationUiComponent({
  title = 'Attendance Summary',
  stateLabel = 'State Wise',
  partyLabel = 'Party Wise',
  fetchAction,
  dataSelector,
  RenderCard,
  mpStats = { total: 543, current: 540, eligible: 501 },
}) {
  const dispatch = useDispatch();
  const { attendanceDetailsPageData, attendanceLoading } =
    useSelector(dataSelector);
  const [appliedFilterFromPoup, setAppliedFilterFromPoup] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedParty, setSelectedParty] = useState(null);
  const [loadParties, setLoadParties] = useState(false);
  const [loadmoreStates, setLoadmoreStates] = useState(false);

  useEffect(() => {
    if (fetchAction) {
      dispatch(fetchAction(appliedFilterFromPoup));
    }
  }, [dispatch, fetchAction, appliedFilterFromPoup]);

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
            justifyContent: 'right',
            alignItems: 'center',
            textAlign: { xs: 'right', md: 'left' },
          }}
        >
          {/* <Text
            sx={{
              fontSize: '1.3rem',
              color: '#434343',
              fontWeight: 500,
              textAlign: { xs: 'center', md: 'left' },
            }}
            font={'Sora'}
            text={title}
          /> */}
          <Box
            sx={{
              position: { xs: 'absolute', md: 'static' },
              right: 11,
              top: 11,
            }}
          >
            <FilterController
              setAppliedFilter={(e) => setAppliedFilterFromPoup(e)}
            />
          </Box>
        </Box>

        <LS_attendance
          attendance_details={attendanceDetailsPageData?.attendance_summary}
          percentageValue={
            attendanceDetailsPageData?.attendance_percentage?.value
          }
          titleHeadign={'Lok Sabha Questions'}
        />

        {/* State Wise Section */}
        <Box id="State_Wise">
          <Divider sx={{ margin: '1rem' }} />
          <Text
            sx={{
              fontSize: '1.3rem',
              color: '#434343',
              fontWeight: 500,
              textAlign: { xs: 'center', md: 'left' },
            }}
            font={'Sora'}
            text={title}
          />
          <Box
            sx={{
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <SectionHeading title={stateLabel} />
            <Autocomplete
              options={statesList || []}
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
            <MPText
              label="Current MPs in LS"
              value={`${mpStats.current} out of ${mpStats.total}`}
            />
            <MPText
              label="Eligible MPs in Performance"
              value={`${mpStats.eligible} out of ${mpStats.current}`}
            />
          </Box>

          <CardList
            data={filteredStatesData}
            loading={attendanceLoading}
            RenderCard={RenderCard}
            loadMore={loadmoreStates}
            setLoadMore={setLoadmoreStates}
          />
        </Box>
      </Box>

      <AdvertiseSection />

      {/* Party Wise Section */}
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
          <SectionHeading title={partyLabel} />
          <Autocomplete
            options={partiesList || []}
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
          <MPText
            label="Current MPs in LS"
            value={`${mpStats.current} out of ${mpStats.total}`}
          />
          <MPText
            label="Eligible MPs in Performance"
            value={`${mpStats.eligible} out of ${mpStats.current}`}
          />
        </Box>

        <CardList
          data={filteredPartiesData}
          loading={attendanceLoading}
          RenderCard={RenderCard}
          loadMore={loadParties}
          setLoadMore={setLoadParties}
        />
      </Box>
    </>
  );
}
