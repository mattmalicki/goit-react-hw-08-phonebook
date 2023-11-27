import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { Link } from 'react-router-dom';

import { Button } from '@chakra-ui/react';
import { PassInput } from 'components/atoms/PassInput/PassInput';
import { EmailInput } from 'components/atoms/EmailInput/EmailInput';
import { UsernameInput } from 'components/atoms/UsernameInput/UsernameInput';

const formStyles = {
  width: '50%',
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

// backgroundColor: 'rgba(182, 220, 174, 0.66)',

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.username.value,
        email: form.email.value,
        password: form.password.value,
      })
    );
  };
  return (
    <form name="register" style={formStyles} onSubmit={handleSubmit}>
      <h2>Register:</h2>
      <EmailInput />
      <UsernameInput />
      <PassInput />
      <Button type="submit" colorScheme="teal" variant="outline">
        Register
      </Button>
      <Button type="button" colorScheme="teal" variant="ghost">
        <Link to="/login">or Login</Link>
      </Button>
    </form>
  );
};
