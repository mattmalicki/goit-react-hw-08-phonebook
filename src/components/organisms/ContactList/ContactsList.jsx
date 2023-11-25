import { useSelector } from 'react-redux/es/hooks/useSelector';

import { selectContacts } from 'redux/contacts/selectors';

import { ContactsListItem } from 'components/molecules/ContactsListItem/ContactsListItem';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ul>
      {contacts.map(contact => (
        <ContactsListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
