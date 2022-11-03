import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { logIn } from 'redux/auth/authOperations';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from 'utilities/validationSchemas';
import { PublicPageContainer } from 'components/PublicPageContainer/PublicPageContainer';
import {
  ComonInput,
  ComonButton,
  ComonLinearProgress,
  ComonLink,
  ComonParagraph,
} from 'components/shared';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { isPending } = useAuth();
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
              type="text"
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
              type="password"
              label="Password"
              error={errors.password ? true : false}
              helperText={errors.password ? errors.password.message : ' '}
              disabled={isPending}
            />
          )}
        />
        <ComonParagraph>
          {"Haven't account yet? Please "}
          <ComonLink to="/register">register</ComonLink>
          {'.'}
        </ComonParagraph>
        <ComonButton
          type="submit"
          variant="contained"
          disabled={errors.email || errors.password || isPending ? true : false}
        >
          Login
        </ComonButton>
        <ComonLinearProgress isvisible={isPending ? '1' : '0'} />
      </form>
    </PublicPageContainer>
  );
};
