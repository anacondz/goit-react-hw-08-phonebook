import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const ComonLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.light};

  transition: ${({ theme }) =>
    theme.transitions.create(['color', 'transform'], {
      duration: theme.transitions.duration.standard,
    })};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;
