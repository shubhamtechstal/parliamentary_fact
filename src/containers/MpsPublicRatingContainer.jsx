import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Rating,
  TextField,
} from '@mui/material';
import Text from 'components/common/Text';
import StarIcon from '@mui/icons-material/Star';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import React, { useState } from 'react';
import '../App.css';
import MpsStartRatingCard from 'components/common/cards/MpsStartRatingCard';

export default function MpsPublicRatingContainer() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Box
      sx={{ background: '#f7f7f7', display: 'flex', justifyContent: 'center' }}
    >
      <Box sx={{ width: { md: '80%', xs: '90%' } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <TextField
            fullWidth
            placeholder="To search and rate your MP/Write here MPs Name otherwise go to click here"
            id="fullWidth"
            sx={{
              backgroundColor: 'white',
              width: '60%',
              padding: '0 1rem',
              margin: '1rem 0',
              borderRadius: '24px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none',
                },
                '&:hover fieldset': {
                  border: 'none',
                },
                '&.Mui-focused fieldset': {
                  border: 'none',
                },
              },
              '& .MuiInputBase-input::placeholder': {
                color: 'grey',
                opacity: 1, // Ensures the grey color appears fully
              },
              '& .MuiInputBase-input': {
                padding: '0.6rem',
              },
            }}
          />
          <Button
            sx={{
              background: 'gray',
              color: '#fff',
              fontWeight: '600',
              borderRadius: '18px',
              padding: { xs: '0.4rem 0.5rem', md: '0.4rem 3rem' },
              '&:hover': {
                background: 'gray',
                color: '#fff',
              },
            }}
          >
            Click here
          </Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Box
            sx={{ height: '1rem', width: '1rem', background: '#ff000070' }}
          ></Box>
          <Text
            sx={{ fontWeight: '600', marginTop: '0.1rem' }}
            text={'Top Rated MPs'}
          />
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr' },
            overflowX: { xs: 'auto', md: 'unset' },
            justifyContent: 'space-around',
            padding: '1rem 0',
          }}
        >
          {data.map((data) => (
            <Grid item key={data}>
              <MpsStartRatingCard />
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
        >
          <Button
            sx={{
              background: 'gray',
              color: '#fff',
              fontWeight: '600',
              borderRadius: '18px',
              marginBottom: '1rem',
              padding: '0.2rem 3rem',
              '&:hover': {
                background: 'gray',
                color: '#fff',
              },
            }}
          >
            Load more
          </Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Box
            sx={{ height: '1rem', width: '1rem', background: '#ff000070' }}
          ></Box>
          <Text
            sx={{ fontWeight: '600', marginTop: '0.1rem' }}
            text={'Party Wise'}
          />
        </Box>
        <Text
          sx={{ fontSize: '0.9rem', margin: '1rem 0', color: 'grey' }}
          text={'Bhartiya Janta Party (BJP)'}
        />
       <Grid
          container
          spacing={2}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr' },
            overflowX: { xs: 'auto', md: 'unset' },
            justifyContent: 'space-around',
            padding: '1rem 0',
          }}
        >
          {data.map((data) => (
            <Grid item key={data}>
              <MpsStartRatingCard />
            </Grid>
          ))}
        </Grid>

        <Text
          sx={{ fontSize: '0.9rem', margin: '1rem 0', color: 'grey' }}
          text={'Indian National Congress(INC)'}
        />
       <Grid
          container
          spacing={2}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr' },
            overflowX: { xs: 'auto', md: 'unset' },
            justifyContent: 'space-around',
            padding: '1rem 0',
          }}
        >
          {data.slice(0,6).map((data) => (
            <Grid item key={data}>
              <MpsStartRatingCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
