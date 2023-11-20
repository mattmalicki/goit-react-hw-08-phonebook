import { AuthMenu } from 'components/molecules/AuthMenu/AuthMenu';
import { UserMenu } from 'components/molecules/UserMenu/UserMenu';

export const Header = () => {
  return (
    <>
      <header>
        <div>Home button</div>
        {true ? <AuthMenu /> : <UserMenu />}
      </header>
    </>
  );
};
