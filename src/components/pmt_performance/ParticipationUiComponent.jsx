import { Autocomplete, Box, Divider, Skeleton, TextField } from '@mui/material';
import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SectionHeading from 'components/common/SectionHeading';
import Text from 'components/common/Text';
import GrayButton from 'components/common/GrayButton';
import FilterController from 'components/common/modals/FilterController';
import AdvertiseSection from 'components/addLayout/HorizontalAdvertiseSection';
import LS_attendance from './pmt_prfrmc_home/LS_attendance';
import StateAttendance from 'components/attendence/StateAttendance';
import Loader from 'components/common/Loader';

// Constants for styles
const TEXT_STYLE = {
  fontWeight: '500',
  color: '#00000080',
  marginTop: '0.1rem',
  paddingRight: '1rem',
};

const BORDER_STYLE = {
  borderRight: '2px solid #00000050',
};

const HIGHLIGHT_STYLE = {
  color: '#FF936F',
  fontSize: '1.5rem',
};

// Reusable MP Stats Component
const MPStats = ({ current, total, eligible }) => (
  <Box
    sx={{
      display: 'flex',
      gap: '1rem',
      margin: '2rem 1rem',
      alignItems: 'center',
    }}
  >
    <Text font="Sora" sx={{ ...TEXT_STYLE, ...BORDER_STYLE }}>
      Current MPs <br /> in LS
    </Text>
    <Text font="Sora" sx={{ ...TEXT_STYLE, borderRight: '2px solid #FF936F' }}>
      <span style={HIGHLIGHT_STYLE}>{current}</span> out of{' '}
      <span style={{ fontSize: '1.5rem' }}>{total}</span>
    </Text>
    <Text font="Sora" sx={{ ...TEXT_STYLE, ...BORDER_STYLE }}>
      Eligible MPs <br /> in Performance
    </Text>
    <Text font="Sora" sx={TEXT_STYLE}>
      <span style={HIGHLIGHT_STYLE}>{eligible}</span> out of{' '}
      <span style={{ fontSize: '1.5rem' }}>{current}</span>
    </Text>
  </Box>
);

// Reusable CardList Component (unchanged but included for completeness)
const CardList = ({
  data = [],
  loading,
  loadMore,
  setLoadMore,
  isSelectedCard,
  filteredData,
  selectedCardText,
}) => (
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
      filteredData?.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: { xs: '12rem', md: '17rem' },
            overflow: 'auto',
            background: '#ab8f8f',
            color: '#fff',
            borderRadius: '5px',
            padding: '1rem',
          }}
        >
          <StateAttendance item={item} textColor="#fff" />
          <small>{selectedCardText ?? 'Your selected item'}</small>
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
      : (loadMore ? data : data?.slice(0, 12))?.map((item, index) => (
          <Box key={index} sx={{ width: { xs: '12rem', md: '25%' } }}>
            <StateAttendance item={item} />
          </Box>
        ))}
    {data?.length > 12 && (
      <Box
        display="flex"
        justifyContent={{ xs: 'center', md: 'end' }}
        alignItems="center"
        marginTop={2}
        width="100%"
      >
        <GrayButton onClick={() => setLoadMore((prev) => !prev)}>
          {loadMore ? 'View Less' : 'View More'}
        </GrayButton>
      </Box>
    )}
  </Box>
);

// Reusable Section Component
const DataSection = ({
  id,
  title,
  pageName,
  data,
  loading,
  selectedValue,
  setSelectedValue,
  options,
  loadMore,
  setLoadMore,
  mpStats,
  selectedCardText,
  autocompleteLabel,
}) => (
  <Box
    className="performanceSection"
    id={id}
    sx={{ backgroundColor: id.includes('wise') ? '#fff' : 'inherit' }}
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
      <SectionHeading title={`${title} ${pageName}`} />
      {options && autocompleteLabel && (
        <Autocomplete
          options={options || []}
          value={selectedValue}
          onChange={(e, newValue) => setSelectedValue(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label={autocompleteLabel}
              variant="standard"
            />
          )}
          sx={{ width: { md: 300, xs: 200 }, marginBottom: 2 }}
        />
      )}
    </Box>
    <MPStats {...mpStats} />
    <CardList
      filteredData={
        selectedValue
          ? data?.filter((item) => item.title === selectedValue)
          : data
      }
      isSelectedCard={!!selectedValue}
      data={data}
      loading={loading}
      loadMore={loadMore}
      setLoadMore={setLoadMore}
      selectedCardText={selectedCardText}
    />
  </Box>
);

