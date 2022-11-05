import PropTypes from 'prop-types';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import { Divider } from '@mui/material';
import { cardNumberFormating } from 'utilities/cardNumberFormating';
import { ContactAvatar } from 'components/ContactAvatar/ContactAvatar';
import {
  CardContainer,
  ContentDivider,
  NameContainer,
  FirstName,
  SecondName,
  ContactContent,
  PhoneLinkContainer,
  EmailLinkContainer,
} from './ContactCardStyled';

export const ContactCard = ({ contact }) => {
  const { firstName, secondName, email, number } = contact;

  return (
    <CardContainer>
      <ContentDivider>
        <ContactAvatar firstName={firstName} secondName={secondName} />
        <ContactContent>
          <NameContainer>
            <FirstName>{firstName}</FirstName>
            <SecondName>{secondName}</SecondName>
            <Divider />
          </NameContainer>
          <PhoneLinkContainer href={`tel:${number}`}>
            <PhoneAndroidOutlinedIcon color="primary" />
            {cardNumberFormating(number)}
          </PhoneLinkContainer>
          {email ? (
            <EmailLinkContainer href={`mailto:${email}`}>
              <AlternateEmailOutlinedIcon color="primary" />
              {email}
            </EmailLinkContainer>
          ) : null}
        </ContactContent>
      </ContentDivider>
    </CardContainer>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    secondName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
