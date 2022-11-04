import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {
  FilterContainer,
  AddButton,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './FilterFieldStyled';
import { ContactModal } from 'components/ContactModal/ContactModal';

export const FilterField = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <FilterContainer>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Filter…"
          inputProps={{ 'aria-label': 'Filter' }}
        />
      </Search>
      <AddButton
        variant="contained"
        endIcon={<PersonAddIcon />}
        onClick={() => setIsModalOpen(true)}
      >
        Add
      </AddButton>
      <ContactModal
        context="add"
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </FilterContainer>
  );
};