// Configuration for sections
const SECTIONS = [
  {
    id: 'State_Wise',
    title: 'State Wise',
    dataKey: 'statewise_summary',
    loadMoreKey: 'states',
    selectedKey: 'state',
    autocompleteLabel: 'Search State Name',
    selectedCardText: 'Your selected State',
  },
  {
    id: 'Party_Wise',
    title: 'Party Wise',
    dataKey: 'partywise_summary',
    loadMoreKey: 'parties',
    selectedKey: 'party',
    autocompleteLabel: 'Search Party Name',
    selectedCardText: 'Your selected Party',
  },
  {
    id: 'age_wise',
    title: 'Age Wise',
    dataKey: 'agewise_summary',
    loadMoreKey: 'parties', // Note: Reusing parties for simplicity; consider separate state if needed
    selectedKey: null,
    autocompleteLabel: null,
    selectedCardText: 'Your selected Age Group',
  },
  {
    id: 'profession_wise',
    title: 'Profession Wise',
    dataKey: 'professionwise_summary',
    loadMoreKey: 'professions',
    selectedKey: 'profession',
    autocompleteLabel: 'Select Age group', // Note: Label seems incorrect in original; kept as is
    selectedCardText: 'Your selected Profession',
  },
  {
    id: 'quilification_wise',
    title: 'Qualification Wise',
    dataKey: 'qualificationwise_summary',
    loadMoreKey: 'qualification',
    selectedKey: null,
    autocompleteLabel: null,
    selectedCardText: 'Your selected Qualification',
  },
  {
    id: 'term_wise',
    title: 'Term Wise',
    dataKey: 'termwise_summary',
    loadMoreKey: 'parties', // Note: Reusing parties; consider separate state
    selectedKey: null,
    autocompleteLabel: null,
    selectedCardText: 'Your selected Term',
  },
  {
    id: 'catagory_wise',
    title: 'Category Wise',
    dataKey: 'categorywise_summary',
    loadMoreKey: 'parties', // Note: Reusing parties; consider separate state
    selectedKey: null,
    autocompleteLabel: null,
    selectedCardText: 'Your selected Category',
  },
];

