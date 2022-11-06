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
import { ContactModal } from 'components/ContactModal';

export const FilterField = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

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
        onClick={() => setIsModalOpened(true)}
      >
        Add
      </AddButton>
      <ContactModal
        context="add"
        isOpened={isModalOpened}
        setIsOpened={setIsModalOpened}
      />
    </FilterContainer>
  );
};
