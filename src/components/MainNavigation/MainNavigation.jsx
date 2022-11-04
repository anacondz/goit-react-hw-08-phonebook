import { UserNavLink } from './MainNavigationStyled';

export const MainNavigation = () => (
  <nav>
    <UserNavLink to="/">Login</UserNavLink>
    <UserNavLink to="/register">Register</UserNavLink>
  </nav>
);
