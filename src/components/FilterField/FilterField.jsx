import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/filter/filterSelectors';
import { updateFilterValue } from 'redux/filter/filterActions';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { ContactModal } from 'components/ContactModal';
import {
  FilterContainer,
  AddButton,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './FilterFieldStyled';

export const FilterField = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handleFilterValueChange = ({ currentTarget }) =>
    dispatch(updateFilterValue({ filterValue: currentTarget.value }));

  return (
    <FilterContainer>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Filter…"
          inputProps={{ 'aria-label': 'Filter' }}
          value={filterValue}
          onChange={handleFilterValueChange}
        />
      </Search>
      <AddButton
        variant="contained"
        endIcon={<PersonAddIcon />}
        onClick={() => setIsModalOpened(true)}
      >
        Add
      </AddButton>
      <ContactModal isOpened={isModalOpened} setIsOpened={setIsModalOpened} />
    </FilterContainer>
  );
};
