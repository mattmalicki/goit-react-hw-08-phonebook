import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

export const NameInput = ({ defaultValue = '' }) => {
  return (
    <InputGroup _focusWithin={{ color: 'blue' }}>
      <InputLeftElement>
        <InfoIcon />
      </InputLeftElement>
      <Input
        focusBorderColor="blue.400"
        color="black"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required={true}
        defaultValue={defaultValue}
      />
    </InputGroup>
  );
};
