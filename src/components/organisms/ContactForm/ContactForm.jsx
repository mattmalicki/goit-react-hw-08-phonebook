import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import { Button } from '@chakra-ui/react';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { NameInput } from 'components/atoms/NameInput/NameInput';
import { NumberInput } from 'components/atoms/NumberInput/NumberInput';

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginBottom: '15px',
  padding: '5px',
  borderRadius: '5px',
  border: '1px solid black',
  backgroundColor: 'rgba(50, 126, 143, 0.55)',
};

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
    <form style={formStyles} onSubmit={handleSubmit}>
      <NameInput />
      <NumberInput />
      <Button type="submit" colorScheme="teal" variant="outline">
        <PlusSquareIcon /> Add contact
      </Button>
    </form>
  );
};
