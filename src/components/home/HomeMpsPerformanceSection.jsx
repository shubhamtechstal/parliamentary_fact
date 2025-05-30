import React, { useEffect } from 'react';
import MpsSectionDynamic from './MpsSectionDynamic';
import AdvertiseSection from 'components/addLayout/HorizontalAdvertiseSection';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMpsPerformanceData } from 'stores/redux/apiSlices/mps_PerformanceSlice';

function HomeMpsPerformanceSection() {
    const { mp_fund_data =[], top_performance=[] } = useSelector(
        (state) => state?.mpsPerformance
      );

  return (
    <div>
      <MpsSectionDynamic
        mps_Data={top_performance}
        title={'MPs Parliament Performance'}
        subTitle={'Top Ranking MPs'}
        linkTo={'/mps-performance'}
      />
      <AdvertiseSection />
      <MpsSectionDynamic
        mps_Data={mp_fund_data}
        title={'MPs Constituency Performance'}
        subTitle={'Top Ranking MPs in Fund Spending'}
        linkTo={'/mps-constituency'}
        topMinisters_Data={mp_fund_data}
        topMinisterTitle={'Top Ranking Ministers'}
      />
      <AdvertiseSection />

      {/* Mps Rating cars  section  */}
      {/* <MpsSectionDynamic
              mps_Data={mp_fund_data}
              title={'MPs Public Rating'}
              subTitle={'Top Rated MPs'}
              linkTo={'/mps-public-rating'}
              topMinisters_Data={mp_fund_data}
              topMinisterTitle={'Top Rated Ministers'}
              isRatingCard={true}
            />
            <AdvertiseSection /> */}
    </div>
  );
}

export default HomeMpsPerformanceSection;
