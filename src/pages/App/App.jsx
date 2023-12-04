import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { useAuth } from 'hooks';
import { refresh } from 'redux/auth/operations';

import { Layout } from 'pages/Layout/Layout';
import { PrivateRoute } from 'components/organisms/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from 'components/organisms/RestrictedRoute/RestrictedRoute';
import { useToast } from '@chakra-ui/react';

const HomePage = lazy(() => import('pages/Home/Home'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const RegisterPage = lazy(() => import('pages/Register/Register'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn, error } = useAuth();
  const toast = useToast();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  useEffect(() => {
    toast.closeAll();
    isRefreshing &&
      setTimeout(() => {
        toast({
          title: 'Loading',
          description: 'Please wait.',
          status: 'loading',
          duration: 1500,
          isClosable: true,
        });
      }, 100);
  }, [isRefreshing, toast]);

  useEffect(() => {
    toast.closeAll();
    error &&
      setTimeout(() => {
        toast({
          title: 'Error',
          description: error,
          status: 'error',
          duration: 1500,
          isClosable: true,
        });
      }, 100);
  }, [error, toast]);

  useEffect(() => {
    toast.closeAll();
    isLoggedIn &&
      setTimeout(() => {
        toast({
          title: 'Success',
          description: 'All good.',
          status: 'success',
          duration: 1500,
          isClosable: true,
        });
      }, 100);
  }, [isLoggedIn, toast]);

  return isRefreshing ? (
    <b>Refreshing...</b>
  ) : (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/goit-react-hw-08-phonebook/register"
          element={
            <RestrictedRoute
              redirectTo="/goit-react-hw-08-phonebook/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/goit-react-hw-08-phonebook/login"
          element={
            <RestrictedRoute
              redirectTo="/goit-react-hw-08-phonebook/contacts"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/goit-react-hw-08-phonebook/contacts"
          element={
            <PrivateRoute
              redirectTo="/goit-react-hw-08-phonebook/login"
              component={<ContactsPage />}
            />
          }
        />
      </Route>
    </Routes>
  );
};
