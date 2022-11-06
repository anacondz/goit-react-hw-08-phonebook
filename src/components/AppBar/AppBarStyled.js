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
  @media screen and (max-width: 599.98px) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  display: flex;
  align-items: center;

  height: 48px;
  margin: 0;

  font-size: 14px;

  @media screen and (min-width: 620px) {
    font-size: 16px;
  }

  @media screen and (min-width: 640px) {
    font-size: 18px;
  }

  @media screen and (min-width: 660px) {
    font-size: 20px;
  }

  @media screen and (min-width: 700px) {
    font-size: 22px;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 860px) {
    font-size: 28px;
  }

  @media screen and (min-width: 960px) {
    font-size: 36px;
  }
`;

export const FilterContainer = styled('div')`
  margin-right: 10px;

  @media screen and (min-width: 600px) {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }
`;
