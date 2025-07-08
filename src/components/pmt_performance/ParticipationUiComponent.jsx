import { Autocomplete, Box, Divider, Skeleton, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SectionHeading from 'components/common/SectionHeading';
import Text from 'components/common/Text';
import GrayButton from 'components/common/GrayButton';
import FilterController from 'components/common/modals/FilterController';
import AdvertiseSection from 'components/addLayout/HorizontalAdvertiseSection';
import LS_attendance from './pmt_prfrmc_home/LS_attendance';
import StateAttendance from 'components/attendence/StateAttendance';
import Loader from 'components/common/Loader';

// export const MPText = ({ label, value }) => (
//   <Text
//     font={'Sora'}
//     sx={{
//       fontWeight: '500',
//       color: '#00000080',
//       marginTop: '0.1rem',
//       paddingRight: '1rem',
//       borderRight: '2px solid #00000050',
//     }}
//   >
//     {label}
//     <br />
//     <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>{value}</span>
//   </Text>
// );

export const CardList = ({
  data = [],
  loading,
  loadMore,
  setLoadMore,
  isSelectedCard,
  filteredData,
  selectedCardText,
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
      {isSelectedCard &&
        filteredData.map((item, index) => (
          <Box
            sx={{
              width: { xs: '12rem', md: '17rem' },
              overflow: 'auto',
              background: '#ab8f8f',
              color: '#fff',
              borderRadius: '5px',
              padding: '1rem',
            }}
          >
            <StateAttendance item={item} key={index} textColor="#fff" />
            <small>{selectedCardText ?? ' Your selected State '}</small>
          </Box>
        ))}
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
              <StateAttendance item={item} key={index} />
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
  pageName,
  fetchAction,
  dataSelector,
  mpStats = { total: 543, current: 540, eligible: 501 },
}) {
  const dispatch = useDispatch();
  const { attendanceDetailsPageData, attendanceLoading } =
    useSelector(dataSelector);
  const [appliedFilterFromPoup, setAppliedFilterFromPoup] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedParty, setSelectedParty] = useState(null);
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [loadParties, setLoadParties] = useState(false);
  const [loadQuilification, setLoadQuilification] = useState(false);
  const [loadProfessions, setLoadProfessions] = useState(false);
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
  const professionList = attendanceDetailsPageData?.professionwise_summary?.map(
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

  const filteredProfessionData = selectedProfession
    ? attendanceDetailsPageData?.professionwise_summary?.filter(
        (item) => item.title === selectedProfession
      )
    : attendanceDetailsPageData?.professionwise_summary;

  return attendanceLoading ? (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Loader position="relative" loading />
    </Box>
  ) : (
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
          titleHeadign={`Lok Sabha ${pageName}`}
          meterTitleText ={pageName}
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
            <SectionHeading title={`State Wise ${pageName}`} />
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
              <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
                {mpStats.current}
              </span>{' '}
              out of <span style={{ fontSize: '1.5rem' }}>{mpStats.total}</span>
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
              <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
                {mpStats.eligible}
              </span>{' '}
              out of{' '}
              <span style={{ fontSize: '1.5rem' }}>{mpStats.current}</span>
            </Text>
          </Box>

          <CardList
            filteredData={filteredStatesData}
            isSelectedCard={selectedState}
            data={attendanceDetailsPageData?.statewise_summary}
            loading={attendanceLoading}
            loadMore={loadmoreStates}
            setLoadMore={setLoadmoreStates}
            selectedCardText="Your selected State"
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
          <SectionHeading title={`Party Wise ${pageName}`} />
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
            <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
              {mpStats.current}
            </span>{' '}
            out of <span style={{ fontSize: '1.5rem' }}>{mpStats.total}</span>
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
            <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
              {mpStats.eligible}
            </span>{' '}
            out of <span style={{ fontSize: '1.5rem' }}>{mpStats.current}</span>
          </Text>
        </Box>

        <CardList
          filteredData={filteredPartiesData}
          isSelectedCard={selectedParty}
          data={attendanceDetailsPageData?.partywise_summary}
          loading={attendanceLoading}
          loadMore={loadParties}
          setLoadMore={setLoadParties}
          selectedCardText="Your selected Party"
        />
      </Box>
      <AdvertiseSection />
      {/* age Wise Section */}
      <Box className="performanceSection" id="age_wise">
        <Divider sx={{ margin: '0 0 1rem' }} />
        <Box
          sx={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <SectionHeading title={`Age Wise ${pageName}`} />
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
            <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
              {mpStats.current}
            </span>{' '}
            out of <span style={{ fontSize: '1.5rem' }}>{mpStats.total}</span>
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
            <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
              {mpStats.eligible}
            </span>{' '}
            out of <span style={{ fontSize: '1.5rem' }}>{mpStats.current}</span>
          </Text>
        </Box>
        <CardList
          // filteredData={filteredPartiesData}
          // isSelectedCard={selectedParty}
          data={attendanceDetailsPageData?.agewise_summary}
          loading={attendanceLoading}
          // loadMore={loadParties}
          // setLoadMore={setLoadParties}
          // selectedCardText = 'Your selected Age Group'
        />
      </Box>
      <AdvertiseSection />
      {/* profession  Wise Section */}
      <Box
        className="performanceSection"
        id="profession_wise"
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
          <SectionHeading title={`Profession Wise ${pageName}`} />
          <Autocomplete
            options={professionList || []}
            value={selectedProfession}
            onChange={(e, newValue) => setSelectedProfession(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Age group"
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
            <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
              {mpStats.current}
            </span>{' '}
            out of <span style={{ fontSize: '1.5rem' }}>{mpStats.total}</span>
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
            <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
              {mpStats.eligible}
            </span>{' '}
            out of <span style={{ fontSize: '1.5rem' }}>{mpStats.current}</span>
          </Text>
        </Box>
        <CardList
          filteredData={filteredProfessionData}
          isSelectedCard={selectedProfession}
          data={attendanceDetailsPageData?.professionwise_summary}
          loading={attendanceLoading}
          loadMore={loadProfessions}
          setLoadMore={setLoadProfessions}
          selectedCardText="Your selected Profession"
        />
      </Box>
      <AdvertiseSection />
      {/* quilification   Wise Section */}
      <Box className="performanceSection" id="quilification_wise">
        <Divider sx={{ margin: '0 0 1rem' }} />
        <Box
          sx={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <SectionHeading title={`Quilification  Wise ${pageName}`} />
          {/* <Autocomplete
            options={partiesList || []}
            value={selectedParty}
            onChange={(e, newValue) => setSelectedParty(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Age group"
                variant="standard"
              />
            )}
            sx={{ width: { md: 300, xs: 200 }, marginBottom: 2 }}
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
            <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
              {mpStats.current}
            </span>{' '}
            out of <span style={{ fontSize: '1.5rem' }}>{mpStats.total}</span>
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
            <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
              {mpStats.eligible}
            </span>{' '}
            out of <span style={{ fontSize: '1.5rem' }}>{mpStats.current}</span>
          </Text>
        </Box>
        <CardList
          // filteredData={filteredPartiesData}
          // isSelectedCard={selectedParty}
          data={attendanceDetailsPageData?.qualificationwise_summary}
          loading={attendanceLoading}
          loadMore={loadQuilification}
          setLoadMore={setLoadQuilification}
          selectedCardText="Your selected Quilification"
        />
      </Box>
      <AdvertiseSection />
      {/* Term  Wise Section */}
      <Box
        className="performanceSection"
        id="term_wise"
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
          <SectionHeading title={`Term Wise ${pageName}`} />
          {/* <Autocomplete
            options={partiesList || []}
            value={selectedParty}
            onChange={(e, newValue) => setSelectedParty(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Age group"
                variant="standard"
              />
            )}
            sx={{ width: { md: 300, xs: 200 }, marginBottom: 2 }}
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
            <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
              {mpStats.current}
            </span>{' '}
            out of <span style={{ fontSize: '1.5rem' }}>{mpStats.total}</span>
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
            <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
              {mpStats.eligible}
            </span>{' '}
            out of <span style={{ fontSize: '1.5rem' }}>{mpStats.current}</span>
          </Text>
        </Box>
        <CardList
          // filteredData={filteredPartiesData}
          // isSelectedCard={selectedParty}
          data={attendanceDetailsPageData?.termwise_summary}
          loading={attendanceLoading}
          loadMore={loadParties}
          setLoadMore={setLoadParties}
          selectedCardText="Your selected Term"
        />
      </Box>
      <AdvertiseSection />
      {/* catagory   Wise Section */}
      <Box
        className="performanceSection"
        id="catagory_wise"
        // sx={{ backgroundColor: '#fff' }}
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
          <SectionHeading title={`Catagory Wise ${pageName}`} />
          {/* <Autocomplete
            options={partiesList || []}
            value={selectedParty}
            onChange={(e, newValue) => setSelectedParty(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Age group"
                variant="standard"
              />
            )}
            sx={{ width: { md: 300, xs: 200 }, marginBottom: 2 }}
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
            <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
              {mpStats.current}
            </span>{' '}
            out of <span style={{ fontSize: '1.5rem' }}>{mpStats.total}</span>
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
            <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
              {mpStats.eligible}
            </span>{' '}
            out of <span style={{ fontSize: '1.5rem' }}>{mpStats.current}</span>
          </Text>
        </Box>
        <CardList
          // filteredData={filteredPartiesData}
          // isSelectedCard={selectedParty}
          data={attendanceDetailsPageData?.categorywise_summary}
          loading={attendanceLoading}
          loadMore={loadParties}
          setLoadMore={setLoadParties}
          selectedCardText="Your selected Catagory"
        />
      </Box>
    </>
  );
}