// Main Component
export default function ParticipationUiComponent({
  title = 'Attendance Summary',
  pageName,
  fetchAction,
  dataSelector,
  // mpStats = { total: 543, current: 540, eligible: 501 },
}) {
  const dispatch = useDispatch();
  const { attendanceDetailsPageData, attendanceLoading } =
    useSelector(dataSelector);
  let eligible_mps = attendanceDetailsPageData?.eligible_mps || {};
  let total_number_of_mps =
    attendanceDetailsPageData?.total_number_of_mps || {};

  const mpStats = {
    total: eligible_mps?.out_of_total_mp,
    current: total_number_of_mps?.total_mps,
    eligible: eligible_mps?.total_mps,
  };
  const [appliedFilterFromPoup, setAppliedFilterFromPoup] = useState(null);
  const [loadMoreStates, setLoadMore] = useState({
    states: false,
    parties: false,
    professions: false,
    qualification: false,
  });
  const [selectedValues, setSelectedValues] = useState({
    state: null,
    party: null,
    profession: null,
  });

  useEffect(() => {
    if (fetchAction) {
      dispatch(fetchAction(appliedFilterFromPoup));
    }
  }, [dispatch, fetchAction, appliedFilterFromPoup]);

  const getOptions = (dataKey) =>
    attendanceDetailsPageData?.[dataKey]?.map((item) => item.title) || [];

  const handleLoadMore = (key) => {
    setLoadMore((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSelectedValue = (key, value) => {
    setSelectedValues((prev) => ({ ...prev, [key]: value }));
  };

  if (attendanceLoading) {
    return (
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
    );
  }

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
          <Box
            sx={{
              position: { xs: 'absolute', md: 'static' },
              right: 11,
              top: 11,
            }}
          >
            <FilterController setAppliedFilter={setAppliedFilterFromPoup} />
          </Box>
        </Box>

        <LS_attendance
          attendance_details={attendanceDetailsPageData?.attendance_summary}
          percentageValue={
            attendanceDetailsPageData?.attendance_percentage?.value
          }
          titleHeadign={`Lok Sabha ${pageName}`}
          meterTitleText={pageName}
          chartData={
            attendanceDetailsPageData?.session_wise_attendance_percentage
          }
        />

        <Box id="State_Wise">
          <Divider sx={{ margin: '1rem' }} />
          <Text
            sx={{
              fontSize: '1.3rem',
              color: '#434343',
              fontWeight: 500,
              textAlign: { xs: 'center', md: 'left' },
            }}
            font="Sora"
            text={title}
          />
        </Box>
      </Box>

      {SECTIONS.map((section) => (
        <Box key={section.id}>
          <DataSection
            id={section.id}
            title={section.title}
            pageName={pageName}
            data={attendanceDetailsPageData?.[section.dataKey]}
            loading={attendanceLoading}
            selectedValue={
              section.selectedKey ? selectedValues[section.selectedKey] : null
            }
            setSelectedValue={(value) =>
              section.selectedKey &&
              handleSelectedValue(section.selectedKey, value)
            }
            options={getOptions(section.dataKey)}
            loadMore={loadMoreStates[section.loadMoreKey]}
            setLoadMore={() => handleLoadMore(section.loadMoreKey)}
            mpStats={mpStats}
            selectedCardText={section.selectedCardText}
            autocompleteLabel={section.autocompleteLabel}
          />
          <AdvertiseSection />
        </Box>
      ))}
    </>
  );
}

// PropTypes for type safety
ParticipationUiComponent.propTypes = {
  title: PropTypes.string,
  pageName: PropTypes.string,
  fetchAction: PropTypes.func,
  dataSelector: PropTypes.func,
  mpStats: PropTypes.shape({
    total: PropTypes.number,
    current: PropTypes.number,
    eligible: PropTypes.number,
  }),
};

MPStats.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  eligible: PropTypes.number,
};

DataSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  pageName: PropTypes.string,
  data: PropTypes.array,
  loading: PropTypes.bool,
  selectedValue: PropTypes.string,
  setSelectedValue: PropTypes.func,
  options: PropTypes.array,
  loadMore: PropTypes.bool,
  setLoadMore: PropTypes.func,
  mpStats: PropTypes.object,
  selectedCardText: PropTypes.string,
  autocompleteLabel: PropTypes.string,
};

CardList.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  loadMore: PropTypes.bool,
  setLoadMore: PropTypes.func,
  isSelectedCard: PropTypes.bool,
  filteredData: PropTypes.array,
  selectedCardText: PropTypes.string,
};

// import { Autocomplete, Box, Divider, Skeleton, TextField } from '@mui/material';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import SectionHeading from 'components/common/SectionHeading';
// import Text from 'components/common/Text';
// import GrayButton from 'components/common/GrayButton';
// import FilterController from 'components/common/modals/FilterController';
// import AdvertiseSection from 'components/addLayout/HorizontalAdvertiseSection';
// import LS_attendance from './pmt_prfrmc_home/LS_attendance';
// import StateAttendance from 'components/attendence/StateAttendance';
// import Loader from 'components/common/Loader';

