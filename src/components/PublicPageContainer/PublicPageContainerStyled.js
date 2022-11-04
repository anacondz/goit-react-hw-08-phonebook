import { styled } from '@mui/material/styles';

export const Container = styled('div')`
  display: flex;
  flex-grow: 1;

  padding: 10px;

  justify-content: center;
  align-items: center;
`;

export const FormWindow = styled('div')`
  position: relative;

  min-width: 300px;
  width: 380px;
  padding: 30px;

  border-radius: 10px;
  background-color: white;

  box-shadow: ${({ theme }) => theme.shadows[6]};

  overflow: hidden;
`;

export const FormTitle = styled('h2')`
  margin: 0;
  margin-bottom: 20px;

  text-align: center;
`;

export const FormHint = styled('p')`
  margin: 0;
  margin-bottom: 20px;

  color: ${({ theme }) => theme.palette.text.secondary};

  text-align: center;
`;
