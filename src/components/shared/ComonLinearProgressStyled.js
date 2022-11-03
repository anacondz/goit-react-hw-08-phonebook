import { styled } from '@mui/material/styles';
import { LinearProgress } from '@mui/material';

export const ComonLinearProgress = styled(LinearProgress)`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 6px;

  opacity: ${({ isvisible }) => isvisible};

  transition: ${({ theme }) =>
    theme.transitions.create(['opacity', 'transform'], {
      duration: theme.transitions.duration.standard,
    })};
`;
