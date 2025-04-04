import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Button,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GrayButton from '../GrayButton';
import AdvertiseSection from 'components/addLayout/HorizontalAdvertiseSection';

// Sample Data
const data = Array(10).fill({
  rank: '001',
  name: 'Rahul Rajeev Sonia Gandhi Rajeev Sonia Gandhi',
  party: 'BJP',
  constituency: 'Sagar',
  state: 'MP',
  performance: '85%',
  presence: '80/80 Days',
  imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
});

const RankingTable = () => {
  return (
    <TableContainer>
      <Table>
        {/* Table Head */}
        <TableHead sx={{ backgroundColor: '#ECEFF1' }}>
          <TableRow>
            {[
              'Ranking',
              'MPs Name',
              'Party',
              'Constituency',
              'State',
              'Performance',
              'Presence',
              'Sharing',
              'More',
            ].map((head, index) => (
              <TableCell
                key={index}
                sx={{ fontWeight: 'bold', color: '#455A64' }}
              >
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* Table Body */}
        {/* <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                backgroundColor: index % 2 === 0 ? '#F9FAFB' : 'white',
                fontSize: '0.6rem',
              }}
            >
              
              <TableCell>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#e7a917',
                    gap: 2,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 35,
                      height: 35,
                      background: '#e7a917',
                      color: '#fff',
                      fontSize: '0.8rem',
                      fontFamily: '"Sora", sans-serif',
                    }}
                  >
                    {row.rank}
                  </Avatar>{' '}
                  <span>National Rank</span>
                </Box>
              </TableCell>

              
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar
                    src={row.imageUrl}
                    sx={{ width: 40, height: 40, marginRight: 2 }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, fontSize: '0.8rem', width: '13rem' }}
                  >
                    {row.name}
                  </Typography>
                </Box>
              </TableCell>

              <TableCell>{row.party}</TableCell>
              <TableCell>{row.constituency}</TableCell>
              <TableCell>{row.state}</TableCell>

              <TableCell>
                <Typography sx={{ color: '#e7a917', fontWeight: 'bold' }}>
                  {row.performance}
                </Typography>
              </TableCell>

              <TableCell sx={{ textWrap: 'nowrap' }}>{row.presence}</TableCell>

              <TableCell>
                <GrayButton>Share Now</GrayButton>
              </TableCell>

              <TableCell>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
      <Box
        sx={{
          padding: '1rem 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem 0',
        }}
      >
        {data.map((row, index) => (
          <>
            <Box
              key={index}
              sx={{
                display: 'flex',
                fontSize: '0.8rem',
                justifyContent: 'space-between',
                borderRadius: '20px',
                background: '#fff',
                padding: '1rem',
                alignItems: 'center',
              }}
            >
              {/* Ranking */}
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#e7a917',
                    gap: 2,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 35,
                      height: 35,
                      background: '#e7a917',
                      color: '#fff',
                      fontSize: '0.8rem',
                      fontFamily: '"Sora", sans-serif',
                    }}
                  >
                    {row.rank}
                  </Avatar>{' '}
                  <span>National Rank</span>
                </Box>
              </Box>

              {/* MP Name with Avatar */}
              <Box>
                <Box display="flex" alignItems="center">
                  <Avatar
                    src={row.imageUrl}
                    sx={{ width: 40, height: 40, marginRight: 2 }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, fontSize: '0.8rem', width: '13rem' }}
                  >
                    {row.name}
                  </Typography>
                </Box>
              </Box>

              {/* Other Data */}
              <Box>{row.party}</Box>
              <Box>{row.constituency}</Box>
              <Box>{row.state}</Box>

              {/* Performance */}
              <Box>
                <Typography sx={{ color: '#e7a917', fontWeight: 'bold' }}>
                  {row.performance}
                </Typography>
              </Box>

              {/* Presence */}
              <Box sx={{ textWrap: 'nowrap' }}>{row.presence}</Box>

              {/* Share Button */}
              <Box>
                <GrayButton>Share Now</GrayButton>
              </Box>

              {/* More Options */}
              <Box>
                <MoreVertIcon />
              </Box>
            </Box>
            {(index+1) % 5 === 0 && <AdvertiseSection />}
          </>
        ))}
      </Box>
    </TableContainer>
  );
};

export default RankingTable;
