import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/slice';
import { selectFilter } from 'redux/filter/selectors';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

export default function Filter() {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <FilterContainer>
      <FilterLabel htmlFor="filter">Find contact by name</FilterLabel>
      <FilterInput
        type="text"
        id="filter"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </FilterContainer>
  );
}
