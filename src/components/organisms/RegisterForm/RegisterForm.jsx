import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { Link } from 'react-router-dom';

import { useAuth } from 'hooks';

import { Button, useToast } from '@chakra-ui/react';
import { SpinnerIcon } from '@chakra-ui/icons';
import { PassInput } from 'components/atoms/PassInput/PassInput';
import { EmailInput } from 'components/atoms/EmailInput/EmailInput';
import { UsernameInput } from 'components/atoms/UsernameInput/UsernameInput';

const formStyles = {
  width: '100%',
  maxWidth: '500px',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  gap: '15px',
  padding: '5px',
  border: '1px solid black',
  borderRadius: '5px',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { isRefreshing, error } = useAuth();
  const toast = useToast();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    toast.promise(
      dispatch(
        register({
          name: form.username.value,
          email: form.email.value,
          password: form.password.value,
        })
      ),
      {
        success: { title: 'Hurray!', description: 'Account created' },
        error: { title: 'Error', description: error },
        loading: { title: 'Registering', description: 'Creating an account' },
      }
    );
  };

  return (
    <form name="register" style={formStyles} onSubmit={handleSubmit}>
      <h2>Register:</h2>
      <EmailInput />
      <UsernameInput />
      <PassInput />
      <Button type="submit" colorScheme="teal" variant="outline">
        {isRefreshing ? <SpinnerIcon /> : 'Register'}
      </Button>
      <Button type="button" colorScheme="teal" variant="link">
        <Link to="/goit-react-hw-08-phonebook/login">or Login</Link>
      </Button>
    </form>
  );
};
