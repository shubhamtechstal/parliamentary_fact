import { Box, Container, Skeleton } from '@mui/material';
import SectionHeading from 'components/common/SectionHeading';
import {
  mpsDataNetionalRank,
  mpsDataStateRank,
} from 'helpers/performanceConstants';
import { useEffect, useState } from 'react';
import GrayButton from 'components/common/GrayButton';
import RankingTable from 'components/common/modals/RankingTable';
import MobMPsRankingCards from 'components/common/mobile/MobMPsRankingCards';
import AdvertiseSection from 'components/addLayout/HorizontalAdvertiseSection';
import FilterController from 'components/common/modals/FilterController';
import {
  fetchConstituencyPopulerMps,
  fetchMpsPerformanceData,
  fetchPopulerMpsData,
} from 'stores/redux/apiSlices/mps_PerformanceSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
const mpsSkeleton = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Skeleton variant="text" width={'90%'} height={70} />
      <Skeleton variant="text" width={'90%'} height={70} />
      <Skeleton variant="text" width={'90%'} height={70} />
      <Skeleton variant="text" width={'90%'} height={70} />
      <Skeleton variant="text" width={'90%'} height={70} />
      <Skeleton variant="text" width={'90%'} height={70} />
      <Skeleton variant="text" width={'100%'} height={170} />
    </Box>
  );
};
function MpsListComponent({
  handleOpenSharePopup,
  pageTitle,
  cardName,
  filterParams,
  // mpsDataNetionalRank,
  // mpsDataStateRank,
  datasetsKey,
}) {
  const mapShortByToApiKey = {
    'top-performer': 'default',
    'bottom-performer': 'bottom',
    'non-performer': 'non_performer',
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const shortByParam = searchParams.get('shortBy');
  const [shortingKey, setshortingKey] = useState(
    mapShortByToApiKey[shortByParam] || 'default'
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (datasetsKey === 'constituency_popular_mps') {
      dispatch(fetchConstituencyPopulerMps());
    } else if (datasetsKey === 'popular_mps') {
      dispatch(fetchPopulerMpsData());
    } else {
      dispatch(
        fetchMpsPerformanceData({
          datasets: [datasetsKey],
          key: shortingKey,
          ...(shortingKey === 'bottom' && { bottom: 1 }),
          ...(shortingKey === 'non_performer' && { non_percentage: 1 }),
        })
      );
    }
  }, [datasetsKey, shortingKey, dispatch]);
  const mpsData = useSelector((state) =>
    datasetsKey === 'constituency_popular_mps'
      ? state?.constituencyPopulerMps?.constituency_popular_mps
      : datasetsKey === 'popular_mps'
        ? state?.populerMps?.popular_mps
        : state?.mpsPerformance?.partial?.[datasetsKey]?.[shortingKey] || []
  );

  const mpsDataNetional_Rank = mpsDataNetionalRank(mpsData);
  const mpsDataState_Rank = mpsDataStateRank(mpsData);

  const [isStateRank, setIsStateRank] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleStateRankClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsStateRank((prev) => !prev);
      setIsLoading(false);
    }, 300);
  };
  const mpsdata = isStateRank ? mpsDataState_Rank : mpsDataNetional_Rank;

  const [loadMoreMpsData, setloadMoreMpsData] = useState(10);
  const [showMoreLoder, setShowMoreLoder] = useState(false);
  const handleLoadMoreMps = () => {
    setShowMoreLoder(true);
    setTimeout(() => {
      setloadMoreMpsData((prev) => prev + 20); // state for Load 10 more questions
      setShowMoreLoder(false);
    }, 500);
  };

  const performerOptions = [
    {
      label: 'Top Performer',
      shortKey: 'default',
      queryValue: 'top-performer',
    },
    {
      label: 'Bottom Performer',
      shortKey: 'bottom',
      queryValue: 'bottom-performer',
    },
    {
      label: 'Non Performer',
      shortKey: 'non_performer',
      queryValue: 'non-performer',
    },
  ];

  return (
    <>
      {/* **********Mobile********** */}
      <Box
        sx={{
          position: 'relative',
          display: { xs: 'flex', md: 'none' },
          // gap: '2em',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <h3 style={{ textAlign: 'center', fontSize: '1.2rem', margin: '10px' }}>
          {' '}
          <span
            style={{
              display: 'inline-block',
              width: '14px',
              height: '14px',
              backgroundColor: '#f1807c',
              borderRadius: '3px',
              marginRight: '6px',
            }}
          ></span>{' '}
          {pageTitle}
        </h3>
        <Box sx={{ position: 'absolute', top: '-3rem', right: '1rem' }}>
          <FilterController />
        </Box>
        <Box mb={2}>
          <GrayButton
            onClick={() => handleStateRankClick(false)}
            fontWeight="600"
            bgColor="#fff"
            textColor="#00000080"
          >
            {!isStateRank ? 'Check State Ranking' : 'Back  to National Rank'}
          </GrayButton>
        </Box>
      </Box>
      <Box
        display={{
          md: 'none',
          xs: 'flex',
          flexDirection: 'column',
          gap: '1em',
        }}
      >
        {mpsdata?.length > 0
          ? mpsdata?.slice(0, loadMoreMpsData).map((mp, index) => (
              <>
                <MobMPsRankingCards
                  mp={mp}
                  isLoading={isLoading}
                  key={index}
                  handleOpenSharePopup={handleOpenSharePopup}
                  cardName={cardName}
                />
                {(index + 1) % 5 === 0 && <AdvertiseSection />}
              </>
            ))
          : mpsSkeleton()}
      </Box>

      {/* ******Desktop**** */}
      <Container
        sx={{
          position: 'relative',
          marginBottom: '10rem',
        }}
      >
        <Box
          // className="performanceSection"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            display: { md: 'flex', xs: 'none' },
            px: 2,
            fontSize: '1.2rem',
            mt: 2,
          }}
        >
          <SectionHeading title={pageTitle} />
          <FilterController />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'space-between' },
            alignItems: 'center',
            display: { md: 'flex', xs: 'none' },
            pr: 5,
          }}
          my={2}
        >
          {' '}
          {datasetsKey.includes('popular_mps') ? (
            <h1></h1>
          ) : (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                m: 2,
                flexWrap: 'wrap',
              }}
            >
              {performerOptions.map(({ label, shortKey, queryValue }) => (
                <GrayButton
                  key={shortKey}
                  onClick={() => {
                    setSearchParams((prev) => {
                      const params = new URLSearchParams(prev);

                      // Always keep section
                      const section =
                        params.get('section') || 'mps-private-member-bill';

                      // Set new shortBy while preserving other params
                      params.set('section', section);
                      params.set('shortBy', queryValue);

                      return Object.fromEntries(params.entries());
                    });

                    setshortingKey(shortKey);
                  }}
                  fontWeight="600"
                  bgColor={shortingKey === shortKey ? '#f1807c' : '#fff'}
                  textColor={shortingKey === shortKey ? '#fff' : '#00000080'}
                >
                  {label}
                </GrayButton>
              ))}
            </Box>
          )}
          <GrayButton
            onClick={() => handleStateRankClick(false)}
            fontWeight="600"
            bgColor="#fff"
            textColor="#00000080"
          >
            {!isStateRank ? 'Check State Ranking' : 'Back  to National Rank'}
          </GrayButton>
        </Box>
        <Box display={{ xs: 'none', md: 'block' }}>
          {mpsdata?.length > 0 ? (
            <RankingTable
              mpsdata={mpsdata}
              handleOpenSharePopup={handleOpenSharePopup}
              loadMoreMpsData={loadMoreMpsData}
              cardName={cardName}
              isLoading={isLoading}
              pageTitle={pageTitle}
            />
          ) : (
            mpsSkeleton()
          )}
        </Box>
        {showMoreLoder && mpsSkeleton()}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            gap: '1rem',
            p: 2,
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <p style={{ margin: '0 0' }}>
            Totle Mps : <b> {mpsdata?.length ? mpsdata?.length : 0} </b>{' '}
          </p>
          <p style={{ margin: '0 0' }}>
            {' '}
            ( Showing :{' '}
            <b>
              {' '}
              {mpsdata?.length > loadMoreMpsData
                ? loadMoreMpsData
                : mpsdata?.length
                  ? mpsdata?.length
                  : 0}{' '}
            </b>{' '}
            ){' '}
          </p>
          {loadMoreMpsData < mpsdata?.length && (
            <GrayButton
              onClick={() => handleLoadMoreMps()}
              text={'Load Next 20 Mps'}
              sx={{
                width: '20%',
                height: '2.5rem',
                fontSize: '1rem',
                borderRadius: '0.5rem',
              }}
            />
          )}
        </Box>
      </Container>
    </>
  );
}

export default MpsListComponent;
