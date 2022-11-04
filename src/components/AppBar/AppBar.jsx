import { MainNavigation } from 'components/MainNavigation/MainNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { FilterContainer, PageLogo, StyledAppBar } from './AppBarStyled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledAppBar>
      <PageLogo>The Phonebook</PageLogo>
      <FilterContainer></FilterContainer>
      {isLoggedIn ? <UserMenu /> : <MainNavigation />}
    </StyledAppBar>
  );
};
