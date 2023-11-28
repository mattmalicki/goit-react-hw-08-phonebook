import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

import { useAuth } from 'hooks';

import { Button } from '@chakra-ui/react';
import { SpinnerIcon } from '@chakra-ui/icons';
import { PassInput } from 'components/atoms/PassInput/PassInput';
import { EmailInput } from 'components/atoms/EmailInput/EmailInput';

const formStyles = {
  width: '100%',
  maxWidth: '500px',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  gap: '15px',
  padding: '5px',
  border: '1px solid black',
  borderTop: '0',
  borderRadius: '0 0 5px 5px',
  marginTop: '-10px',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(login({ email: form.email.value, password: form.password.value }));
  };
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'right' }}>
      <form name="login" style={formStyles} onSubmit={handleSubmit}>
        <h2>Login:</h2>
        <EmailInput />
        <PassInput />
        <Button type="submit" colorScheme="teal" variant="outline">
          {isRefreshing ? <SpinnerIcon /> : 'Login'}
        </Button>
        <Button type="button" colorScheme="teal" variant="link">
          <Link to="/register">or Register</Link>
        </Button>
      </form>
    </div>
  );
};
