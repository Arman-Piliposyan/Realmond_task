import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { Box } from '@mui/material';
import React from 'react';

import { stringCapitalize } from '/src/utils';
import { UserDataType } from '/src/types';
import { UserIcon } from '/src/assets';

type Props = {
  cardData: UserDataType;
};

export const UserCard = ({ cardData }: Props) => {
  return (
    <Card
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '8px',
        height: '280px',
        display: 'flex',
        width: '270px',
      }}
    >
      <Box sx={{ height: '100%', p: '8px' }}>
        <Box sx={{ width: '180px' }}>
          <UserIcon />
        </Box>
        <Typography align="center">
          Full Name : {stringCapitalize(cardData.name.firstname)} {stringCapitalize(cardData.name.lastname)}
        </Typography>
        <Typography fontSize={14}>Email : {cardData.email}</Typography>
        <Typography fontSize={14}>Phone : {cardData.phone}</Typography>
      </Box>
    </Card>
  );
};
