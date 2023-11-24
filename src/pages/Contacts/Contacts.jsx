import { ContactForm } from 'components/organisms/ContactForm/ContactForm';
import { ContactsList } from 'components/organisms/ContactList/ContactsList';
import { Filters } from 'components/organisms/Filters/Filters';

const Contacts = () => {
  return (
    <div>
      <ContactForm />
      <Filters />
      <ContactsList />
    </div>
  );
};

export default Contacts;
