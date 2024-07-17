import React, { useState } from 'react';
import { Box } from '@mui/material';

import { LayoutLoader } from '/src/common/components/UI-Components/LayoutLoader';
import { UserCard } from '/src/common/components/UserCard';
import { useDidUpdate } from '/src/hooks/UseDidUpdate';
import { ScrollBarStylesGenerator } from '/src/utils';
import { useUserContext } from '/src/Contexts';
import { UserDataType } from '/src/types';

export const UsersSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { usersSearchData, usersData } = useUserContext();

  useDidUpdate(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => {
      clearTimeout(timeout);
    };
  }, [usersSearchData]);

  return (
    <Box
      sx={{
        ...ScrollBarStylesGenerator('100%'),
        justifyContent: 'center',
        alignContent: 'baseline',
        flexWrap: 'wrap',
        display: 'flex',
        width: '100%',
        gap: '14px',
        px: '16px',
        py: '6px',
      }}
    >
      {isLoading ? (
        <LayoutLoader />
      ) : (
        (usersSearchData || usersData).map((user: UserDataType) => {
          return <UserCard cardData={user} key={user.id} />;
        })
      )}
    </Box>
  );
};
