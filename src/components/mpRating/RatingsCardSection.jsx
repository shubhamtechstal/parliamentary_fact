import { Box, Grid, Rating } from '@mui/material';
import Text from 'components/common/Text';
import StarIcon from '@mui/icons-material/Star';
import React, { useState } from 'react';

export default function RatingCardSection() {
  const data = {
    header:
      'यहाँ आप अपने लोकसभा सांसद को उनके कार्य के आधार पर निम्न 5 मानकों के अंतर्गत रेटिंग दे सकते हैं (Here you can rate your MP based on their work under the following 5 parameters)',
    ratingParameters: [
      {
        title: 'क्षेत्र के विकास में योगदान',
        subtitle: 'Contribution in development in area',
        rating: 0, // Initial rating set to 0
      },
      {
        title: 'क्षेत्र के विकास में योगदान',
        subtitle: 'Contribution in development in area',
        rating: 0, // Initial rating set to 0
      },
      {
        title: 'क्षेत्र के विकास में योगदान',
        subtitle: 'Contribution in development in area',
        rating: 0, // Initial rating set to 0
      },
      {
        title: 'क्षेत्र के विकास में योगदान',
        subtitle: 'Contribution in development in area',
        rating: 0, // Initial rating set to 0
      },
      {
        title: 'क्षेत्र के विकास में योगदान',
        subtitle: 'Contribution in development in area',
        rating: 0, // Initial rating set to 0
      },
    ],
  };

  // Initialize state for ratings
  const [ratings, setRatings] = useState(
    data.ratingParameters.map((param) => param.rating)
  );

  // Handle rating change
  const handleRatingChange = (index, newValue) => {
    const updatedRatings = [...ratings];
    updatedRatings[index] = newValue;
    setRatings(updatedRatings);
  };

  return (
    <Box sx={{ padding: '2rem 0' }}>
      <Box sx={{ marginBottom: '20px' }}>
        <Text sx={{ width: '70%', textWrap: 'wrap' }} text={data.header} />
      </Box>
      {/* <Grid container spacing={3}> */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          gap: '2rem',
          padding: '1rem 0',
        }}
      >
        {data.ratingParameters.map((param, index) => (
          <Box
            key={index}
            sx={{
              background: '#f7f8fa',
              padding: '10px 20px',
              borderRadius: '10px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              minHeight: '150px',
              textAlign: 'center',
              width: 'max-content',
            }}
          >
            <Text
              sx={{ fontSize: '1rem', fontWeight: '700' }}
              text={param.title}
            />
            <Text sx={{ fontSize: '0.9rem' }} text={param.subtitle} />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                margin: '10px',
              }}
            >
              <Rating
                sx={{
                  fontSize: '2rem',
                  '& .MuiRating-icon': {
                    marginRight: '0.5rem', // Adjust as needed for spacing between stars
                  },
                }}
                name={`rating-${index}`}
                value={ratings[index]}
                onChange={(event, newValue) =>
                  handleRatingChange(index, newValue)
                }
                emptyIcon={
                  <StarIcon style={{ color: '#dce5e8' }} fontSize="inherit" />
                }
              />
            </Box>
            <Box
              sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}
            >
              {index === 0 && (
                <Text
                  sx={{
                    fontSize: '0.7rem',
                    width: 'fit-content',
                    background: '#dce5e870',
                    padding: '0.2rem',
                    color: 'grey',
                  }}
                  text={'संतोषजनक है (Satisfactory)'}
                />
              )}
            </Box>
            {/* </Grid> */}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
