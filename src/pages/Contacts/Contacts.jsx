import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchContacts } from 'redux/contacts/operations';

import { ContactForm } from 'components/organisms/ContactForm/ContactForm';
import { ContactsList } from 'components/organisms/ContactList/ContactsList';
import { Filters } from 'components/organisms/Filters/Filters';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      <Filters />
      <ContactsList />
    </div>
  );
};

export default Contacts;
