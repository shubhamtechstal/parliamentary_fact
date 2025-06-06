import { Box } from '@mui/material';
import Button from 'components/common/Button';
import MpsHomeCampaignCard from 'components/mps-details/commonfiles/MpsHomeCampaignCard';
import MpsTopPerformanceCard from 'components/Mps_performance/cards/MpsTopPerformanceCard';
import MpsTopPerformanceRatingCard from 'components/Mps_performance/cards/MpsTopPerformanceRatingCard';
import NewsSectionHome from 'components/news/NewsSectionHome';

function MpsHomeComponent() {
  // const [isRankLoading, setIsRankLoading] = useState(false);
  const mpNationalDomy = {
    rank: '001',
    name: 'Amit Kumar Singh',
    constituency: 'Varanasi',
    performance: '78.2',
    rankTitle: 'National Rank:',
    image: 'https://via.placeholder.com/50',
    partyName: 'BJP',
  };
  const mpStateDomy = {
    rank: '001',
    name: 'Amit Kumar Singh',
    constituency: 'Varanasi',
    performance: '78.2',
    rankTitle: 'State Rank:',
    image: '/Assets/icons/mpGirlImage.png',
    partyName: 'BJP',
  };
  let campaignData = [
    {
      sender: 'SURAJ RAJ SINGH',
      mpName: 'Rahul Gupta Neeraj Gupta Neeraj',
      msgText:
        'infinite loop loading animation effect using html css and svg. svg loading animation effect tutorial.',
      likesCount: 900,
      commentsCount: 200,
      folowCount: 200,
    },
    {
      sender: 'SURAJ RAJ SINGH',
      mpName: 'Rahul Gupta Neeraj Gupta Neeraj',
      msgText:
        'infinite loop loading animation effect using html css and svg. svg loading animation effect tutorial.',
      likesCount: 900,
      commentsCount: 200,
      folowCount: 200,
    },
    {
      sender: 'SURAJ RAJ SINGH',
      mpName: 'Rahul Gupta Neeraj Gupta Neeraj',
      msgText:
        'infinite loop loading animation effect using html css and svg. svg loading animation effect tutorial.',
      likesCount: 900,
      commentsCount: 200,
      folowCount: 200,
    },
    {
      sender: 'SURAJ RAJ SINGH',
      mpName: 'Rahul Gupta Neeraj Gupta Neeraj',
      msgText:
        'infinite loop loading animation effect using html css and svg. svg loading animation effect tutorial.',
      likesCount: 900,
      commentsCount: 200,
      folowCount: 200,
    },
  ];
  return (
    <Box sx={{padding: { md: '2rem', xs: '1rem' },}}>
      <Box
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
          <Box
            minWidth={350}
            margin={'auto'}
          >
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
      </Box>
      <NewsSectionHome />
      <Box
        sx={{
          display: 'flex',
          overflow: 'auto',
          width: '100%',
          justifyContent: 'start',
          gap: 2,
          p:1
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
      </Box>
      <Box
        sx={{
          display: 'flex',
          overflow: 'auto',
          width: '100%',
          justifyContent: 'start',
          gap: 2,
          p:1
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
      </Box>
    </Box>
  );
}

export default MpsHomeComponent;
