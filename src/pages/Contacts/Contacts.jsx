import { ContactsList } from 'components/organisms/ContactList/ContactsList';
import { Filters } from 'components/organisms/Filters/Filters';

export const Contacts = () => {
  return (
    <div>
      <Filters />
      <ContactsList />
    </div>
  );
};
