import { styled } from '@mui/material/styles';

export const ContentContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 300px;
  height: 100%;
  padding: 30px 20px;
`;

export const UserGreetings = styled('p')`
  margin-bottom: 10px;

  color: ${({ theme }) => theme.palette.text.secondary};

  font-size: 14px;

  text-align: center;
`;

export const UserName = styled('h3')`
  display: block;

  flex-grow: 1;

  width: min-content;
  margin-top: 0;

  text-align: center;
`;
