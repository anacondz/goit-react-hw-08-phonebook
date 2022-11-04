import { useGetContactsQuery } from 'redux/contacts/contactsApi';

export const PhonebookPage = () => {
  const { data, error, isLoading } = useGetContactsQuery();

  console.log(data, isLoading);

  return <div>PHONEBOOK PAGE</div>;
};
