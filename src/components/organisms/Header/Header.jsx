import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';

import { AuthMenu } from 'components/molecules/AuthMenu/AuthMenu';
import { UserMenu } from 'components/molecules/UserMenu/UserMenu';
import { Navigation } from 'components/molecules/Navigation/Navigation';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </header>
    </>
  );
};
