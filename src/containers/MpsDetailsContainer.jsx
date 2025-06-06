import AdvertisementLayout from 'components/addLayout/AdvertisementLayout';
import MpDetailsPageComponent from 'components/mps-details/MpDetailsPageComponent';
import React from 'react';

function MpsDetailsContainer() {
  return (
    <div>
      <AdvertisementLayout>
        <MpDetailsPageComponent />{' '}
      </AdvertisementLayout>
    </div>
  );
}

export default MpsDetailsContainer;
