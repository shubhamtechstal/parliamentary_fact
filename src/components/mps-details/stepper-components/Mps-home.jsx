import { Box } from '@mui/material';
import MpsTopPerformanceCard from 'components/Mps_performance/cards/MpsTopPerformanceCard';
import MpsTopPerformanceRatingCard from 'components/Mps_performance/cards/MpsTopPerformanceRatingCard';


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
  return (
    <>
    <Box sx={{ display: 'flex',  gap: 2, justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <Box>
        <p>National Ranking</p>
        <Box minWidth={350}>
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
        <Box minWidth={350}>
          <MpsTopPerformanceCard
            // handleOpenSharePopup={handleOpenSharePopup}
            mp={mpStateDomy}
            // cardCatagory={cardCatagory}
            // isLoading={isRankLoading}
          />

        </Box>
      </Box>
    </Box>
      <Box>
        <h3>#MPs Public Rating</h3>
       <p style={{ fontSize: '0.8rem', color: '#00000080', margin: '0 0 1rem' }}>
          Address: MP Performance, Behind Royal Cars, Aloma County Road, near Medipoint Hospital, Aundh, Pune, Maharashtra 411007
        </p> 
        <Box maxWidth={350}>
          <MpsTopPerformanceRatingCard
            // handleOpenSharePopup={handleOpenSharePopup}
            mp={mpStateDomy}
            // cardCatagory={cardCatagory}
            // isLoading={isRankLoading}
          />

        </Box>
      </Box>
    </>
  );
}

export default MpsHomeComponent;
