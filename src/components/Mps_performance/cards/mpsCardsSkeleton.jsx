import { Box, Grid, Skeleton } from '@mui/material';

export const MpsSmallCardsSkeleton = () => {
  return (
    <>
      {Array(6)
        .fill({ id: 10 })
        .map((i) => {
          return (
            <Grid item xs={6} sm={4} md={3} lg={2} key={i}>
              <Skeleton
                key={i}
                variant="rounded"
                sx={{ borderRadius: '20px' }}
                width={170}
                height={170}
              />
            </Grid>
          );
        })}
    </>
    // <Box
    //   sx={{
    //     width: '100%',
    //     display: 'flex',
    //     // flexWrap: 'wrap',
    //     // justifyContent: 'space-between',
    //     mb: 2,
    //     overflowX:'auto'
    //   }}
    // >
    //   <Skeleton
    //     variant="rounded"
    //     sx={{ borderRadius: '20px' }}
    //     width={170}
    //     height={170}
    //   />
    //   <Skeleton
    //     variant="rounded"
    //     sx={{ borderRadius: '20px' }}
    //     width={170}
    //     height={170}
    //   />
    //   <Skeleton
    //     variant="rounded"
    //     sx={{ borderRadius: '20px' }}
    //     width={170}
    //     height={170}
    //   />
    //   <Skeleton
    //     variant="rounded"
    //     sx={{ borderRadius: '20px' }}
    //     width={170}
    //     height={170}
    //   />
    //   <Skeleton
    //     variant="rounded"
    //     sx={{ borderRadius: '20px' }}
    //     width={170}
    //     height={170}
    //   />
    //   <Skeleton
    //     variant="rounded"
    //     sx={{ borderRadius: '20px' }}
    //     width={170}
    //     height={170}
    //   />
    // </Box>
  );
};
export const MpsBigCardsSkeleton = () => {
  return (
    <>
      {Array(3)
        .fill({ id: 10 })
        .map((i) => {
          return (
            <Box>
              <Skeleton
                variant="rounded"
                sx={{ borderRadius: '20px' }}
                width={340}
                height={250}
              />
            </Box>
          );
        })}
    </>
  );
};
