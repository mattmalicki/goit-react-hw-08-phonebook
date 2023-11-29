import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';

export const NumberInput = ({ defaultValue = '' }) => {
  return (
    <InputGroup _focusWithin={{ color: 'blue' }}>
      <InputLeftElement>
        <PhoneIcon />
      </InputLeftElement>
      <Input
        focusBorderColor="blue.400"
        color="black"
        name="number"
        placeholder="Number"
        type="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required={true}
        defaultValue={defaultValue}
        borderColor="black"
        _hover={{ borderColor: 'grey' }}
      />
    </InputGroup>
  );
};
