import { useAuth } from 'hooks/useAuth';
import { FilterField } from 'components/FilterField/FilterField';
import { MainNavigation } from 'components/MainNavigation/MainNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { FilterContainer, PageLogo, StyledAppBar } from './AppBarStyled';

export const AppBar = () => {
  const { isLoggedIn, isRefreshing } = useAuth();

  return (
    <StyledAppBar>
      <PageLogo>The Phonebook</PageLogo>

      {isLoggedIn && !isRefreshing ? (
        <FilterContainer>
          <FilterField />
        </FilterContainer>
      ) : null}

      {isLoggedIn ? <UserMenu /> : <MainNavigation />}
    </StyledAppBar>
  );
};
