import PropTypes from 'prop-types';
import { TableItem } from './TransactionItem.styled';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <TableItem>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TableItem>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
