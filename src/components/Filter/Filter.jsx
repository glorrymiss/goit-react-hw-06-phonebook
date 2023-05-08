import { useDispatch, useSelector } from 'react-redux';
import { Input, Title } from './Filter.styled';

import { getFilter } from 'redux/selectors';
import { contactsFilter } from 'redux/contacts';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const filterChange = event => {
    dispatch(contactsFilter(event.currentTarget.value));
  };

  return (
    <>
      <Title>Find contacts by name</Title>
      <Input type="text" value={filter} name="filter" onChange={filterChange} />
    </>
  );
};
