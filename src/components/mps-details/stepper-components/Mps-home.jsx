import {
  Box,
  Typography,
  // Grid,
  // IconButton,
  // Avatar,
  Container,
} from '@mui/material';
// import ShareIcon from '@mui/icons-material/Share';
// import Button from 'components/common/Button';
// import MpsHomeCampaignCard from 'components/mps-details/commonfiles/MpsHomeCampaignCard';
// import MpsTopPerformanceCard from 'components/Mps_performance/cards/MpsTopPerformanceCard';
// import MpsTopPerformanceRatingCard from 'components/Mps_performance/cards/MpsTopPerformanceRatingCard';
// import NewsSectionHome from 'components/news/NewsSectionHome';
import MpsHomeChartSection from '../commonfiles/MpsHomeChartSection';
import { LabeledItem, ProfileSection } from '../commonfiles/HelperComponents';
import SectionHeading from 'components/common/SectionHeading';


function MpsHomeComponent({ mpsHome }) {
  // const [isRankLoading, setIsRankLoading] = useState(false);
  // const mpNationalDomy = {
  //   rank: '001',
  //   name: 'Amit Kumar Singh',
  //   constituency: 'Varanasi',
  //   performance: '78.2',
  //   rankTitle: 'National Rank:',
  //   image: 'https://via.placeholder.com/50',
  //   partyName: 'BJP',
  // };
  // const mpStateDomy = {
  //   rank: '001',
  //   name: 'Amit Kumar Singh',
  //   constituency: 'Varanasi',
  //   performance: '78.2',
  //   rankTitle: 'State Rank:',
  //   image: '/Assets/icons/mpGirlImage.png',
  //   partyName: 'BJP',
  // };
  let mps_Home = {
    overall_performance: mpsHome?.national_percentage,
    national_ranking: mpsHome?.national_rank,
    total_mps: 496,
    parliament_stats: [
      {
        title: 'State Performance',
        value: mpsHome?.state_percentage,
        ranking: 421,
        total: 496,
      },
      {
        title: 'State  Ranking',
        value: mpsHome?.state_rank,
        ranking: 112,
        total: 496,
      },
    ],
  };
  return (
    <Container sx={{ padding: { md: '2rem', xs: '1rem' } }}>
      <MpsHomeChartSection
        sectionTitle={` ${mpsHome?.name} Parliament Performance`}
        mpsHome={mps_Home}
        performanceTitle={'Parliament Performance'}
      />
      <MpsHomeChartSection
        sectionTitle={` ${mpsHome?.name} Constituency Performance`}
        mpsHome={mps_Home}
        performanceTitle={'Constituancy Performance'}
      />
      <SectionHeading title={`${mpsHome?.name} Profile`} />
      <ProfileSection isSectionHeading={false} title="Electoral Profile">
        <Box sx={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <LabeledItem label="Total Electorate" value="Na" />
          <LabeledItem label="Total Vote" value="Na" />
          <LabeledItem label="Winning Margin" value={mpsHome?.winning_margin} />
          <LabeledItem label="Winning Percentage" value={'Na'} />
        </Box>
      </ProfileSection>

      <ProfileSection isSectionHeading={false} title="Parliamentary Profile">
        <Box sx={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <LabeledItem label="Term" value={mpsHome?.term_count} />
          <LabeledItem
            label="Current Position"
            value={mpsHome.current_position}
          />
          <LabeledItem label="Ministry" value={mpsHome.ministry} />
        </Box>
      </ProfileSection>
      <Box mt={2}>
        <Typography variant="body2" fontWeight="bold" mb={1}>
          Member of Parliament Committee
        </Typography>
        <div>
          {' '}
          <span
            style={{
              border: '4px solid red',
              opacity: '0.6',
              marginRight: '10px',
              height: '18px',
              width: '18px',
              borderRadius: '50%',
              display: 'inline-block',
            }}
          ></span>
          {mpsHome?.current_position} - {mpsHome?.ministry}
        </div>
        {/* <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
            <li>
              Cabinet Minister - Ministry of Defence Govt of India (25 Apr 2024
              – 24 Mar 2025)
            </li>
            <li>
              Cabinet Minister - Ministry of Defence Govt of India (25 Apr 2024
              – 24 Mar 2025)
            </li>
          </ul> */}
      </Box>
      {/* <Box
        sx={{
          display: 'flex',
          gap: 3,
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Box>
          <p>National Ranking</p>
          <Box minWidth={350} margin={'auto'}>
            <MpsTopPerformanceCard
              // handleOpenSharePopup={handleOpenSharePopup}
              mp={mpNationalDomy}
              // cardCatagory={cardCatagory}
              // isLoading={isRankLoading}
            />
          </Box>
        </Box>
        <Box>
          <p>State Ranking</p>
          <Box minWidth={350} margin={'auto'}>
            <MpsTopPerformanceCard mp={mpStateDomy} />
          </Box>
        </Box>
        <Button
          sx={{
            width: '300px',
            height: '45px',
            fontSize: '18px',
            background: 'gray',
            borderRadius: '10px',
            mt: 2,
          }}
        >
          Call Your MP
        </Button>
      </Box>
      <Box>
        <h3>#MPs Public Rating</h3>
        <p
          style={{ fontSize: '0.8rem', color: '#00000080', margin: '0 0 1rem' }}
        >
          Address: MP Performance, Behind Royal Cars, Aloma County Road, near
          Medipoint Hospital, Aundh, Pune, Maharashtra 411007
        </p>
        <Box maxWidth={350}>
          <MpsTopPerformanceRatingCard mp={mpStateDomy} />
          <Button
            sx={{
              width: '300px',
              height: '45px',
              fontSize: '18px',
              background: 'gray',
              borderRadius: '10px',
              mt: 2,
            }}
          >
            Birthday Wish
          </Button>
        </Box>
      </Box> */}
      {/* <Box
        sx={{
          display: 'flex',
          overflow: 'auto',
          width: '100%',
          justifyContent: 'start',
          gap: 2,
          p: 1,
        }}
      >
        {campaignData.map((campaignInfo, i) => {
          return (
            <MpsHomeCampaignCard
              key={i}
              cardInfo={campaignInfo}
              mp={mpNationalDomy}
            />
          );
        })}
      </Box> */}
      {/* <Box
        sx={{
          display: 'flex',
          overflow: 'auto',
          width: '100%',
          justifyContent: 'start',
          gap: 2,
          p: 1,
        }}
      >
        {campaignData.map((campaignInfo, i) => {
          return (
            <MpsHomeCampaignCard
              key={i}
              cardInfo={campaignInfo}
              mp={mpNationalDomy}
            />
          );
        })}
      </Box> */}
    </Container>
  );
}

export default MpsHomeComponent;
