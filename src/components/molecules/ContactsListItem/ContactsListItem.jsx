import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/operations';

import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton';

export const ContactsListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <li>
      <div>
        <span>{contact.name}</span>
        <span>{contact.number}</span>
      </div>
      <div>
        <DeleteButton onClick={handleDelete} />
      </div>
    </li>
  );
};
