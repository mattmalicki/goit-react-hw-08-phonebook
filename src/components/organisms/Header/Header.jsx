import { AuthMenu } from 'components/molecules/AuthMenu/AuthMenu';
import { UserMenu } from 'components/molecules/UserMenu/UserMenu';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        {true ? <AuthMenu /> : <UserMenu />}
      </header>
    </>
  );
};
