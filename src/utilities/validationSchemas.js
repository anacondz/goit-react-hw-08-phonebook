import * as yup from 'yup';
import { PASSWORD_PATTERN } from 'constants/patterns';

export const registerSchema = yup.object({
  name: yup.string().trim().required('Please enter your name'),
  email: yup
    .string()
    .trim()
    .email('Invalid email format')
    .required('Please enter your email address'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(8, 'Mininimal length - 8 symbols')
    .matches(
      PASSWORD_PATTERN,
      'Must contain uppercase, lowercase letters and numbers'
    ),
  passwordConfirmation: yup
    .string()
    .required('Please enter your password confirmation')
    .min(8, 'Mininimal length - 8 symbols')
    .matches(
      PASSWORD_PATTERN,
      'Must contain uppercase, lowercase letters and numbers'
    )
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email('Invalid email format')
    .required('Please enter your email address'),
  password: yup.string().required('Please enter your password'),
});
