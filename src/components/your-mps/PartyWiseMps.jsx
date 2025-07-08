// components/PartyWiseMpsList.jsx
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Card,
  CircularProgress,
} from '@mui/material';

import { groupMpsByParty } from 'helpers/utills/utilityFunctions';

const PartyWiseMpsList = ({ mpsList, loading, error, MemberCard }) => {
  if (loading)
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );

  if (error) return <Typography color="error">Error: {error}</Typography>;

  const groupedMps = groupMpsByParty(mpsList);

  return (
    <Box p={3}>
      <h1>Trending MPs (Party Wise)</h1>

      {Object.entries(groupedMps).map(([party, mps]) => (
        <Box key={party} mb={5}>
          <Typography variant="h6" fontWeight="500" mb={2}>
            {party}
          </Typography>

          <Box sx={{ display: 'flex', overflow: 'auto', gap: 2 }}>
            {/* Party logo card */}
            <Grid item>
              <Card
                sx={{
                  p: 2,
                  textAlign: 'center',
                  borderRadius: 3,
                  border: '1px solid #f5f5f5',
                  boxShadow: 'none',
                  width: 120,
                  height: 160,
                }}
              >
                <Avatar
                  alt={party}
                  src={party.partyLogo}
                  // src="/Assets/madhyaPradesh.png"
                  sx={{
                    width: 70,
                    height: 70,
                    margin: '0 auto',
                  }}
                  variant="circular"
                />
                <Typography variant="body2" sx={{ mt: 1, fontWeight: 500 }}>
                  {party}
                </Typography>
              </Card>
            </Grid>
            {mps.map((mp, idx) => (
              <MemberCard mp={mp} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default PartyWiseMpsList;
