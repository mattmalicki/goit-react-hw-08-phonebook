import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { logout } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div>Welcome {user.name}</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
