import { useAuth } from 'hooks/useAuth';
import { UserNavLink } from './MainNavigationStyled';

export const MainNavigation = () => {
  const { isRefreshing } = useAuth();

  if (!isRefreshing)
    return (
      <nav>
        <UserNavLink to="/login">Login</UserNavLink>
        <UserNavLink to="/register">Register</UserNavLink>
      </nav>
    );
};
