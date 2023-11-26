import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import { NameInput } from 'components/atoms/NameInput/NameInput';
import { NumberInput } from 'components/atoms/NumberInput/NumberInput';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const isInPhonebook = name => {
    return contacts.filter(contact => contact.name === name).length >= 1;
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (isInPhonebook(form.name.value)) {
      console.log('This contact is already in your phonebook.');
      return;
    }
    dispatch(addContact({ name: form.name.value, number: form.number.value }));
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <NameInput />
      <NumberInput />
      <button type="submit">Add contact</button>
    </form>
  );
};
