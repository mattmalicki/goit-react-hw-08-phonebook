import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton';
import { FavButton } from 'components/atoms/FavButton/FavButton';

export const ContactsListItem = ({ contact }) => {
  return (
    <li>
      <div>
        <span>{contact.name}</span>
        <span>{contact.number}</span>
      </div>
      <div>
        <DeleteButton />
        <FavButton fav={contact.fav} />
      </div>
    </li>
  );
};
