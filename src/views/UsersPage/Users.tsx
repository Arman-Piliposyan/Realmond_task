import { Typography, Box } from '@mui/material';
import React from 'react';

import { SearchSection } from './SearchSection';
import { UsersSection } from './UsersSection';

export const Users = () => {
  return (
    <Box sx={{ flexDirection: 'column', display: 'flex', height: '100%', width: '100%' }}>
      <Typography fontWeight={700} align="center" fontSize={32}>
        Users
      </Typography>
      <SearchSection />
      <UsersSection />
    </Box>
  );
};