// // export const MPText = ({ label, value }) => (
// //   <Text
// //     font={'Sora'}
// //     sx={{
// //       fontWeight: '500',
// //       color: '#00000080',
// //       marginTop: '0.1rem',
// //       paddingRight: '1rem',
// //       borderRight: '2px solid #00000050',
// //     }}
// //   >
// //     {label}
// //     <br />
// //     <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>{value}</span>
// //   </Text>
// // );

// export const CardList = ({
//   data = [],
//   loading,
//   loadMore,
//   setLoadMore,
//   isSelectedCard,
//   filteredData,
//   selectedCardText,
// }) => {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         gap: '1rem 0',
//         flexWrap: 'wrap',
//         justifyContent: 'space-between',
//         width: '100%',
//       }}
//     >
//       {isSelectedCard &&
//         filteredData.map((item, index) => (
//           <Box
//             sx={{
//               width: { xs: '12rem', md: '17rem' },
//               overflow: 'auto',
//               background: '#ab8f8f',
//               color: '#fff',
//               borderRadius: '5px',
//               padding: '1rem',
//             }}
//           >
//             <StateAttendance item={item} key={index} textColor="#fff" />
//             <small>{selectedCardText ?? ' Your selected State '}</small>
//           </Box>
//         ))}
//       {loading
//         ? Array.from({ length: 12 }).map((_, index) => (
//             <Box
//               key={index}
//               sx={{
//                 width: { xs: '12rem', md: '20%' },
//                 display: 'flex',
//                 gap: '1rem',
//               }}
//             >
//               <Skeleton variant="circular" height={80} width={80} />
//               <Skeleton variant="rectangular" height={80} width={5} />
//               <Skeleton variant="rounded" height={80} width={80} />
//             </Box>
//           ))
//         : (loadMore ? data : data?.slice(0, 12)).map((item, index) => (
//             <Box key={index} sx={{ width: { xs: '12rem', md: '25%' } }}>
//               <StateAttendance item={item} key={index} />
//             </Box>
//           ))}

//       {data?.length > 12 && (
//         <Box
//           display={'flex'}
//           justifyContent={{ xs: 'center', md: 'end' }}
//           alignItems={'center'}
//           marginTop={2}
//           width={'100%'}
//         >
//           <GrayButton onClick={() => setLoadMore((prev) => !prev)}>
//             {loadMore ? 'View Less' : 'View More'}
//           </GrayButton>
//         </Box>
//       )}
//     </Box>
//   );
// };
// export default function ParticipationUiComponent({
//   title = 'Attendance Summary',
//   pageName,
//   fetchAction,
//   dataSelector,
//   mpStats = { total: 543, current: 540, eligible: 501 },
// }) {
//   const dispatch = useDispatch();
//   const { attendanceDetailsPageData, attendanceLoading } =
//     useSelector(dataSelector);
//     console.log('attendanceDetailsPageData', attendanceDetailsPageData)
//   const [appliedFilterFromPoup, setAppliedFilterFromPoup] = useState(null);
//   const [selectedState, setSelectedState] = useState(null);
//   const [selectedParty, setSelectedParty] = useState(null);
//   const [selectedProfession, setSelectedProfession] = useState(null);
//   const [loadParties, setLoadParties] = useState(false);
//   const [loadQuilification, setLoadQuilification] = useState(false);
//   const [loadProfessions, setLoadProfessions] = useState(false);
//   const [loadmoreStates, setLoadmoreStates] = useState(false);

//   useEffect(() => {
//     if (fetchAction) {
//       dispatch(fetchAction(appliedFilterFromPoup));
//     }
//   }, [dispatch, fetchAction, appliedFilterFromPoup]);

//   const partiesList = attendanceDetailsPageData?.partywise_summary?.map(
//     (item) => item.title
//   );
//   const statesList = attendanceDetailsPageData?.statewise_summary?.map(
//     (item) => item.title
//   );
//   const professionList = attendanceDetailsPageData?.professionwise_summary?.map(
//     (item) => item.title
//   );

//   const filteredStatesData = selectedState
//     ? attendanceDetailsPageData?.statewise_summary?.filter(
//         (item) => item.title === selectedState
//       )
//     : attendanceDetailsPageData?.statewise_summary;

