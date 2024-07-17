import { CircularProgress, Box } from '@mui/material';
import React from 'react';

import { Colors } from '/src/globalStyles/colors';

export const LayoutLoader = ({ height }: { height?: string }) => {
  const loadingContainerStyles = {
    height: `${height ? height : '100%'}`,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  };
  return (
    <Box sx={loadingContainerStyles}>
      <CircularProgress sx={{ color: Colors.colorPrimary }} size={30} />
    </Box>
  );
};
