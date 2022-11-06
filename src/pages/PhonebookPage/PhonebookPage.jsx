import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { getFilterValue } from 'redux/filter/filterSelectors';
import { ContactList } from './PhonebookPageStyled';
import { ContactCard } from 'components/ContactCard/ContactCard';
import { InvisiblePageTitle } from 'components/shared';
import { prepareFilteredContacts } from 'utilities/filtration';

export const PhonebookPage = () => {
  const { data: contacts, isLoading, isSuccess } = useGetContactsQuery();
  const filterValue = useSelector(getFilterValue);

  const preparedContacts = prepareFilteredContacts(
    contacts,
    filterValue,
    isSuccess
  );

  return (
    <>
      <InvisiblePageTitle>Contacts</InvisiblePageTitle>
      <ContactList>
        {isLoading
          ? 'LOADING'
          : preparedContacts.map(contact => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
      </ContactList>
    </>
  );
};