//   const filteredPartiesData = selectedParty
//     ? attendanceDetailsPageData?.partywise_summary?.filter(
//         (item) => item.title === selectedParty
//       )
//     : attendanceDetailsPageData?.partywise_summary;

//   const filteredProfessionData = selectedProfession
//     ? attendanceDetailsPageData?.professionwise_summary?.filter(
//         (item) => item.title === selectedProfession
//       )
//     : attendanceDetailsPageData?.professionwise_summary;

//   return attendanceLoading ? (
//     <Box
//       sx={{
//         minHeight: '80vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Loader position="relative" loading />
//     </Box>
//   ) : (
//     <>
//       <Box className="performanceSection">
//         <Box
//           sx={{
//             display: { md: 'flex', xs: 'block' },
//             justifyContent: 'right',
//             alignItems: 'center',
//             textAlign: { xs: 'right', md: 'left' },
//           }}
//         >
//           <Box
//             sx={{
//               position: { xs: 'absolute', md: 'static' },
//               right: 11,
//               top: 11,
//             }}
//           >
//             <FilterController
//               setAppliedFilter={(e) => setAppliedFilterFromPoup(e)}
//             />
//           </Box>
//         </Box>

//         <LS_attendance
//           attendance_details={attendanceDetailsPageData?.attendance_summary}
//           percentageValue={
//             attendanceDetailsPageData?.attendance_percentage?.value
//           }
//           titleHeadign={`Lok Sabha ${pageName}`}
//           meterTitleText ={pageName}
//           // need to pass chart data but it's not available in the current state
//           chartData = {attendanceDetailsPageData?.session_wise_attendance_percentage}
//         />

//         {/* State Wise Section */}
//         <Box id="State_Wise">
//           <Divider sx={{ margin: '1rem' }} />
//           <Text
//             sx={{
//               fontSize: '1.3rem',
//               color: '#434343',
//               fontWeight: 500,
//               textAlign: { xs: 'center', md: 'left' },
//             }}
//             font={'Sora'}
//             text={title}
//           />
//           <Box
//             sx={{
//               display: 'flex',
//               gap: '0.5rem',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//             }}
//           >
//             <SectionHeading title={`State Wise ${pageName}`} />
//             <Autocomplete
//               options={statesList || []}
//               value={selectedState}
//               onChange={(e, newValue) => setSelectedState(newValue)}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   label="Search State Name"
//                   variant="standard"
//                 />
//               )}
//               sx={{ width: { md: 300, xs: 200 }, marginBottom: 2 }}
//             />
//           </Box>

//           <Box
//             sx={{
//               display: 'flex',
//               gap: '1rem',
//               margin: '2rem 1rem',
//               alignItems: 'center',
//             }}
//           >
//             <Text
//               font={'Sora'}
//               sx={{
//                 fontWeight: '500',
//                 color: '#00000080',
//                 marginTop: '0.1rem',
//                 paddingRight: '1rem',
//                 borderRight: '2px solid #00000050',
//               }}
//             >
//               Current MPs <br />
//               in LS
//             </Text>
//             <Text
//               font={'Sora'}
//               sx={{
//                 fontWeight: '500',
//                 color: '#00000080',
//                 marginTop: '0.1rem',
//                 paddingRight: '1rem',
//                 borderRight: '2px solid #FF936F',
//               }}
//             >
//               <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
//                 {mpStats.current}
//               </span>{' '}
//               out of <span style={{ fontSize: '1.5rem' }}>{mpStats.total}</span>
//             </Text>
//             <Text
//               font={'Sora'}
//               sx={{
//                 fontWeight: '500',
//                 color: '#00000080',
//                 marginTop: '0.1rem',
//                 paddingRight: '1rem',
//                 borderRight: '2px solid #00000050',
//               }}
//             >
//               Eligible MPs <br />
//               in Performance
//             </Text>
//             <Text
//               font={'Sora'}
//               sx={{
//                 fontWeight: '500',
//                 color: '#00000080',
//                 marginTop: '0.1rem',
//                 paddingRight: '1rem',
//               }}
//             >
//               <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
//                 {mpStats.eligible}
//               </span>{' '}
//               out of{' '}
//               <span style={{ fontSize: '1.5rem' }}>{mpStats.current}</span>
//             </Text>
//           </Box>

