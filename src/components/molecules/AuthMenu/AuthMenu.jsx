import { NavLink } from 'react-router-dom';

export const AuthMenu = () => {
  return (
    <>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </>
  );
};
