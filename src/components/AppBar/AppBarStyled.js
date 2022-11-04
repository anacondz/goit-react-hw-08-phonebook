import { styled } from '@mui/material/styles';
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
