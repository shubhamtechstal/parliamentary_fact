import { Box } from '@mui/material';
import SectionHeading from 'components/common/SectionHeading';
import RankingTable from 'components/common/modals/RankingTable';
import MobMPsRankingCards from 'components/common/mobile/MobMPsRankingCards';
import AdvertiseSection from 'components/addLayout/HorizontalAdvertiseSection';
import IconButton from 'components/common/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FilterController from 'components/common/modals/FilterController';

function TopPerformerMpsDetails({
  handleOpenSharePopup,
  handleBack,
}) {

  // Sample Data
  const mpsdata = Array(10).fill({
    rank: '001',
    name: 'Rahul Rajeev Sonia Gandhi Rajeev Sonia Gandhi',
    party: 'BJP',
    constituency: 'Sagar',
    state: 'MP',
    performance: '85',
    presence: '80/80',
    imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
  });
  return (
    <>
      {/* **********Mobile********** */}
      <Box
        sx={{
          position: 'relative',
          display: { xs: 'flex', md: 'none' },
          gap: '1em',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <IconButton onClick={handleBack}>
          <KeyboardBackspaceIcon />
        </IconButton> */}

        <h3 style={{ textAlign: 'center', fontSize:'1.5rem' }}>Top performer Mps</h3>
      </Box>
      <Box
        display={{
          md: 'none',
          xs: 'flex',
          flexDirection: 'column',
          gap: '2em',
        }}
      >
        {mpsdata.map((mp, index) => (
          <>
            <MobMPsRankingCards
              mp={mp}
              key={index}
              handleOpenSharePopup={handleOpenSharePopup}
            />
            {(index + 1) % 5 === 0 && <AdvertiseSection />}
          </>
        ))}
      </Box>

      {/* ******Desktop**** */}
      <Box
        // className="performanceSection"
        sx={{
          position: 'relative',
          //   display: { xs: 'none', md: 'block' },
          marginBottom: '10rem',
        }}
      >
        <Box
          className="performanceSection"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            display: { md: 'flex', xs: 'none' },
          }}
        >
          <SectionHeading title={'Top Performer MPs'} />
         <FilterController/>
        </Box>
        <Box display={{ xs: 'none', md: 'block' }}>
          <RankingTable
            mpsdata={mpsdata}
            handleOpenSharePopup={handleOpenSharePopup}
          />
        </Box>
      </Box>
    </>
  );
}

export default TopPerformerMpsDetails;
