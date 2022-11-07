import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { logIn } from 'redux/auth/authOperations';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { loginSchema } from 'utilities/validationSchemas';
import { PublicPageContainer } from 'components/PublicPageContainer/PublicPageContainer';
import {
  ComonInput,
  ComonLinearProgress,
  ComonLink,
  ComonParagraph,
} from 'components/shared';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { isPending, isRefreshing } = useAuth();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onLoginFormSubmit = userData => {
    dispatch(logIn(userData));
  };

  if (!isRefreshing)
    return (
      <PublicPageContainer title="Login">
        <form
          onSubmit={handleSubmit(onLoginFormSubmit)}
          noValidate
          autoComplete="off"
        >
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
                type={passwordVisibility ? 'text' : 'password'}
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
                          setPasswordVisibility(!passwordVisibility)
                        }
                        edge="end"
                      >
                        {passwordVisibility ? (
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
          <ComonParagraph>
            {"Haven't account yet? Please "}
            <ComonLink to="/register">register</ComonLink>
            {'.'}
          </ComonParagraph>
          <LoadingButton
            fullWidth
            type="submit"
            variant="contained"
            loading={isPending}
            disabled={
              errors.email || errors.password || isPending ? true : false
            }
          >
            Login
          </LoadingButton>
          <ComonLinearProgress isvisible={isPending ? '1' : '0'} />
        </form>
      </PublicPageContainer>
    );
};
