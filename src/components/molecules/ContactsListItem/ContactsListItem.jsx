import { useDispatch } from 'react-redux';

import { deleteContact, updateContact } from 'redux/contacts/operations';

import { NameInput } from 'components/atoms/NameInput/NameInput';
import { NumberInput } from 'components/atoms/NumberInput/NumberInput';
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton';

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
    <li id={contact.id}>
      {expand ? (
        <form onSubmit={handleSubmit}>
          <NameInput defaultValue={contact.name} />
          <NumberInput defaultValue={contact.number} />
          <button type="submit">Update contact</button>
        </form>
      ) : (
        <div>
          <span>{contact.name}</span>
          <span>{contact.number}</span>
        </div>
      )}
      <div>
        <DeleteButton onClick={handleDelete} />
      </div>
    </li>
  );
};
