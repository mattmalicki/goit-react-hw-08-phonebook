import { useSelector } from 'react-redux/es/hooks/useSelector';

import { selectContacts } from 'redux/contacts/selectors';

import { ContactsListItem } from 'components/molecules/ContactsListItem/ContactsListItem';

export const ContactsList = () => {
  const array = [
    { id: 1, name: 'Adolf Hitler', number: '1010101010101', fav: false },
    { id: 2, name: 'Adolf Mitler', number: '1010101010101', fav: true },
    { id: 3, name: 'Adolf Kitler', number: '1010101010101', fav: false },
    { id: 4, name: 'Adolf Sitler', number: '1010101010101', fav: true },
    { id: 5, name: 'Adolf Witler', number: '1010101010101', fav: false },
  ];

  const contacts = useSelector(selectContacts);

  return (
    <ul>
      {console.log(contacts)}
      {array.map(contact => (
        <ContactsListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
