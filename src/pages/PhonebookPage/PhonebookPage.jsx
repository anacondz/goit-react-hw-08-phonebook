import { ContactCard } from 'components/ContactCard/ContactCard';
import { InvisiblePageTitle } from 'components/shared/InvisiblePageTitleStyled';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { ContactList } from './PhonebookPageStyled';

export const PhonebookPage = () => {
  const { data, isLoading } = useGetContactsQuery();

  return (
    <>
      <InvisiblePageTitle>Contacts</InvisiblePageTitle>
      <ContactList>
        {isLoading
          ? 'LOADING'
          : data.map(contact => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
      </ContactList>
    </>
  );
};
