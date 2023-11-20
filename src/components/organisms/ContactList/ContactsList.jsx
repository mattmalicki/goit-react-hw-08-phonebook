import { ContactsListItem } from 'components/molecules/ContactsListItem/ContactsListItem';

export const ContactsList = () => {
  const array = [
    { id: 1, name: 'Adolf Hitler', number: '1010101010101', fav: flase },
    { id: 2, name: 'Adolf Mitler', number: '1010101010101', fav: true },
    { id: 3, name: 'Adolf Kitler', number: '1010101010101', fav: flase },
    { id: 4, name: 'Adolf Sitler', number: '1010101010101', fav: true },
    { id: 5, name: 'Adolf Witler', number: '1010101010101', fav: flase },
  ];

  return (
    <ul>
      {array.map(contact => (
        <ContactsListItem key={contact.id} item={contact} />
      ))}
    </ul>
  );
};
