import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/operations';

import { PassInput } from 'components/atoms/PassInput/PassInput';
import { EmailInput } from 'components/atoms/EmailInput/EmailInput';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(login({ email: form.email.value, password: form.password.value }));
  };
  return (
    <form name="login" onSubmit={handleSubmit}>
      <EmailInput />
      <PassInput />
      <button type="submit">Login</button>
    </form>
  );
};
