import { useState } from 'react';

import { LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';

export const PassInput = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <InputGroup _focusWithin={{ color: 'teal' }}>
      <InputLeftElement>
        <LockIcon />
      </InputLeftElement>
      <Input
        type={show ? 'text' : 'password'}
        name="password"
        placeholder="Password"
        required={true}
        focusBorderColor="teal.400"
        minLength="7"
      />
      <InputRightElement width="4.5rem">
        <Button
          h="1.75rem"
          size="sm"
          variant="ghost"
          colorScheme="inherit"
          onClick={handleClick}
        >
          {show ? <ViewOffIcon /> : <ViewIcon />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
