import { Link } from 'react-router-dom';

import { Button } from '@chakra-ui/react';

export const LoggedHome = () => {
  return (
    <>
      Welcome to phonebook app!{' '}
      <Link to="login">
        <Button colorScheme="teal" size="md" variant="link">
          Log In
        </Button>
      </Link>{' '}
      or{' '}
      <Link to="register">
        <Button colorScheme="teal" size="md" variant="link">
          Register
        </Button>
      </Link>
      !
    </>
  );
};
