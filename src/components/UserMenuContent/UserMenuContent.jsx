import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';
import {
  ContentContainer,
  UserGreetings,
  UserName,
} from './UserMenuContentStyled';
import { ComonButton } from 'components/shared';

export const UserMenuContent = ({ avatarChildren }) => {
  const dispatch = useDispatch();
  const {
    user: { name },
    isPending,
  } = useAuth();

  return (
    <ContentContainer>
      <Avatar
        sx={{ width: 120, height: 120, bgcolor: blue[600], fontSize: 60 }}
        {...avatarChildren}
      />
      <UserGreetings>Welcome!</UserGreetings>
      <UserName>{name}</UserName>
      <ComonButton
        variant="contained"
        color="error"
        loading={isPending}
        disabled={isPending}
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </ComonButton>
    </ContentContainer>
  );
};

UserMenuContent.propTypes = {
  avatarChildren: PropTypes.exact({
    children: PropTypes.string.isRequired,
  }).isRequired,
};
