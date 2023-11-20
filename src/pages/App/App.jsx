import { Routes, Route } from 'react-router-dom';

import { Home } from 'pages/Home/Home';
import { Layout } from 'pages/Layout/Layout';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import { Contacts } from 'pages/Contacts/Contacts';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};
