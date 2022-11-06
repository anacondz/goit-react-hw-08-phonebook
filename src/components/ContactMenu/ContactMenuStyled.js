import { styled } from '@mui/material/styles';

export const ContactMenuWrapper = styled('div')`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const MenuItemText = styled('span')`
  display: block;

  margin-left: 10px;

  color: ${({ theme, red }) =>
    red === 'true' ? theme.palette.error.main : theme.palette.text.primary};
`;
