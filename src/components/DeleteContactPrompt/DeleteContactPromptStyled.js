import { styled } from '@mui/material/styles';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

export const ContactName = styled('p')`
  margin: 0;
  margin-bottom: 10px;

  color: ${({ theme }) => theme.palette.error.main};

  font-size: 20px;
  font-weight: 600;

  text-align: center;
  text-transform: capitalize;
`;

export const PromptMessage = styled('p')`
  margin: 0;
  margin-bottom: 30px;

  color: ${({ theme }) => theme.palette.text.secondary};

  text-align: center;
`;

export const DeleteIcon = styled(DeleteForeverOutlinedIcon)`
  display: block;

  margin: 0 auto;
  margin-bottom: 10px;

  color: ${({ theme }) => theme.palette.error.main};

  font-size: 60px;
`;
