import { UsernameInput } from 'components/atoms/UsernameInput/UsernameInput';
import { PassInput } from 'components/atoms/PassInput/PassInput';
import { EmailInput } from 'components/atoms/EmailInput/EmailInput';

export const RegisterForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.curretTarget;
    console.log(
      'Hellow ',
      form.username.value,
      ' with pass ',
      form.password.value,
      ' and email ',
      form.email.value,
      '. Welcome!'
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
