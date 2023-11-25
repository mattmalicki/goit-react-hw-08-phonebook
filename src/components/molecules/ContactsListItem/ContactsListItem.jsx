import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton';

export const ContactsListItem = ({ contact }) => {
  return (
    <li>
      <div>
        <span>{contact.name}</span>
        <span>{contact.number}</span>
      </div>
      <div>
        <DeleteButton />
      </div>
    </li>
  );
};
