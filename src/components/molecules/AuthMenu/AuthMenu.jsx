import { NavLink } from 'react-router-dom';

import { Button, Stack } from '@chakra-ui/react';

export const AuthMenu = () => {
  return (
    <Stack spacing={4} direction="row" align="center">
      <NavLink to="register">
        <Button colorScheme="teal" size="md">
          Register
        </Button>
      </NavLink>
      <NavLink to="login">
        <Button colorScheme="teal" size="md">
          Log In
        </Button>
      </NavLink>
    </Stack>
  );
};
