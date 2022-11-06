import PropTypes from 'prop-types';
import { useRef } from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Divider } from '@mui/material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { ContactMenuWrapper, MenuItemText } from './ContactMenuStyled';

export const ContactMenu = ({
  isMenuOpened,
  setIsMenuOpened,
  setIsDeletePromptOpened,
}) => {
  const contactMenuButton = useRef(null);

  return (
    <ContactMenuWrapper>
      <IconButton
        aria-label="Contact menu"
        id="contact-menu-button"
        ref={contactMenuButton}
        aria-controls={isMenuOpened ? 'contact-menu' : false}
        aria-expanded={isMenuOpened ? 'true' : false}
        aria-haspopup="true"
        onClick={() => setIsMenuOpened(!isMenuOpened)}
      >
        <MoreVertOutlinedIcon />
      </IconButton>
      <Menu
        id="contact-menu"
        MenuListProps={{
          'aria-labelledby': 'contact-menu-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorEl={contactMenuButton.current}
        open={isMenuOpened}
        onClose={() => setIsMenuOpened(false)}
      >
        <MenuItem
        // onClick={handleClose}
        >
          <EditOutlinedIcon />
          <MenuItemText>Edit contact</MenuItemText>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            setIsMenuOpened(false);
            setIsDeletePromptOpened(true);
          }}
        >
          <DeleteOutlineOutlinedIcon color="error" />
          <MenuItemText red="true">Delete contact</MenuItemText>
        </MenuItem>
      </Menu>
    </ContactMenuWrapper>
  );
};

ContactMenu.propTypes = {
  isMenuOpened: PropTypes.bool.isRequired,
  setIsMenuOpened: PropTypes.func.isRequired,
  setIsDeletePromptOpened: PropTypes.func.isRequired,
};
