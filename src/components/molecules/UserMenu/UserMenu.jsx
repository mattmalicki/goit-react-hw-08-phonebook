import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { logout } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

import { Button, Stack } from '@chakra-ui/react';

const userStyles = {
  border: '1px solid',
  borderRadius: '5px',
  borderColor: 'teal',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 10px',
  fontWeight: '600',
  fontSize: '1rem',
  color: 'teal',
  height: '40px',
};

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Stack spacing={4} direction="row" align="center">
      <div style={userStyles}>Welcome {user.name}</div>
      <Button
        colorScheme="teal"
        size="md"
        variant="outline"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Stack>
  );
};
