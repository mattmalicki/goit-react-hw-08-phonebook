import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';

import { Link } from 'react-router-dom';

export const Navigation = () => {
  let isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </div>
  );
};
