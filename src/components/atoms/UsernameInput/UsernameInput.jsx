import { InfoIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

export const UsernameInput = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <InfoIcon />
      </InputLeftElement>
      <Input
        type="text"
        name="username"
        placeholder="Your username"
        required={true}
        focusBorderColor="teal.400"
      />
    </InputGroup>
  );
};
