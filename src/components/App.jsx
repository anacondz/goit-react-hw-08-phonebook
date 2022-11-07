import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyles from '@mui/material/GlobalStyles';
import { MainLayout } from './MainLayout';
import { refreshUser } from 'redux/auth/authOperations';
import { PrivateRoute } from './PrivateRoute';
import { RegisterPage, LoginPage, PhonebookPage } from 'pages';
import { PublicRestrictedRoute } from './PublicRestrictedRoute';
import { globalStyles } from 'theme/globalStyles';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles styles={globalStyles} />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={<PrivateRoute component={<PhonebookPage />} />}
          />
          <Route
            path="login"
            element={<PublicRestrictedRoute component={<LoginPage />} />}
          />
          <Route
            path="register"
            element={<PublicRestrictedRoute component={<RegisterPage />} />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
