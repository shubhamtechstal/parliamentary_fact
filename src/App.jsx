import { Suspense } from 'react';

import AppRoutes from 'components/router/AppRoutes';
import { Box, CircularProgress } from '@mui/material';

const App = () => {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            height: '40vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      <div>
        <AppRoutes />
      </div>
    </Suspense>
  );
};

App.propTypes = {};

export default App;
