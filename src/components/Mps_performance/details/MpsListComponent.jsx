import { Box, Container, Skeleton } from '@mui/material';
import SectionHeading from 'components/common/SectionHeading';
import {
  mpsDataNetionalRank,
  mpsDataStateRank,
} from 'helpers/performanceConstants';
import { useEffect, useState } from 'react';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import GrayButton from 'components/common/GrayButton';
import RankingTable from 'components/common/modals/RankingTable';
import MobMPsRankingCards from 'components/common/mobile/MobMPsRankingCards';
import AdvertiseSection from 'components/addLayout/HorizontalAdvertiseSection';
import FilterController from 'components/common/modals/FilterController';
import IconButton from 'components/common/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { fetchMpsPerformanceData } from 'stores/redux/apiSlices/mps_PerformanceSlice';
import { useDispatch, useSelector } from 'react-redux';
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
  // mpsDataNetionalRank,
  // mpsDataStateRank,
  datasetsKey,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMpsPerformanceData({ datasets: [datasetsKey] }));
  }, [dispatch]);
  const mpsData = useSelector(
    (state) => state?.mpsPerformance?.partial?.[datasetsKey] || []
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
            justifyContent: { xs: 'center', md: 'end' },
            alignItems: 'center',
            display: { md: 'flex', xs: 'none' },
            pr: 5,
          }}
          my={2}
        >
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
