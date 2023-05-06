import { useDispatch } from 'react-redux';
import { Item, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { deleteContacts } from 'redux/contacts';

export function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <Item>
      {name}: {number}
      <Button type="button" onClick={() => dispatch(deleteContacts(id))}>
        Delete
      </Button>
    </Item>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
