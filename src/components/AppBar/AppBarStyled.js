import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  position: sticky;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 14px 20px;
`;

export const PageLogo = styled('h1')`
  display: flex;
  align-items: center;

  height: 48px;
  margin: 0;
`;

export const FilterContainer = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;
