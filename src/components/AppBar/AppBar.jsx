import { useAuth } from 'hooks/useAuth';
import { FilterField } from 'components/FilterField/FilterField';
import { MainNavigation } from 'components/MainNavigation/MainNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { ComonLinearProgress } from 'components/shared';
import {
  FilterContainer,
  UnauthorizedPageLogo,
  AuthorizedPageLogo,
  StyledAppBar,
} from './AppBarStyled';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';

export const AppBar = () => {
  const { isLoggedIn, isRefreshing, isPending } = useAuth();
  const { isFetching } = useGetContactsQuery();

  return (
    <StyledAppBar>
      {isLoggedIn ? (
        <AuthorizedPageLogo>The Phonebook</AuthorizedPageLogo>
      ) : (
        <UnauthorizedPageLogo>The Phonebook</UnauthorizedPageLogo>
      )}

      {isLoggedIn && !isRefreshing ? (
        <FilterContainer>
          <FilterField />
        </FilterContainer>
      ) : null}

      {isLoggedIn ? <UserMenu /> : <MainNavigation />}
      <ComonLinearProgress
        isvisible={isRefreshing || isPending || isFetching ? '1' : '0'}
      />
    </StyledAppBar>
  );
};
