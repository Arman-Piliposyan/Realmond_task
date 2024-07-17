import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { wrapperStyle } from './style';
import { Users } from './Users';

import { LayoutLoader } from '/src/common/components/UI-Components/LayoutLoader';
import { getUsersData } from '/src/services/userService';
import { useUserContext } from '/src/Contexts';

const UsersPage = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);

  const { setUsersData } = useUserContext();

  const userGet = async () => {
    try {
      const { data } = await getUsersData();
      setUsersData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsPageLoading(false);
    }
  };

  useEffect(() => {
    userGet();
  }, []);

  return <Box sx={wrapperStyle}>{isPageLoading ? <LayoutLoader /> : <Users />}</Box>;
};

export default UsersPage;
