import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton';
import { FavButton } from 'components/atoms/FavButton/FavButton';

export const ContactsListItem = ({ item }) => {
  return (
    <li>
      <div>
        <span> Contact name</span>
        <span> Contact number</span>
      </div>
      <div>
        <DeleteButton />
        <FavButton fav={item && true} />
      </div>
    </li>
  );
};
