import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/contacts/operations';
import {
  selectVisibleContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';

import { Loader } from 'components/atoms/Loader/Loader';
import { Filters } from 'components/organisms/Filters/Filters';
import { Message } from 'components/atoms/Message/Message';
import { ContactForm } from 'components/organisms/ContactForm/ContactForm';
import { ContactsList } from 'components/organisms/ContactList/ContactsList';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contactsAmount = useSelector(selectVisibleContacts).inPhonebook;
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {!error && !isLoading && (
        <>
          <ContactForm />
          {contactsAmount > 0 && <Filters />}
          {contactsAmount.length === 0 ? (
            <Message message="You have no contacts in your phonebook. Add some!" />
          ) : (
            <ContactsList />
          )}
        </>
      )}
    </div>
  );
};

export default Contacts;
