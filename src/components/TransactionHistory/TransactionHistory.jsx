import PropTypes from 'prop-types';
import { TableTransactions, Option, Value } from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableTransactions>
      <thead>
        <tr>
          <Option>Type</Option>
          <Option>Amount</Option>
          <Option>Currency</Option>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <Value>{item.type}</Value>
              <Value>{item.amount}</Value>
              <Value>{item.currency}</Value>
            </tr>
          );
        })}
      </tbody>
    </TableTransactions>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
