import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { AppBar } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  position: sticky;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 20px;
`;

export const PageLogo = styled('h1')`
  margin: 0;
`;

export const FilterContainer = styled('div')`
  flex-grow: 1;
`;

export const UserNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.palette.text.primary};

  font-size: 20px;
  font-weight: 600;

  text-decoration: none;

  transition: ${({ theme }) =>
    theme.transitions.create(['color', 'transform'], {
      duration: theme.transitions.duration.standard,
    })};

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  &.active {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;
