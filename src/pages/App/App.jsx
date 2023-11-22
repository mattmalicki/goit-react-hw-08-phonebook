import { Routes, Route } from 'react-router-dom';

import { Home } from 'pages/Home/Home';
import { Layout } from 'pages/Layout/Layout';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import { Contacts } from 'pages/Contacts/Contacts';

export const App = () => {
  return (
    <Routes>
      <Route path="goit-react-hw-08-phonebook/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="goit-react-hw-08-phonebook/register"
          element={<Register />}
        />
        <Route path="goit-react-hw-08-phonebook/login" element={<Login />} />
        <Route
          path="goit-react-hw-08-phonebook/contacts"
          element={<Contacts />}
        />
      </Route>
    </Routes>
  );
};
