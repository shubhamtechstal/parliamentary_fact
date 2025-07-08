import { Box } from '@mui/material';
import AdvertisementLayout from 'components/addLayout/AdvertisementLayout';
import Loader from 'components/common/Loader';
import MpDetailsPageComponent from 'components/mps-details/MpDetailsPageComponent';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMpDetailsById } from 'stores/redux/apiSlices/yourMpsSlice';

function MpsDetailsContainer() {
  const dispatch = useDispatch();
  const { mpDetails, mpDetailsLoading, mpDetailsError } = useSelector((state) => state.yourMps);
  const { mpId } = useParams();
  const mp_Id = mpId.split('_')[1];
  useEffect(() => {
    if (mpId) {
      dispatch(fetchMpDetailsById(mp_Id));
    }
  }, [mpId]);
  return (
    <div>
      <AdvertisementLayout>
        {mpDetailsLoading ?
        <Box sx={{minHeight:'80vh', display:'flex', justifyContent:'center', alignItems:"center"}}>
          <Loader position="relative" loading />
        </Box>
      :
        !mpDetailsError ? <MpDetailsPageComponent mpDetails={mpDetails} /> : <>{`Data can not be fetched Due to : ${mpDetailsError}`}</>
      }
      </AdvertisementLayout>
    </div>
  );
}

export default MpsDetailsContainer;
