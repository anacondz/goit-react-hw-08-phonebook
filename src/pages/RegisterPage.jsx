import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { registerUser } from 'redux/auth/authOperations';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from 'utilities/validationSchemas';
import { PublicPageContainer } from 'components/PublicPageContainer/PublicPageContainer';
import {
  ComonInput,
  ComonButton,
  ComonLinearProgress,
} from 'components/shared';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { isPending } = useAuth();
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
        <Controller
          name="passwordConfirmation"
          control={control}
          render={({ field }) => (
            <ComonInput
              {...field}
              type="password"
              label="Confirm password"
              error={errors.passwordConfirmation ? true : false}
              helperText={
                errors.passwordConfirmation
                  ? errors.passwordConfirmation.message
                  : ' '
              }
              disabled={isPending}
            />
          )}
        />

        <ComonButton
          type="submit"
          variant="contained"
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
        </ComonButton>
        <ComonLinearProgress isvisible={isPending ? '1' : '0'} />
      </form>
    </PublicPageContainer>
  );
};
