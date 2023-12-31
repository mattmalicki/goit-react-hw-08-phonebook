import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import { selectVisibleContacts } from 'redux/contacts/selectors';

import { Message } from 'components/atoms/Message/Message';
import { ContactsListItem } from 'components/molecules/ContactsListItem/ContactsListItem';

const listStyles = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5px',
  listStyle: 'none',
  padding: '5px',
  border: '1px solid black',
  borderRadius: '5px',
  backgroundColor: 'rgba(206, 229, 210, 0.43)',
};

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

  const windowClick = event => {
    !event.target.closest('li') && setExpandId('');
  };

  useEffect(() => {
    setTimeout(() => {
      if (expandId) {
        window.addEventListener('click', windowClick);
      }
    }, 1000);
    return () => {
      window.removeEventListener('click', windowClick);
    };
  }, [expandId]);
  return (
    <ul style={listStyles} onClick={handleClick}>
      {contacts.length === 0 ? (
        <Message message="Seems like there isn't a single one contact with your querry." />
      ) : (
        contacts.map(contact => (
          <ContactsListItem
            key={contact.id}
            contact={contact}
            expand={expandId === contact.id}
          />
        ))
      )}
    </ul>
  );
};
