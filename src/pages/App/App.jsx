import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { useAuth } from 'hooks';
import { refresh } from 'redux/auth/operations';

import { Layout } from 'pages/Layout/Layout';
import { PrivateRoute } from 'components/organisms/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from 'components/organisms/RestrictedRoute/RestrictedRoute';

const HomePage = lazy(() => import('pages/Home/Home'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const RegisterPage = lazy(() => import('pages/Register/Register'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { iseRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return iseRefreshing ? (
    <b>Refreshing...</b>
  ) : (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
