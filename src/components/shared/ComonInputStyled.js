import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const ComonInput = styled(TextField)`
  display: block;

  width: 100%;
  margin-bottom: 10px;

  & div {
    width: 100%;
  }

  & fieldset {
    transition: ${({ theme }) =>
      theme.transitions.create(['border-color', 'transform'], {
        duration: theme.transitions.duration.standard,
      })};
  }
`;
