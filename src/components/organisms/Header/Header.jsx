import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';

import { AuthMenu } from 'components/molecules/AuthMenu/AuthMenu';
import { UserMenu } from 'components/molecules/UserMenu/UserMenu';
import { Navigation } from 'components/molecules/Navigation/Navigation';

const headerStyles = {
  width: '100%',
  paddingBottom: '5px',
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px',
  borderBottom: '1px solid black',
};

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header style={headerStyles}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </header>
    </>
  );
};
