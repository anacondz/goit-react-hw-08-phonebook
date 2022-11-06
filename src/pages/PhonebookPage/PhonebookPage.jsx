import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { getFilterValue } from 'redux/filter/filterSelectors';
import { useAuth } from 'hooks/useAuth';
import { prepareFilteredContacts } from 'utilities/filtration';
import { ContactList, MessageContainer } from './PhonebookPageStyled';
import { ContactCard } from 'components/ContactCard/ContactCard';
import { InvisiblePageTitle } from 'components/shared';

export const PhonebookPage = () => {
  const { data: contacts, isSuccess } = useGetContactsQuery();
  const filterValue = useSelector(getFilterValue);
  const { user } = useAuth();

  const preparedContacts = prepareFilteredContacts(
    contacts,
    filterValue,
    isSuccess
  );

  return (
    <>
      <InvisiblePageTitle>Contacts</InvisiblePageTitle>

      {isSuccess && contacts.length === 0 ? (
        <MessageContainer>
          Welcome {user.name}!
          <br />
          Your phonebook is epmty for now.
        </MessageContainer>
      ) : null}

      {isSuccess && preparedContacts.length === 0 && contacts.length !== 0 ? (
        <MessageContainer>Sorry, nothing was found.</MessageContainer>
      ) : null}

      {isSuccess && preparedContacts.length !== 0 && contacts.length !== 0 ? (
        <ContactList>
          {preparedContacts.map(contact => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </ContactList>
      ) : null}
    </>
  );
};
