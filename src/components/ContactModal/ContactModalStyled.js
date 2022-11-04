import { styled } from '@mui/material/styles';

export const ModalContainer = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;

  min-width: 300px;
  width: 380px;
  padding: 30px;

  background-color: white;

  border-radius: 10px;
  outline: transparent;

  box-shadow: ${({ theme }) => theme.shadows[6]};

  transform: translate(-50%, -50%);

  overflow: hidden;
`;

export const ModalTitle = styled('h3')`
  margin: 0;
  margin-bottom: 20px;

  font-size: 26px;
  text-align: center;
`;
