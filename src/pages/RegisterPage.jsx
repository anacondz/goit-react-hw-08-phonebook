import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from 'hooks/useAuth';
import { registerUser } from 'redux/auth/authOperations';
import { LoadingButton } from '@mui/lab';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { registerSchema } from 'utilities/validationSchemas';
import { PublicPageContainer } from 'components/PublicPageContainer/PublicPageContainer';
import { ComonInput, ComonLinearProgress } from 'components/shared';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { isPending } = useAuth();
  const [passwordsVisibility, setPasswordsVisibility] = useState({
    password: false,
    passwordConfirmation: false,
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  });

  const onRegisterFormSubmit = ({ name, email, password }) => {
    dispatch(
      registerUser({
        name,
        email,
        password,
      })
    );
  };

  return (
    <PublicPageContainer title="Register">
      <form
        onSubmit={handleSubmit(onRegisterFormSubmit)}
        noValidate
        autoComplete="off"
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <ComonInput
              {...field}
              size="small"
              fullWidth
              type="text"
              label="Name"
              error={errors.name ? true : false}
              helperText={errors.name ? errors.name.message : ' '}
              disabled={isPending}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <ComonInput
              {...field}
              size="small"
              fullWidth
              type="email"
              label="Email"
              error={errors.email ? true : false}
              helperText={errors.email ? errors.email.message : ' '}
              disabled={isPending}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <ComonInput
              {...field}
              id="password"
              size="small"
              fullWidth
              type={passwordsVisibility.password ? 'text' : 'password'}
              label="Password"
              error={errors.password ? true : false}
              helperText={errors.password ? errors.password.message : ' '}
              disabled={isPending}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={() =>
                        setPasswordsVisibility({
                          ...passwordsVisibility,
                          password: !passwordsVisibility.password,
                        })
                      }
                      edge="end"
                    >
                      {passwordsVisibility.password ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Controller
          name="passwordConfirmation"
          control={control}
          render={({ field }) => (
            <ComonInput
              {...field}
              size="small"
              fullWidth
              type={
                passwordsVisibility.passwordConfirmation ? 'text' : 'password'
              }
              label="Confirm password"
              error={errors.passwordConfirmation ? true : false}
              helperText={
                errors.passwordConfirmation
                  ? errors.passwordConfirmation.message
                  : ' '
              }
              disabled={isPending}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={() =>
                        setPasswordsVisibility({
                          ...passwordsVisibility,
                          passwordConfirmation:
                            !passwordsVisibility.passwordConfirmation,
                        })
                      }
                      edge="end"
                    >
                      {passwordsVisibility.passwordConfirmation ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />

        <LoadingButton
          fullWidth
          type="submit"
          variant="contained"
          loading={isPending}
          disabled={
            errors.name ||
            errors.email ||
            errors.password ||
            errors.passwordConfirmation ||
            isPending
              ? true
              : false
          }
        >
          Register
        </LoadingButton>
        <ComonLinearProgress isvisible={isPending ? '1' : '0'} />
      </form>
    </PublicPageContainer>
  );
};
