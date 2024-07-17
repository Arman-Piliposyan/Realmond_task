import { InputAdornment, TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';

import { useDebouncedValue } from '/src/hooks/UseDebounc';
import { useDidUpdate } from '/src/hooks/UseDidUpdate';
import { Colors } from '/src/globalStyles/colors';
import { useUserContext } from '/src/Contexts';
import { searchUsers } from '/src/utils';

export const SearchSection = () => {
  const { setUsersSearchData, usersData } = useUserContext();

  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebouncedValue(searchValue);

  const handleChangeSearchValue = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useDidUpdate(() => {
    if (debouncedSearchValue) {
      return setUsersSearchData(searchUsers(usersData, debouncedSearchValue));
    }
    return setUsersSearchData(null);
  }, [debouncedSearchValue]);

  return (
    <Box
      sx={{
        backgroundColor: Colors.muiDataGridBackground,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '6px',
        display: 'flex',
        p: '12px 16px',
        mb: '16px',
      }}
    >
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={handleChangeSearchValue}
        sx={{ width: '270px' }}
        value={searchValue}
        autoComplete="off"
        label="Search"
        size="small"
        fullWidth
      />
    </Box>
  );
};
