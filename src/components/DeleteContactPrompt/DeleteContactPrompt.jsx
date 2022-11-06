import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { Backdrop, Modal, Fade, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import {
  PromptMessage,
  ContactName,
  DeleteIcon,
} from './DeleteContactPromptStyled';
import {
  ModalContainer,
  ModalTitle,
  ButtonsContainer,
  ComonLinearProgress,
} from 'components/shared';

export const DeleteContactPrompt = ({
  id,
  firstName,
  secondName,
  isOpened,
  setIsOpened,
}) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const onContactDeleteSubmit = id =>
    deleteContact(id)
      .unwrap()
      .then(() => setIsOpened(false))
      .catch(() => console.log('error!!!!!!!!!!!!!!!!!!!!!!!!!'));

  return (
    <Modal
      open={isOpened}
      onClose={() => {
        setIsOpened(false);
      }}
      aria-labelledby="modal-title"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpened}>
        <ModalContainer>
          <ModalTitle id="modal-title">Delete contact</ModalTitle>
          <DeleteIcon />
          <ContactName>{`${firstName} ${secondName}`}</ContactName>
          <PromptMessage>
            You sure that you want to delete contact?
          </PromptMessage>
          <ButtonsContainer>
            <LoadingButton
              type="submit"
              variant="outlined"
              color="error"
              fullWidth
              loading={isLoading}
              disabled={isLoading}
              onClick={() => onContactDeleteSubmit(id)}
            >
              Delete
            </LoadingButton>
            <Button
              variant="contained"
              fullWidth
              disabled={isLoading}
              onClick={() => setIsOpened(false)}
            >
              Cancel
            </Button>
          </ButtonsContainer>
          <ComonLinearProgress isvisible={isLoading ? '1' : '0'} />
        </ModalContainer>
      </Fade>
    </Modal>
  );
};

DeleteContactPrompt.propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  secondName: PropTypes.string.isRequired,
  isOpened: PropTypes.bool.isRequired,
  setIsOpened: PropTypes.func.isRequired,
};