//           <CardList
//             filteredData={filteredStatesData}
//             isSelectedCard={selectedState}
//             data={attendanceDetailsPageData?.statewise_summary}
//             loading={attendanceLoading}
//             loadMore={loadmoreStates}
//             setLoadMore={setLoadmoreStates}
//             selectedCardText="Your selected State"
//           />
//         </Box>
//       </Box>
//       <AdvertiseSection />
//       {/* Party Wise Section */}
//       <Box
//         className="performanceSection"
//         id="Party_Wise"
//         sx={{ backgroundColor: '#fff' }}
//       >
//         <Divider sx={{ margin: '0 0 1rem' }} />
//         <Box
//           sx={{
//             display: 'flex',
//             gap: '0.5rem',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}
//         >
//           <SectionHeading title={`Party Wise ${pageName}`} />
//           <Autocomplete
//             options={partiesList || []}
//             value={selectedParty}
//             onChange={(e, newValue) => setSelectedParty(newValue)}
//             renderInput={(params) => (
//               <TextField
//                 {...params}
//                 label="Search Party Name"
//                 variant="standard"
//               />
//             )}
//             sx={{ width: { md: 300, xs: 200 }, marginBottom: 2 }}
//           />
//         </Box>
//         <Box
//           sx={{
//             display: 'flex',
//             gap: '1rem',
//             margin: '2rem 1rem',
//             alignItems: 'center',
//           }}
//         >
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//               borderRight: '2px solid #00000050',
//             }}
//           >
//             Current MPs <br />
//             in LS
//           </Text>
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//               borderRight: '2px solid #FF936F',
//             }}
//           >
//             <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
//               {mpStats.current}
//             </span>{' '}
//             out of <span style={{ fontSize: '1.5rem' }}>{mpStats.total}</span>
//           </Text>
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//               borderRight: '2px solid #00000050',
//             }}
//           >
//             Eligible MPs <br />
//             in Performance
//           </Text>
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//             }}
//           >
//             <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
//               {mpStats.eligible}
//             </span>{' '}
//             out of <span style={{ fontSize: '1.5rem' }}>{mpStats.current}</span>
//           </Text>
//         </Box>

