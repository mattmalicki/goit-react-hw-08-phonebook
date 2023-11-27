import { Link } from 'react-router-dom';

import { Button } from '@chakra-ui/react';

const pageStyle = {
  width: '100%',
  height: '100%',
};

export const DefaultHome = () => {
  return (
    <div style={pageStyle}>
      <p>
        You are logged.{' '}
        <Link to="contacts">
          {' '}
          Go and see your{' '}
          <Button colorScheme="teal" size="md" variant="link">
            contacts
          </Button>
        </Link>
        .
      </p>
    </div>
  );
};
