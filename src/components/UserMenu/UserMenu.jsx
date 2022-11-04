import { useAuth } from 'hooks/useAuth';
import { useState } from 'react';
import { Avatar, SwipeableDrawer, IconButton } from '@mui/material';
import { blue } from '@mui/material/colors';
import { UserMenuContent } from 'components/UserMenuContent/UserMenuContent';

export const UserMenu = () => {
  const {
    user: { name },
  } = useAuth();
  const [isMenuShown, setIsMenuShown] = useState(false);

  function stringAvatar(name) {
    if (name.includes(' ')) {
      const splittedName = name.split(' ');
      return {
        children:
          splittedName[0][0].toUpperCase() + splittedName[1][0].toUpperCase(),
      };
    }

    return { children: name.substring(0, 2).toUpperCase() };
  }

  const avatarChildren = stringAvatar(name);

  return (
    <>
      <IconButton
        sx={{ p: 0 }}
        disabled={isMenuShown}
        onClick={() => setIsMenuShown(true)}
      >
        <Avatar
          sx={{ width: 48, height: 48, bgcolor: blue[300] }}
          {...avatarChildren}
        />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={isMenuShown}
        onOpen={() => setIsMenuShown(true)}
        onClose={() => setIsMenuShown(false)}
      >
        <UserMenuContent avatarChildren={avatarChildren} />
      </SwipeableDrawer>
    </>
  );
};
