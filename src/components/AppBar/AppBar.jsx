import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

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
    <div>
      {isLoggedIn ? (
        <div>
          <div>{`Welcome, ${name}`}</div>
          <button type="button" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      ) : (
        <nav>
          <NavLink to="/">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </nav>
      )}
    </div>
  );
};
