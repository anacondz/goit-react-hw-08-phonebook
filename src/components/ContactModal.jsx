import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IMaskInput } from 'react-imask';
import {
  useAddContactMutation,
  useEditContactMutation,
} from 'redux/contacts/contactsApi';
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
} from 'components/shared';
import { useEffect } from 'react';

export const ContactModal = ({ contact, isOpened, setIsOpened }) => {
  const [addContact, { isLoading: isAddContactLoading }] =
    useAddContactMutation();
  const [editContact, { isLoading: isEditContactLoading }] =
    useEditContactMutation();

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    // getValues,
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

  useEffect(() => {
    if (contact && isOpened) {
      Object.entries(contact).forEach(value => setValue(...value));
    }
  }, [contact, isOpened, setValue]);

  const closeModal = () => {
    !contact && reset();
    setIsOpened(false);
  };

  // const disabledStateHandle = () => {
  //   if (contact) {
  //     const formValues = getValues();

  //     const valuesComparsion = [
  //       formValues.firstName === defaultValues.firstName,
  //       formValues.secondName === defaultValues.secondName,
  //       formValues.email === defaultValues.email,
  //       formValues.number === defaultValues.number,
  //     ];

  //     console.log(valuesComparsion.every(value => value === true));
  //   }
  // };

  // disabledStateHandle();

  const onContactFormSubmit = ({ firstName, secondName, email, number }) => {
    const name = JSON.stringify({ firstName, secondName, email });

    if (contact) {
      editContact({
        id: contact.id,
        body: {
          name,
          number,
        },
      })
        .unwrap()
        .then(closeModal)
        .catch(error => console.log('error!!!!!!!!!!!!!!!!!!!!!!!!!', error));
    } else {
      addContact({
        name,
        number,
      })
        .unwrap()
        .then(closeModal)
        .catch(() => console.log('error!!!!!!!!!!!!!!!!!!!!!!!!!'));
    }
  };

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
      open={isOpened}
      onClose={closeModal}
      aria-labelledby="modal-title"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpened}>
        <ModalContainer>
          <ModalTitle id="modal-title">
            {contact ? 'Update contact' : 'Add new contact'}
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
                  disabled={isAddContactLoading || isEditContactLoading}
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
                  disabled={isAddContactLoading || isEditContactLoading}
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
                  disabled={isAddContactLoading || isEditContactLoading}
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
                  disabled={isAddContactLoading || isEditContactLoading}
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
                loading={isAddContactLoading || isEditContactLoading}
                disabled={
                  errors.firstName ||
                  errors.secondName ||
                  errors.email ||
                  errors.number ||
                  isAddContactLoading ||
                  isEditContactLoading
                    ? true
                    : false
                }
              >
                {contact ? 'Update' : 'Add'}
              </LoadingButton>
            </ButtonsContainer>
            <ComonLinearProgress
              isvisible={
                isAddContactLoading || isEditContactLoading ? '1' : '0'
              }
            />
          </form>
        </ModalContainer>
      </Fade>
    </Modal>
  );
};

ContactModal.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    secondName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  isOpened: PropTypes.bool.isRequired,
  setIsOpened: PropTypes.func.isRequired,
};
