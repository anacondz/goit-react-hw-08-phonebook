import { styled } from '@mui/material/styles';

export const ComonParagraph = styled('p')`
  display: block;

  margin: 0;
  margin-bottom: 30px;

  color: ${({ theme }) => theme.palette.text.secondary};
`;
