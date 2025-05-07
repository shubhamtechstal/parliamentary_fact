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
  Tooltip,
  Skeleton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GrayButton from '../GrayButton';
import AdvertiseSection from 'components/addLayout/HorizontalAdvertiseSection';

const rankingSkelaton = () => {
  return (
    <TableRow>
      <TableCell colSpan={9} sx={{ border: 'none', padding: '1em 2rem' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '2fr 2fr 2fr 1fr 1fr 1fr 1fr 1.5fr 0.5fr',
            gap: 2,
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: '16px',
            padding: '0.2rem 1rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
            fontSize: '0.8rem',
            px: 2,
          }}
        >
          {/* Ranking */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              color: '#e7a917',
              // maxWidth: '6rem',
            }}
          >
            <Skeleton height={35} width={35} variant="circular" />
            <Skeleton height={20} width={70} variant="text" />
            {/* <span>National Rank</span> */}
          </Box>

          {/* MP Name */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap:2 }}>
            <Skeleton height={50} width={50} variant="circular" />
            <Skeleton height={20} width={90} variant="text" />
          </Box>
          <Skeleton height={20} width={90} variant="text" />
          <Skeleton height={20} width={40} variant="text" />
          <Skeleton height={20} width={40} variant="text" />
          <Skeleton height={20} width={40} variant="text" />
          <Skeleton height={20} width={40} variant="text" />
          {/* Share Button */}
          <Skeleton height={20} width={40} variant="rounded" />

          {/* More Icon */}
          <Box>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Box>
      </TableCell>
    </TableRow>
  );
};

const RankingTable = ({
  mpsdata = [],
  isLoading,
  loadMoreMpsData,
  handleOpenSharePopup,
}) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={9} sx={{ border: 'none', paddingBottom: 1 }}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns:
                    '3fr 2fr 2fr 1.5fr 1fr 1.5fr 1.5fr 1.5fr 0.5fr',
                  gap: 2,
                  color: '#455A64',
                  fontWeight: 'bold',
                  fontSize: '0.7rem',
                  padding: '0 2rem',
                }}
              >
                <div>Ranking</div>
                <div>MPs Name</div>
                <div>Party</div>
                <div>Constituency</div>
                <div>State</div>
                <div>Performance</div>
                <div>Presence</div>
                <div>Sharing</div>
                <div>More</div>
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {mpsdata?.slice(0, loadMoreMpsData)?.map((row, index) => (
            <>
              {isLoading ? (
                rankingSkelaton()
              ) : (
                <TableRow key={index}>
                  <TableCell
                    colSpan={9}
                    sx={{ border: 'none', padding: '1em 2rem' }}
                  >
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns:
                          '2fr 2fr 2fr 1fr 1fr 1fr 1fr 1.5fr 0.5fr',
                        gap: 2,
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        borderRadius: '16px',
                        padding: '0.2rem 1rem',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                        fontSize: '0.8rem',
                        px: 2,
                      }}
                    >
                      {/* Ranking */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          color: '#e7a917',
                          // maxWidth: '6rem',
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
                        </Avatar>
                        <span>{row.rankTitle}</span>
                        {/* <span>National Rank</span> */}
                      </Box>

                      {/* MP Name */}
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                          src={row.imageUrl}
                          sx={{ width: 50, height: 50, marginRight: 2 }}
                        />
                        {row?.name?.length > 40 ? (
                          <Tooltip title={row.name} arrow>
                            <Typography
                              variant="body1"
                              sx={{
                                fontSize: '0.7rem',
                                fontWeight: 600,
                                maxWidth: '10rem',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'normal',
                                lineHeight: '1.2rem',
                                cursor: 'default',
                              }}
                            >
                              {row.name}
                            </Typography>
                          </Tooltip>
                        ) : (
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: '0.7rem',
                              fontWeight: 600,
                              maxWidth: '10rem',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'normal',
                              lineHeight: '1.2rem',
                              cursor: 'default',
                            }}
                          >
                            {row.name}
                          </Typography>
                        )}
                      </Box>

                      {/* Party */}
                      <Box>{row.party}</Box>

                      {/* Constituency */}
                      <Box>{row.constituency}</Box>

                      {/* State */}
                      <Box>{row.state}</Box>

                      {/* Performance */}
                      <Box sx={{ color: '#e7a917', fontSize: '1rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>
                          {row.performance}
                        </span>
                        %
                      </Box>

                      {/* Presence */}
                      <Box sx={{ whiteSpace: 'nowrap' }}>
                        <span style={{ fontSize: '1.5rem' }}>
                          {row.presence}
                        </span>{' '}
                        Days
                      </Box>

                      {/* Share Button */}
                      <Box>
                        <GrayButton
                          fontSize="0.6rem"
                          onClick={() => handleOpenSharePopup(row.mp_id)}
                        >
                          Share Now
                        </GrayButton>
                      </Box>

                      {/* More Icon */}
                      <Box>
                        <IconButton>
                          <MoreVertIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
              )}
              {(index + 1) % 7 === 0 && <AdvertiseSection />}
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RankingTable;
