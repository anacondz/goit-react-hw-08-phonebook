import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from './MainLayout';
import { refreshUser } from 'redux/auth/authOperations';
import { RegisterPage, LoginPage, PhonebookPage } from 'pages';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/phonebook" element={<PhonebookPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
