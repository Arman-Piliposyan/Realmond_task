import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { CircularProgress, Box } from '@mui/material';
import React, { Suspense } from 'react';

import { Colors } from '/src/globalStyles/colors';

interface SuspenseWrapperProps {
  children: ReactJSXElement;
}

const SuspenseWrapper = ({ children }: SuspenseWrapperProps) => {
  const wrapperStyles = {
    backgroundColor: Colors.rootBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    display: 'flex',
  };

  return (
    <Suspense
      fallback={
        <Box sx={wrapperStyles}>
          <CircularProgress sx={{ color: Colors.colorPrimary }} size={40} />
        </Box>
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseWrapper;
