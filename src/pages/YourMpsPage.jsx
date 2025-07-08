import { Box, Card, Container, Typography } from '@mui/material';
import AdvertisementLayout from 'components/addLayout/AdvertisementLayout';
import PartyWiseMpsList from 'components/your-mps/PartyWiseMps';
import { extractMpList } from 'helpers/utills/utilityFunctions';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchYourMpsList } from 'stores/redux/apiSlices/yourMpsSlice';
import Avatar from 'components/common/Avatar';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function YourMpsPage() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.yourMps);
  const simplifiedMpList = extractMpList(list);
  useEffect(() => {
    dispatch(fetchYourMpsList());
  }, [dispatch]);
  const [filterParams, setFilterParams] = useState(null);

  return (
    <AdvertisementLayout>
      <Container>
        <h1>Search Your MP</h1>
        <Autocomplete
          disablePortal
          options={simplifiedMpList}
          getOptionLabel={(option) => `${option.full_name}${option.mp_id}`}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Search Your Mps" />
          )}
          onChange={(event, newValue) => {
            if (newValue) {
              setFilterParams(newValue);
            }
          }}
        />
        {filterParams && (
          <Box sx={{ p: 3, width: '200px' }}>
            <MemberCard mp={filterParams} />
            Your Searched Mp
          </Box>
        )}
        <PartyWiseMpsList
          mpsList={list}
          loading={loading}
          error={error}
          MemberCard={MemberCard}
        />
      </Container>
    </AdvertisementLayout>
  );
}
const MemberCard = ({ mp }) => {
  return (
    <Link
      style={{ textDecoration: 'none', color: 'inherit' }}
      to={
        mp?.mp_id
          ? `/mps-details/${mp?.full_name.replaceAll(' ', '-')?.toLowerCase()}_${mp?.mp_id}`
          : '#'
      }
    >
      <Card
        sx={{
          p: 2,
          textAlign: 'center',
          borderRadius: 3,
          border: '1px solid #f5f5f5',
          boxShadow: 'none',
          width: '150px',
          height: 160,
        }}
      >
        <Box sx={{ position: 'relative', display: 'inline-block' }}>
          <Avatar
            alt={mp.image || mp.photo_url}
            src={mp.image || mp.photo_url}
            sx={{ width: 56, height: 56, margin: '0 auto' }}
          />
          {mp?.status && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                backgroundColor: mp.status === 'up' ? '#4CAF50' : '#F44336',
                borderRadius: '50%',
                width: 20,
                height: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              {mp?.status === 'up' ? (
                <ArrowDropUp fontSize="small" />
              ) : (
                <ArrowDropDown fontSize="small" />
              )}
            </Box>
          )}
        </Box>
        <Typography variant="body2" sx={{ mt: 1, fontWeight: 500 }}>
          {mp.full_name}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {mp.constituency}
        </Typography>
      </Card>
    </Link>
  );
};
export default YourMpsPage;