//         <CardList
//           filteredData={filteredPartiesData}
//           isSelectedCard={selectedParty}
//           data={attendanceDetailsPageData?.partywise_summary}
//           loading={attendanceLoading}
//           loadMore={loadParties}
//           setLoadMore={setLoadParties}
//           selectedCardText="Your selected Party"
//         />
//       </Box>
//       <AdvertiseSection />
//       {/* age Wise Section */}
//       <Box className="performanceSection" id="age_wise">
//         <Divider sx={{ margin: '0 0 1rem' }} />
//         <Box
//           sx={{
//             display: 'flex',
//             gap: '0.5rem',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}
//         >
//           <SectionHeading title={`Age Wise ${pageName}`} />
//         </Box>
//         <Box
//           sx={{
//             display: 'flex',
//             gap: '1rem',
//             margin: '2rem 1rem',
//             alignItems: 'center',
//           }}
//         >
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//               borderRight: '2px solid #00000050',
//             }}
//           >
//             Current MPs <br />
//             in LS
//           </Text>
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//               borderRight: '2px solid #FF936F',
//             }}
//           >
//             <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
//               {mpStats.current}
//             </span>{' '}
//             out of <span style={{ fontSize: '1.5rem' }}>{mpStats.total}</span>
//           </Text>
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//               borderRight: '2px solid #00000050',
//             }}
//           >
//             Eligible MPs <br />
//             in Performance
//           </Text>
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//             }}
//           >
//             <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
//               {mpStats.eligible}
//             </span>{' '}
//             out of <span style={{ fontSize: '1.5rem' }}>{mpStats.current}</span>
//           </Text>
//         </Box>
//         <CardList
//           // filteredData={filteredPartiesData}
//           // isSelectedCard={selectedParty}
//           data={attendanceDetailsPageData?.agewise_summary}
//           loading={attendanceLoading}
//           // loadMore={loadParties}
//           // setLoadMore={setLoadParties}
//           // selectedCardText = 'Your selected Age Group'
//         />
//       </Box>
//       <AdvertiseSection />
//       {/* profession  Wise Section */}
//       <Box
//         className="performanceSection"
//         id="profession_wise"
//         sx={{ backgroundColor: '#fff' }}
//       >
//         <Divider sx={{ margin: '0 0 1rem' }} />
//         <Box
//           sx={{
//             display: 'flex',
//             gap: '0.5rem',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}
//         >
//           <SectionHeading title={`Profession Wise ${pageName}`} />
//           <Autocomplete
//             options={professionList || []}
//             value={selectedProfession}
//             onChange={(e, newValue) => setSelectedProfession(newValue)}
//             renderInput={(params) => (
//               <TextField
//                 {...params}
//                 label="Select Age group"
//                 variant="standard"
//               />
//             )}
//             sx={{ width: { md: 300, xs: 200 }, marginBottom: 2 }}
//           />
//         </Box>
//         <Box
//           sx={{
//             display: 'flex',
//             gap: '1rem',
//             margin: '2rem 1rem',
//             alignItems: 'center',
//           }}
//         >
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//               borderRight: '2px solid #00000050',
//             }}
//           >
//             Current MPs <br />
//             in LS
//           </Text>
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//               borderRight: '2px solid #FF936F',
//             }}
//           >
//             <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
//               {mpStats.current}
//             </span>{' '}
//             out of <span style={{ fontSize: '1.5rem' }}>{mpStats.total}</span>
//           </Text>
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//               borderRight: '2px solid #00000050',
//             }}
//           >
//             Eligible MPs <br />
//             in Performance
//           </Text>
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//             }}
//           >
//             <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
//               {mpStats.eligible}
//             </span>{' '}
//             out of <span style={{ fontSize: '1.5rem' }}>{mpStats.current}</span>
//           </Text>
//         </Box>
//         <CardList
//           filteredData={filteredProfessionData}
//           isSelectedCard={selectedProfession}
//           data={attendanceDetailsPageData?.professionwise_summary}
//           loading={attendanceLoading}
//           loadMore={loadProfessions}
//           setLoadMore={setLoadProfessions}
//           selectedCardText="Your selected Profession"
//         />
//       </Box>
//       <AdvertiseSection />
//       {/* quilification   Wise Section */}
//       <Box className="performanceSection" id="quilification_wise">
//         <Divider sx={{ margin: '0 0 1rem' }} />
//         <Box
//           sx={{
//             display: 'flex',
//             gap: '0.5rem',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}
//         >
//           <SectionHeading title={`Quilification  Wise ${pageName}`} />
//         </Box>
//         <Box
//           sx={{
//             display: 'flex',
//             gap: '1rem',
//             margin: '2rem 1rem',
//             alignItems: 'center',
//           }}
//         >
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//               borderRight: '2px solid #00000050',
//             }}
//           >
//             Current MPs <br />
//             in LS
//           </Text>
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//               borderRight: '2px solid #FF936F',
//             }}
//           >
//             <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
//               {mpStats.current}
//             </span>{' '}
//             out of <span style={{ fontSize: '1.5rem' }}>{mpStats.total}</span>
//           </Text>
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//               borderRight: '2px solid #00000050',
//             }}
//           >
//             Eligible MPs <br />
//             in Performance
//           </Text>
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//             }}
//           >
//             <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
//               {mpStats.eligible}
//             </span>{' '}
//             out of <span style={{ fontSize: '1.5rem' }}>{mpStats.current}</span>
//           </Text>
//         </Box>
//         <CardList
//           // filteredData={filteredPartiesData}
//           // isSelectedCard={selectedParty}
//           data={attendanceDetailsPageData?.qualificationwise_summary}
//           loading={attendanceLoading}
//           loadMore={loadQuilification}
//           setLoadMore={setLoadQuilification}
//           selectedCardText="Your selected Quilification"
//         />
//       </Box>
//       <AdvertiseSection />
//       {/* Term  Wise Section */}
//       <Box
//         className="performanceSection"
//         id="term_wise"
//         sx={{ backgroundColor: '#fff' }}
//       >
//         <Divider sx={{ margin: '0 0 1rem' }} />
//         <Box
//           sx={{
//             display: 'flex',
//             gap: '0.5rem',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}
//         >
//           <SectionHeading title={`Term Wise ${pageName}`} />
//         </Box>
//         <Box
//           sx={{
//             display: 'flex',
//             gap: '1rem',
//             margin: '2rem 1rem',
//             alignItems: 'center',
//           }}
//         >
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//               borderRight: '2px solid #00000050',
//             }}
//           >
//             Current MPs <br />
//             in LS
//           </Text>
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//               borderRight: '2px solid #FF936F',
//             }}
//           >
//             <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
//               {mpStats.current}
//             </span>{' '}
//             out of <span style={{ fontSize: '1.5rem' }}>{mpStats.total}</span>
//           </Text>
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//               borderRight: '2px solid #00000050',
//             }}
//           >
//             Eligible MPs <br />
//             in Performance
//           </Text>
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//             }}
//           >
//             <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
//               {mpStats.eligible}
//             </span>{' '}
//             out of <span style={{ fontSize: '1.5rem' }}>{mpStats.current}</span>
//           </Text>
//         </Box>
//         <CardList
//           data={attendanceDetailsPageData?.termwise_summary}
//           loading={attendanceLoading}
//           loadMore={loadParties}
//           setLoadMore={setLoadParties}
//           selectedCardText="Your selected Term"
//         />
//       </Box>
//       <AdvertiseSection />
//       {/* catagory   Wise Section */}
//       <Box
//         className="performanceSection"
//         id="catagory_wise"
//         // sx={{ backgroundColor: '#fff' }}
//       >
//         <Divider sx={{ margin: '0 0 1rem' }} />
//         <Box
//           sx={{
//             display: 'flex',
//             gap: '0.5rem',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}
//         >
//           <SectionHeading title={`Catagory Wise ${pageName}`} />
//         </Box>
//         <Box
//           sx={{
//             display: 'flex',
//             gap: '1rem',
//             margin: '2rem 1rem',
//             alignItems: 'center',
//           }}
//         >
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//               borderRight: '2px solid #00000050',
//             }}
//           >
//             Current MPs <br />
//             in LS
//           </Text>
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//               borderRight: '2px solid #FF936F',
//             }}
//           >
//             <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
//               {mpStats.current}
//             </span>{' '}
//             out of <span style={{ fontSize: '1.5rem' }}>{mpStats.total}</span>
//           </Text>
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//               borderRight: '2px solid #00000050',
//             }}
//           >
//             Eligible MPs <br />
//             in Performance
//           </Text>
//           <Text
//             font={'Sora'}
//             sx={{
//               fontWeight: '500',
//               color: '#00000080',
//               marginTop: '0.1rem',
//               paddingRight: '1rem',
//             }}
//           >
//             <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>
//               {mpStats.eligible}
//             </span>{' '}
//             out of <span style={{ fontSize: '1.5rem' }}>{mpStats.current}</span>
//           </Text>
//         </Box>
//         <CardList
//           data={attendanceDetailsPageData?.categorywise_summary}
//           loading={attendanceLoading}
//           loadMore={loadParties}
//           setLoadMore={setLoadParties}
//           selectedCardText="Your selected Catagory"
//         />
//       </Box>
//     </>
//   );
// }
