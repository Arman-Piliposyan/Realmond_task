import React, { createContext, useContext, useState } from 'react';

import { UserDataType } from '../types';

type UserContextType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [propKey: string]: any;
};

const UserContext = createContext({} as UserContextType);

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
};

export const UserContextProvider = ({ children }: Props): JSX.Element => {
  const [usersData, setUsersData] = useState<UserDataType[] | null>(null);
  const [usersSearchData, setUsersSearchData] = useState<UserDataType[] | null>(null);

  const contextData = {
    setUsersSearchData,
    usersSearchData,
    setUsersData,
    usersData,
  };

  return <UserContext.Provider value={contextData}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const contextData = useContext(UserContext);
  return contextData;
};
