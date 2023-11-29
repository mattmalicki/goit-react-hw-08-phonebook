import { LoginForm } from 'components/organisms/LoginForm/LoginForm';

const styles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'right',
  flexWrap: 'nowrap',
  gap: '10px',
};

const Login = () => {
  return (
    <div style={styles}>
      <LoginForm />
    </div>
  );
};

export default Login;
