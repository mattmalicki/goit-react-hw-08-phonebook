import { InfoIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

export const UsernameInput = () => {
  return (
    <InputGroup _focusWithin={{ color: 'teal' }}>
      <InputLeftElement>
        <InfoIcon />
      </InputLeftElement>
      <Input
        type="text"
        name="username"
        placeholder="Your username"
        title="You need to enter your name or username."
        required={true}
        focusBorderColor="teal.400"
      />
    </InputGroup>
  );
};
