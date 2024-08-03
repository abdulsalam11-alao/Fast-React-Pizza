import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import Button from '../../ui/Button';

import { deleteItem } from './cartSlice';

function DeletItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

DeletItem.propTypes = {
  pizzaId: propTypes.string,
};

export default DeletItem;
