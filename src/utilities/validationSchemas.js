import * as yup from 'yup';
import { NAME_PATTERN, PASSWORD_PATTERN } from 'constants/patterns';

yup.addMethod(
  yup.string,
  'notOneOfInLowercase',
  function (paramArr, errorMessage) {
    return this.test(`not-One-Of-In-Lowercase`, errorMessage, function (value) {
      const { path, createError } = this;

      if (paramArr.includes(value?.toLowerCase())) {
        return createError({ path, message: errorMessage });
      }
      return true;
    });
  }
);

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

export const createNewValidationSchema = (
  contacts,
  isContactsLoaded,
  contact
) => {
  if (!isContactsLoaded) return;

  const existingEmails = contacts.map(contact => contact.email.toLowerCase());
  const existingNumbers = contacts.map(contact => contact.number);

  return yup.object().shape({
    firstName: yup
      .string()
      .trim()
      .required('Please enter contact first name.')
      .matches(NAME_PATTERN, 'Invalid name format.')
      .min(2, 'Must contain at least 2 symbols.')
      .max(30, 'Must contain max 40 symbols.'),

    secondName: yup
      .string()
      .trim()
      .required('Please enter contact second name.')
      .matches(NAME_PATTERN, 'Invalid name format.')
      .min(2, 'Must contain at least 2 symbols.')
      .max(30, 'Must contain max 40 symbols.'),

    email: contact
      ? yup.string().trim().email('Invalid email format.')
      : yup
          .string()
          .trim()
          .email('Invalid email format.')
          .notOneOfInLowercase(existingEmails, 'Email already in contacts.'),

    number: contact
      ? yup
          .string()
          .required('Please enter contact phone number.')
          .min(13, 'Invalid phone number format.')
      : yup
          .string()
          .required('Please enter contact phone number.')
          .min(13, 'Invalid phone number format.')
          .notOneOfInLowercase(existingNumbers, 'Number already in contacts.'),
  });
};
