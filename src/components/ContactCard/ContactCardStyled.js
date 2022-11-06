import { styled } from '@mui/material/styles';

export const CardContainer = styled('li')`
  position: relative;

  max-width: 350px;
  width: 100%;
  padding: 15px;

  background-color: white;

  border-radius: 10px;

  opacity: ${({ isMenuOpened }) => (isMenuOpened ? 0.5 : 0.95)};

  overflow: hidden;

  box-shadow: ${({ theme }) => theme.shadows[6]};

  transition: ${({ theme }) =>
    theme.transitions.create(['opacity', 'transform'], {
      duration: theme.transitions.duration.standard,
    })};

  @media screen and (min-width: 768px) {
    max-width: 450px;
  }
`;

export const AvatarDivider = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const ContactMenuContainer = styled('div')`
  display: flex;
  justify-content: space-evenly;

  margin-top: 5px;
`;

export const ContentDivider = styled('div')`
  display: flex;
`;

export const ContactContent = styled('div')`
  display: flex;
  flex-direction: column;

  margin-left: 15px;

  flex-grow: 1;
`;

export const NameContainer = styled('div')`
  width: 100%;
`;

export const FirstName = styled('p')`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;

  color: ${({ theme }) => theme.palette.primary.dark};

  text-transform: capitalize;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const SecondName = styled('p')`
  margin: 0;
  margin-bottom: 5px;

  font-size: 14px;
  line-height: 1.4;

  color: ${({ theme }) => theme.palette.text.secondary};

  text-transform: capitalize;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const PhoneLinkContainer = styled('a')`
  display: flex;
  align-items: center;

  margin-top: 10px;

  font-size: 12px;
  font-weight: 600;

  color: ${({ theme }) => theme.palette.text.primary};

  text-decoration: none;

  transition: ${({ theme }) =>
    theme.transitions.create(['color', 'transform'], {
      duration: theme.transitions.duration.standard,
    })};

  & :first-of-type {
    margin-right: 5px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  @media screen and (min-width: 350px) {
    font-size: 14px;
  }

  @media screen and (min-width: 370px) {
    font-size: 16px;
  }

  @media screen and (min-width: 380px) {
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const EmailLinkContainer = styled('a')`
  display: flex;
  align-items: center;

  margin-top: 10px;

  font-size: 12px;

  color: ${({ theme }) => theme.palette.text.primary};

  text-decoration: none;

  transition: ${({ theme }) =>
    theme.transitions.create(['color', 'transform'], {
      duration: theme.transitions.duration.standard,
    })};

  & :first-of-type {
    margin-right: 5px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  @media screen and (min-width: 380px) {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
