import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Backdrop, Modal, Fade } from '@mui/material';
import { ModalContainer, ModalTitle } from './ContactModalStyled';
import { useAddContactMutation } from 'redux/contacts/contactsApi';
import { contactSchema } from 'utilities/validationSchemas';
import {
  ComonInput,
  ComonButton,
  ComonLinearProgress,
} from 'components/shared';

export const ContactModal = ({ context, isOpen, setIsOpen }) => {
  const [addContact, { isLoading }] = useAddContactMutation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      firstName: '',
      secondName: '',
      email: '',
      number: '',
    },
  });

  const onContactFormSubmit = ({ firstName, secondName, email, number }) =>
    addContact({
      name: JSON.stringify({ firstName, secondName, email }),
      number,
    })
      .unwrap()
      .then(() => {
        reset();
        setIsOpen(false);
      })
      .catch(() => console.log('error!!!!!!!!!!!!!!!!!!!!!!!!!'));

  return (
    <Modal
      open={isOpen}
      onClose={() => {
        reset();
        setIsOpen(false);
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <ModalContainer>
          <ModalTitle>
            {context === 'add' ? 'Add new contact' : 'Update contact'}
          </ModalTitle>
          <form
            onSubmit={handleSubmit(onContactFormSubmit)}
            noValidate
            autoComplete="off"
          >
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <ComonInput
                  {...field}
                  type="text"
                  label="First Name"
                  error={errors.firstName ? true : false}
                  helperText={errors.firstName ? errors.firstName.message : ' '}
                  disabled={isLoading}
                />
              )}
            />
            <Controller
              name="secondName"
              control={control}
              render={({ field }) => (
                <ComonInput
                  {...field}
                  type="text"
                  label="Second Name"
                  error={errors.secondName ? true : false}
                  helperText={
                    errors.secondName ? errors.secondName.message : ' '
                  }
                  disabled={isLoading}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <ComonInput
                  {...field}
                  type="email"
                  label="Email"
                  error={errors.email ? true : false}
                  helperText={errors.email ? errors.email.message : ' '}
                  disabled={isLoading}
                />
              )}
            />
            <Controller
              name="number"
              control={control}
              render={({ field }) => (
                <ComonInput
                  {...field}
                  type="text"
                  label="Phone number"
                  error={errors.number ? true : false}
                  helperText={errors.number ? errors.number.message : ' '}
                  disabled={isLoading}
                />
              )}
            />

            <ComonButton
              type="submit"
              variant="contained"
              loading={isLoading}
              disabled={
                errors.firstName ||
                errors.secondName ||
                errors.email ||
                errors.number ||
                isLoading
                  ? true
                  : false
              }
            >
              {context === 'add' ? 'Add' : 'Update'}
            </ComonButton>
            <ComonLinearProgress isvisible={isLoading ? '1' : '0'} />
          </form>
        </ModalContainer>
      </Fade>
    </Modal>
  );
};

ContactModal.propTypes = {
  context: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
