import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IMaskInput } from 'react-imask';
import { useAddContactMutation } from 'redux/contacts/contactsApi';
import { Backdrop, Modal, Fade, InputAdornment, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import { contactSchema } from 'utilities/validationSchemas';
import { ComonInput, ComonLinearProgress } from 'components/shared';
import {
  ButtonsContainer,
  ModalContainer,
  ModalTitle,
} from './ContactModalStyled';

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

  const closeModal = () => {
    reset();
    setIsOpen(false);
  };

  const onContactFormSubmit = ({ firstName, secondName, email, number }) =>
    addContact({
      name: JSON.stringify({ firstName, secondName, email }),
      number,
    })
      .unwrap()
      .then(closeModal)
      .catch(() => console.log('error!!!!!!!!!!!!!!!!!!!!!!!!!'));

  const TextMaskCustom = forwardRef((props, ref) => {
    const { onChange, ...other } = props;

    return (
      <IMaskInput
        {...other}
        mask="{+38} (000) 000-00-00"
        unmask={true}
        inputRef={ref}
        onAccept={value => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  });

  return (
    <Modal
      open={isOpen}
      onClose={() => {
        reset();
        setIsOpen(false);
      }}
      aria-labelledby="modal-title"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <ModalContainer>
          <ModalTitle id="modal-title">
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
                  size="small"
                  fullWidth
                  type="text"
                  label="First Name"
                  error={errors.firstName ? true : false}
                  helperText={errors.firstName ? errors.firstName.message : ' '}
                  disabled={isLoading}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PersonOutlineOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            <Controller
              name="secondName"
              control={control}
              render={({ field }) => (
                <ComonInput
                  {...field}
                  size="small"
                  fullWidth
                  type="text"
                  label="Second Name"
                  error={errors.secondName ? true : false}
                  helperText={
                    errors.secondName ? errors.secondName.message : ' '
                  }
                  disabled={isLoading}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PersonAddAltOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
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
                  disabled={isLoading}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AlternateEmailOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            <Controller
              name="number"
              control={control}
              render={({ field }) => (
                <ComonInput
                  {...field}
                  size="small"
                  fullWidth
                  type="text"
                  label="Phone Number"
                  error={errors.number ? true : false}
                  helperText={errors.number ? errors.number.message : ' '}
                  disabled={isLoading}
                  autoFocus={errors.number ? true : false}
                  InputProps={{
                    inputComponent: TextMaskCustom,
                    endAdornment: (
                      <InputAdornment position="end">
                        <PhoneAndroidOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            <ButtonsContainer>
              <Button
                variant="outlined"
                color="error"
                fullWidth
                tabIndex={5}
                onClick={closeModal}
              >
                Cancel
              </Button>
              <LoadingButton
                type="submit"
                variant="contained"
                fullWidth
                tabIndex={4}
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
              </LoadingButton>
            </ButtonsContainer>
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
