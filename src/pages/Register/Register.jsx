import { RegisterForm } from 'components/organisms/RegisterForm/RegisterForm';
const styles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'right',
  flexWrap: 'nowrap',
  gap: '10px',
};

const Register = () => {
  return (
    <div style={styles}>
      <RegisterForm />
    </div>
  );
};

export default Register;
