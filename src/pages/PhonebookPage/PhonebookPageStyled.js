import { styled } from '@mui/material/styles';

export const ContactList = styled('ul')`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  justify-items: center;

  margin: 0;
  padding: 15px;

  list-style: none;

  @media screen and (min-width: 490px) {
    grid-template-columns: repeat(auto-fill, minmax(430px, 1fr));
    gap: 30px;

    padding: 30px;
  }

  @media screen and (min-width: 768px) {
    gap: 30px;

    padding: 30px;
  }
`;

export const MessageContainer = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 80%;
  margin: 0;

  font-size: 22px;
  font-weight: 600;

  color: white;

  text-align: center;

  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;
