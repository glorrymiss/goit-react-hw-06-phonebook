import { useDispatch, useSelector } from 'react-redux';
import { Input, Title } from './Filter.styled';
// import PropTypes from 'prop-types';
// import { contactsFilter } from 'redux/contacts';
import { getFilter } from 'redux/selectors';

export const Filter = ({ onChange, value }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const filterChange = event => {
    dispatch(event.currentTarget.value);
  };

  return (
    <>
      <Title>Find contacts by name</Title>
      <Input type="text" value={filter} name="filter" onChange={filterChange} />
    </>
  );
};

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };
