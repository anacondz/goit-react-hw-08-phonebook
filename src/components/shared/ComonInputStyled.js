import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const ComonInput = styled(TextField)`
  margin-bottom: 10px;

  & fieldset {
    transition: ${({ theme }) =>
      theme.transitions.create(['border-color', 'transform'], {
        duration: theme.transitions.duration.standard,
      })};
  }
`;
