import { Avatar, Box, Button, Rating, TextField } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import GrayButton from 'components/common/GrayButton';
import ContributionRatingCard from '../commonfiles/ContributionRatingCards';

function MpsDetailsPublicRating() {
  return (
    <Box sx={{ color: '#707070' }}>
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            fontSize: '0.8rem',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{
              height: '100px',
              width: '100px',
              backgroundColor: 'white',
              border: '2px solid #707070',
            }}
          >
            2
          </Avatar>
          <div>
            <h4 style={{ margin: '0 0' }}>
              Neeraj Ram Mandola houdheer Mandola
            </h4>
            <p style={{ margin: '0 0' }}>Samajwadi Panty</p>
            <p style={{ margin: '0 0' }}>
              {' '}
              Azamgarh <br /> Uttar Pradesh
            </p>
          </div>
        </Box>
        <h2>Current Rating</h2>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {' '}
          <Rating
            sx={{
              fontSize: '2.5rem',
              '& .MuiRating-icon': {
                marginRight: '0.5rem',
              },
            }}
            // name={`rating-${2}`}
            value={4}
            // onChange={(event, newValue) => handleRatingChange(index, newValue)}
            emptyIcon={
              <StarIcon style={{ color: '#000000' }} fontSize="inherit" />
            }
          />
          <GrayButton bgColor={'#E39A00'}>4.98</GrayButton>
        </Box>
        <p style={{ marginTop: '8px' }}>
          {' '}
          Performance: <span style={{ fontWeight: '600' }}>
            {' '}
            Satisfactory
          </span>{' '}
        </p>
      </Box>
      <Box sx={{ p: 2, fontSize: '0.7rem' }}>
        <p>
          Here you can rate your MP based on their work under the following 5
          parameters{' '}
        </p>
        <p>
          {' '}
          आप यहाँ अपने सांसद को उनके कार्य के आधार पर निम्न 5 मापदंडों के
          अंतर्गत रेटिंग दे सकते हैं
        </p>

        <ContributionRatingCard />

        <Box>
          <p>Please fill out your details</p>
          <form
            action=""
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              padding: '1rem',
            }}
          >
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name=""
                  id=""
                  value="checkedValue"
                  checked
                />
                Male
              </label>
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name=""
                  id=""
                  value="checkedValue"
                  checked
                />
                Female
              </label>
            </div>
            <TextField fullWidth type="text" label="Type Name" id="name" />
            <TextField fullWidth type="email" label="Emai" id="emai" />
            <TextField fullWidth type="number" label="Mobile No" id="mobile" />
            <TextField
              fullWidth
              type="text"
              label="Select age catagory"
              id="age"
            />
            <TextField
              fullWidth
              type="text"
              label="Enter city/ District Name"
              id="city-district"
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px',
                alignItems: 'center',
              }}
            >
              {' '}
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name=""
                    id=""
                    value="checkedValue"
                    checked
                  />
                  Terms and conditions
                </label>
              </div>{' '}
              <div
                style={{
                  border: '3px solid #707070',
                  height: '40px',
                  width: '180px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderRadius: '15px',
                }}
              >
                <button
                  style={{
                    backgroundColor: 'gray',
                    border: 'none',
                    borderRadius: '13px',
                    width: '90px',
                    color: 'white',
                  }}
                  type="button"
                >
                  Send Otp
                </button>{' '}
                <input
                  type="number"
                  placeholder="Enter OTP"
                  style={{ width: '50%', border: 'none', borderRadius: '20px' }}
                />{' '}
              </div>{' '}
            </Box>
            <Button
              variant="contained"
              sx={{
                width: '160px',
                margin: 'auto',
                backgroundColor: '#0d0d6e',
                borderRadius: '20px',
              }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default MpsDetailsPublicRating;
