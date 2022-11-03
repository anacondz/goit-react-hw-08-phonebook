import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import {
  FilterContainer,
  PageLogo,
  StyledAppBar,
  UserNavLink,
} from './AppBarStyled';

export const AppBar = () => {
  const dispatch = useDispatch();
  const {
    user: { name },
    isLoggedIn,
  } = useAuth();

  const logoutHandler = () => {
    dispatch(logOut());
  };

  return (
    <StyledAppBar>
      <PageLogo>The Phonebook</PageLogo>
      <FilterContainer></FilterContainer>
      {isLoggedIn ? (
        <div>
          <div>{`Welcome, ${name}`}</div>
          <button type="button" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      ) : (
        <nav>
          <UserNavLink to="/">Login</UserNavLink>
          <UserNavLink to="/register">Register</UserNavLink>
        </nav>
      )}
    </StyledAppBar>
  );
};
