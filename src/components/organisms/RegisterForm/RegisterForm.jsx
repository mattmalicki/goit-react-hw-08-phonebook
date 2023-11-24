import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { PassInput } from 'components/atoms/PassInput/PassInput';
import { EmailInput } from 'components/atoms/EmailInput/EmailInput';
import { UsernameInput } from 'components/atoms/UsernameInput/UsernameInput';

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
    <form name="register" onSubmit={handleSubmit}>
      <EmailInput />
      <UsernameInput />
      <PassInput />
      <button type="submit">Register</button>
    </form>
  );
};
