import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  Paper,
  Divider,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GrayButton from 'components/common/GrayButton';

const ListTableComponent = ({ headers, ministries }) => {
  return (
    <Box maxWidth="lg" mx="auto" p={2} sx={{opacity: 0.8 }}>
      {/* Header Row */}
      <Grid container px={2} mb={2} py={1} sx={{ color: '#888', fontWeight: 500 }}>
        <Grid item xs={2}>
          <Typography variant="body2">{headers?.cal1}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2">{headers?.cal2}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2">{headers?.cal3}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2">{headers?.cal4}</Typography>
        </Grid>
        <Grid item xs={2} />
      </Grid>
      {/* <Divider sx={{ mb: 2 }} /> */}

      {/* List Rows */}
      {ministries.map((ministry, index) => (
        <Paper
          elevation={2}
          key={index}
          sx={{
            borderRadius: 2,
            mb: 2,
            p: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={2}>
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{ color: '#444', ml: 1}}
              >
                {ministry.rank}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="body2"
                sx={{ fontWeight: '600', fontSize: '12px', pr: 2 }}
              >
                {ministry.name}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="body1"
                sx={{ color: '#F4A023',fontSize:'1.3rem', fontWeight: 600 }}
              >
                {ministry.percentage}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1" sx={{ color: '#555', fontSize:'1.3rem' }}>
                {ministry.questions}{' '}
                <Typography
                  component="span"
                  variant="caption"
                  color="text.secondary"
                >
                  Days
                </Typography>
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, alignItems: 'center' }}
            >
              <GrayButton height={30}>
                Share Now
              </GrayButton>
              <IconButton>
                <MoreVertIcon sx={{ color: '#999' }} />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default ListTableComponent;
