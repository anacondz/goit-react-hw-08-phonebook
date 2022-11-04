import SearchIcon from '@mui/icons-material/Search';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {
  FilterContainer,
  AddButton,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './FilterFieldStyled';

export const FilterField = () => {
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
      <AddButton variant="contained" endIcon={<PersonAddIcon />}>
        Add
      </AddButton>
    </FilterContainer>
  );
};
