import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';

import { Filters } from 'components/organisms/Filters/Filters';
import { ContactForm } from 'components/organisms/ContactForm/ContactForm';
import { ContactsList } from 'components/organisms/ContactList/ContactsList';

const Contacts = () => {
  const dispatch = useDispatch();
  const contactsAmount = useSelector(selectVisibleContacts).inPhonebook;
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      {contactsAmount > 0 && <Filters />}
      <ContactsList />
    </div>
  );
};

export default Contacts;
