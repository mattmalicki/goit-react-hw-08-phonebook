import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';

import { LoggedHome } from 'components/templates/LoggedHome/LoggedHome';
import { DefaultHome } from 'components/templates/DefaultHome/DefaultHome';

const Home = () => {
  const isLogged = useSelector(selectIsLoggedIn);
  return <>{isLogged ? <DefaultHome /> : <LoggedHome />}</>;
};

export default Home;
