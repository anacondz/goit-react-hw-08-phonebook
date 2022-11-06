import PropTypes from 'prop-types';
import { useState } from 'react';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import { Divider } from '@mui/material';
import { cardNumberFormating } from 'utilities/cardNumberFormating';
import { ContactAvatar } from 'components/ContactAvatar/ContactAvatar';
import { ContactMenu } from 'components/ContactMenu/ContactMenu';
import { DeleteContactPrompt } from 'components/DeleteContactPrompt/DeleteContactPrompt';
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
import { ContactModal } from 'components/ContactModal';

export const ContactCard = ({ contact }) => {
  const { id, firstName, secondName, email, number } = contact;
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isContactModalOpened, setIsContactModalOpened] = useState(false);
  const [isDeletePromptOpened, setIsDeletePromptOpened] = useState(false);

  return (
    <CardContainer isMenuOpened={isMenuOpened}>
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
      <ContactMenu
        isOpened={isMenuOpened}
        setIsOpened={setIsMenuOpened}
        setIsContactModalOpened={setIsContactModalOpened}
        setIsDeletePromptOpened={setIsDeletePromptOpened}
      />
      <ContactModal
        contact={contact}
        isOpened={isContactModalOpened}
        setIsOpened={setIsContactModalOpened}
      />
      <DeleteContactPrompt
        id={id}
        firstName={firstName}
        secondName={secondName}
        isOpened={isDeletePromptOpened}
        setIsOpened={setIsDeletePromptOpened}
      />
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
