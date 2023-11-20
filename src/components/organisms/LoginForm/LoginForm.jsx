import { UsernameInput } from 'components/atoms/UsernameInput/UsernameInput';
import { PassInput } from 'components/atoms/PassInput/PassInput';

export const LoginForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.curretTarget;
    console.log(
      'Hellow ',
      form.username.value,
      ' with pass ',
      form.password.value
    );
  };
  return (
    <form name="login" onSubmit={handleSubmit}>
      <UsernameInput />
      <PassInput />
      <button type="submit">Login</button>
    </form>
  );
};
