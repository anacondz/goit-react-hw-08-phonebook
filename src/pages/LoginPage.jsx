import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { logIn } from 'redux/auth/authOperations';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from 'utilities/validationSchemas';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onLoginFormSubmit = userData => {
    dispatch(logIn(userData));
  };

  return (
    <form
      onSubmit={handleSubmit(onLoginFormSubmit)}
      noValidate
      autoComplete="off"
    >
      <input type="email" {...register('email')} />
      <p>{errors.email?.message}</p>
      <input type="password" {...register('password')} />
      <p>{errors.password?.message}</p>

      <button type="submit">Login</button>
    </form>
  );
};
