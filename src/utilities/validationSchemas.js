import * as yup from 'yup';
import { PASSWORD_PATTERN } from 'constants/patterns';

export const registerSchema = yup.object({
  name: yup.string().trim().required('Please enter your name.'),
  email: yup
    .string()
    .trim()
    .email('Invalid email format.')
    .required('Please enter your email address.'),
  password: yup
    .string()
    .required('Please enter your password.')
    .matches(
      PASSWORD_PATTERN,
      'Digits, capital and small letters. Min length 8.'
    ),
  passwordConfirmation: yup
    .string()
    .required('Please confirm your password.')
    .matches(
      PASSWORD_PATTERN,
      'Digits, capital and small letters. Min length 8.'
    )
    .oneOf([yup.ref('password'), null], 'Passwords must match.'),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email('Invalid email format.')
    .required('Please enter your email address.'),
  password: yup.string().required('Please enter your password.'),
});

export const contactSchema = yup.object({
  firstName: yup.string().trim().required('Please enter contact name.'),
  secondName: yup.string().trim().required('Please enter contact second name.'),
  email: yup
    .string()
    .trim()
    .email('Invalid email format.')
    .required('Please enter contact email.'),
  number: yup.string().trim().required('Please enter contact phone number.'),
});
