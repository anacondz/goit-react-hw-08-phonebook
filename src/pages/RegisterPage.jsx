import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { registerUser } from 'redux/auth/authOperations';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from 'utilities/validationSchemas';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
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
    <form
      onSubmit={handleSubmit(onRegisterFormSubmit)}
      noValidate
      autoComplete="off"
    >
      <input type="text" {...register('name')} />
      <p>{errors.name?.message}</p>
      <input type="email" {...register('email')} />
      <p>{errors.email?.message}</p>
      <input type="password" {...register('password')} />
      <p>{errors.password?.message}</p>
      <input type="password" {...register('passwordConfirmation')} />
      <p>{errors.passwordConfirmation?.message}</p>

      <button type="submit">Register</button>
    </form>
  );
};
