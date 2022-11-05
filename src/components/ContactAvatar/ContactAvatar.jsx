import PropTypes from 'prop-types';
import {
  FirstLetter,
  SecondLetter,
  RoundContainer,
} from './ContactAvatarStyled';

export const ContactAvatar = ({ firstName, secondName }) => {
  const firstLetter = firstName[0];
  const secondLetter = secondName ? secondName[0] : firstName[1];

  return (
    <RoundContainer>
      <FirstLetter>{firstLetter}</FirstLetter>
      <SecondLetter>{secondLetter}</SecondLetter>
    </RoundContainer>
  );
};

ContactAvatar.propTypes = {
  firstName: PropTypes.string.isRequired,
  secondName: PropTypes.string.isRequired,
};
