import { EmailIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

export const EmailInput = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <EmailIcon />
      </InputLeftElement>
      <Input
        type="email"
        name="email"
        variant="outline"
        placeholder="Your email"
        required={true}
        focusBorderColor="teal.400"
      />
    </InputGroup>
  );
};
