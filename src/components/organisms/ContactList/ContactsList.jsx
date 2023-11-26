import { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import { selectVisibleContacts } from 'redux/contacts/selectors';

import { ContactsListItem } from 'components/molecules/ContactsListItem/ContactsListItem';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts).items;
  const [expandId, setExpandId] = useState('');
  const handleClick = event => {
    const liElement = event.target.closest('li');
    if (event.target.nodeName === 'UL') {
      setExpandId('');
      return;
    }
    setExpandId(liElement.id);
  };
  return (
    <ul onClick={handleClick}>
      {contacts.map(contact => (
        <ContactsListItem
          key={contact.id}
          contact={contact}
          expand={expandId === contact.id}
        />
      ))}
    </ul>
  );
};
