import { UserDataType } from '../types';

import { Colors } from '/src/globalStyles/colors';

export const stringCapitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const ScrollBarStylesGenerator = (
  height?: string,
  maxHeight?: string,
  hasOverflowX?: boolean,
  color?: string,
) => {
  return {
    '&::-webkit-scrollbar': {
      backgroundColor: color ? color + 25 : Colors.colorPrimary + '25',
      borderRadius: '8px',
      opacity: '0.1',
      height: '0px',
      width: '0px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: color ? color + 25 : Colors.colorPrimary + '25',
      borderRadius: '0px',
      opacity: '0.1',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: color ? color : Colors.colorPrimary,
      borderRadius: '0px',
    },
    overflow: hasOverflowX ? 'auto' : 'hidden',
    maxHeight: maxHeight ? maxHeight : null,
    height: height ? height : null,

    paddingRight: '0px',

    overflowY: 'auto',
  };
};

export const searchUsers = (users: UserDataType[], searchValue: string) => {
  return users.filter((user) => {
    const values = [user.name.firstname, user.name.lastname, user.email, user.phone].join(' ').toLowerCase();

    return values.includes(searchValue.toLowerCase());
  });
};
