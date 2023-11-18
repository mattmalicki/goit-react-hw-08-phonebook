import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={null} />
      <Route index element={null} />
      <Route path="/register" element={null} />
      <Route path="/login" element={null} />
      <Route path="/contacts" element={null} />
    </Routes>
  );
};
