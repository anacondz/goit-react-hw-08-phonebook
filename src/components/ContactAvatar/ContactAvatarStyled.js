import { styled } from '@mui/material/styles';

export const RoundContainer = styled('div')`
  position: relative;

  width: 100px;
  height: 100px;
  margin: auto;

  flex-shrink: 0;

  background-color: ${({ theme }) => theme.palette.primary.light};

  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.palette.primary.light};
  border-radius: 50%;

  box-shadow: ${({ theme }) => theme.shadows[6]};

  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 130px;
    height: 130px;
  }
`;

export const FirstLetter = styled('span')`
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 2;

  font-size: 86px;
  font-weight: 600;
  line-height: 1;

  color: white;

  opacity: 0.8;

  text-transform: uppercase;

  transform: translateY(-52%);

  @media screen and (min-width: 768px) {
    font-size: 112px;
  }
`;

export const SecondLetter = styled('span')`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;

  font-size: 68px;
  font-weight: 600;
  line-height: 1;

  color: black;

  opacity: 0.3;

  text-transform: uppercase;

  transform: translateY(-52%);

  @media screen and (min-width: 768px) {
    font-size: 92px;
  }
`;
