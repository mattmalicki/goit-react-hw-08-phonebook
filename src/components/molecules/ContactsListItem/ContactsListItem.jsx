import { useDispatch } from 'react-redux';

import { deleteContact, updateContact } from 'redux/contacts/operations';

import { EditIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { NameInput } from 'components/atoms/NameInput/NameInput';
import { NumberInput } from 'components/atoms/NumberInput/NumberInput';
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton';

const listItemStyles = {
  width: '100%',
  padding: '5px 10px',
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'left',
  alignItems: 'center',
  border: '1px solid black',
  borderRadius: '5px',
  backgroundColor: 'rgba(25, 70, 32, 0.43)',
};

const buttonsStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
};

const contactStyle = {
  display: 'flex',
  flexWrap: 'nowrap',
  gap: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'norwap',
  gap: '5px',
};

export const ContactsListItem = ({ contact, expand = false }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      updateContact({
        id: contact.id,
        name: form.name.value,
        number: form.number.value,
      })
    );
  };
  return (
    <li id={contact.id} style={listItemStyles}>
      {expand ? (
        <form style={formStyle} onSubmit={handleSubmit}>
          <NameInput defaultValue={contact.name} />
          <NumberInput defaultValue={contact.number} />
          <div style={buttonsStyle}>
            <Button colorScheme="blue" type="submit" variant="outline">
              <EditIcon /> Update
            </Button>
            <DeleteButton onClick={handleDelete} />
          </div>
        </form>
      ) : (
        <div style={contactStyle}>
          <span style={{ width: '150px', overflow: 'hidden' }}>
            {contact.name}
          </span>
          <span style={{ width: '150px', overflow: 'hidden' }}>
            {contact.number}
          </span>
        </div>
      )}
    </li>
  );
};
