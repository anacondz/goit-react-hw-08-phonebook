export const prepareFilteredContacts = (
  contacts,
  filterValue,
  isLoadingSuccess
) => {
  const normalizedFilterValue = filterValue.trim().toLowerCase();
  const prepearedContacts = [];

  const contactsData = isLoadingSuccess ? [...contacts] : null;

  contactsData &&
    contactsData.forEach(contact => {
      const { firstName, secondName, email, number } = contact;

      const normalizedFirstName = firstName.toLowerCase();
      const normalizedSecondName = secondName.toLowerCase();
      const normalizedFullName = `${normalizedFirstName} ${normalizedSecondName}`;
      const normalizedRevertedFullName = `${normalizedSecondName} ${normalizedFirstName}`;

      const variants = [
        normalizedFirstName,
        normalizedSecondName,
        normalizedFullName,
        normalizedRevertedFullName,
        email,
        number,
      ];

      if (variants.some(variant => variant.includes(normalizedFilterValue)))
        prepearedContacts.push(contact);
    });

  return prepearedContacts;
};
